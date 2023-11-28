import { Header } from "../components"

const Profile = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Header />
      </div>
      <div className="h-screen flex-1 bg-slate-400 p-7">
        <h1 className="text-2xl font-semibold ">Profile</h1>
        <p>User </p>
      </div>
    </div>
  )
}

export default Profile
