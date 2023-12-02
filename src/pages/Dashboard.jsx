import { Header } from "../components"
import LineChart from "../components/Chart"

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Header />
      </div>
      <div className="h-screen flex-1 bg-gray-50 p-7">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
      
        <div className="flex gap-12 mt-3 flex-wrap mx-auto w-fit">
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start mx-auto">Total Invoices</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/total-invoice.png" alt="" className="w-4 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start mx-auto">Stock in Inventory</span>
            <span className="text-3xl text-gray-700">33</span>
            <img src="./src/assets/icons/progress.png" alt="" className="w-5 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start mx-auto">Completed Payments</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/product.png" alt="" className="w-5 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start mx-auto">Completed Payments</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/payment.png" alt="" className="w-5 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start mx-auto">Total Transactions</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/transaction.png" alt="" className="w-5 place-self-end" />
          </div>
        </div>
        <LineChart />
      </div>
    </div>
  )
}

export default Dashboard
