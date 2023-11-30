import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Header, Options, Tables } from '../components/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromInventory } from '../redux/actions/Inventory.action.js';
// import { authReducer } from '../redux/reducers/AuthReducer.js';
import { Box, Skeleton } from '@mui/material';


function Inventory({user}) {

  const dispatch = useDispatch()

  const [selected, setSelected] = useState([]);
  const [showLowStock, setShowLowStock] = useState(false);

  // Retrieve data from the Redux store
  const inventoryData = useSelector(state => state.getAllProductsFromInventoryReducer);
  const addInventoryData = useSelector(state => state.addProductToInventoryReducer)
  const updateInventoryData = useSelector(state => state.updateProductFromInventoryReducer)
  const deleteInventoryData = useSelector(state => state.deleteProductFromInventoryReducer)
  const adjustStockData = useSelector(state => state.adjustStockByIdReducer)
  const userData = useSelector(state => state.mainUserReducer)


  //delay the effect call
  const delay = (tims) => {
    return new Promise(resolve => setTimeout(resolve, tims))
  } 

  // Fetch all Products from inventory when the component mounts or when certain data changes
  // console.log(userData.data)
  useEffect(() => {
    async function delayer(){
     await delay(1000)
     dispatch(getAllProductsFromInventory());
    }
    if(userData.data?.status == true){  
     delayer()
  }
  }, [addInventoryData.data, updateInventoryData.data, deleteInventoryData.data, adjustStockData.data, userData.data])

  return (
    <>
    <div className="flex h-screen">
      <Toaster /> {/* Notification component */}
      <div>
      <Header />
      </div>
      <div className="app h-screen flex-1 p-7">
        <Box style={{ display: "flex" }}>
          <h1>Welcome back</h1>
        </Box>
        <Options showLowStock={showLowStock} setShowLowStock={setShowLowStock} selected={selected} setSelected={setSelected} />
        {
          inventoryData.loading ? ( // Display skeleton loader while loading data
            <>
              <Box style={{ padding: "0 55px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <Skeleton variant="rounded" width='100%' height={20} ></Skeleton>
                <Skeleton variant="rounded" width='100%' height={30} ></Skeleton>
                <Skeleton variant="rounded" width='100%' height={40} ></Skeleton>
                <Skeleton variant="rounded" width='100%' height={50} ></Skeleton>
                <Skeleton variant="rounded" width='100%' height={60} ></Skeleton>
              </Box>
            </>
          )
            : ( // Render the table component with filtered data if showLowStock is true, else render all data
              <Tables selected={selected} setSelected={setSelected} inventoryData={
                showLowStock
                  ? inventoryData.data.filter(
                    (data) => Number(data.StockQuantity) <= Number(data.LowStockUnit)
                  )
                  : inventoryData.data
              } />
            )
        }
        {user}
      </div>
      </div>      
    </>
  )
}

export default Inventory
