import { Header } from "../components"
import LineChart from "../components/Chart"

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Header />
      </div>
      <div className="h-screen flex-1 bg-slate-400 p-7">
        <h1 className="text-2xl font-semibold ">Inventory</h1>
        <p>Dashboard list</p>
        <div className="flex gap-3 mt-3 flex-wrap">
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start">Total Invoices</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/total-invoice.png" alt="" className="w-4 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start">Pending Invoices</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/progress.png" alt="" className="w-5 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start">Total Products</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/product.png" alt="" className="w-5 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start">Completed Payments</span>
            <span className="text-3xl text-gray-700">210</span>
            <img src="./src/assets/icons/payment.png" alt="" className="w-5 place-self-end" />
          </div>
          <div className="w-40 p-2 shadow-2xl grid place-items-center text-blue-800 font-semibold font-poppins border rounded bg-white h-24">
            <span className="text-xs place-self-start">Total Transactions</span>
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
