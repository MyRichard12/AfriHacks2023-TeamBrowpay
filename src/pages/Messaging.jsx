import { Header } from "../components"

const Messaging = () => {
    return (
        <div className="flex h-screen">
            <div>
                <Header />
            </div>
            <div className="h-screen flex-1 bg-slate-400 p-7">
                <h1 className="text-2xl font-semibold ">Messaging</h1>
                <p>My Messaging List</p>
            </div>
        </div>
    )
};

export default Messaging;
