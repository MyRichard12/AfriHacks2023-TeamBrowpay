import Header from "../components/Header";

const Dashboard_new = () => {

  return (
    <div className="flex h-screen">
      <div>
        <Header />
      </div>
      <div className="h-screen flex-1 bg-slate-400 p-7">
        <h1 className="text-2xl font-semibold ">Dashboard</h1>
        <p>Welcome back!</p>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores id commodi laboriosam voluptatibus doloremque fugit aliquid aliquam neque illum magni. Asperiores repellat rem nostrum maxime minus sit repudiandae corporis animi.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, reprehenderit doloremque? Perspiciatis perferendis eligendi corporis ullam rerum at quidem dicta, modi mollitia tempore, deleniti corrupti, dolorem officia necessitatibus accusantium vero?</p>
        <a href="/Catalogue">Catalogue</a>
      </div>
    </div>
  );
};
export default Dashboard_new;
