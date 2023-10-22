import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Categories from "./components/Categories"
import Card from "./components/Card"
import Footer from "./components/Footer"
function App() {


  return (
    <div className="w-11/12 md:w-4/5 m-auto">
    <Navbar/>
    <div className="md:w-3/5 xl:w-1/3 m-auto text-center space-y-2 my-10">
      <h1 className="text-4xl font-semibold">Popular Pro Stock Vectors</h1>
      <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil consectetur, necessitatibus</p>

    <Search/>
    </div>
    <Categories/>
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">

    <Card src={"image1.jpg"} type={"FREE"}/>
    <Card src={"image2.jpg"} type={"PREMIUM"} />
    <Card src={"image3.jpg"} type={"PREMIUM"} />
    <Card src={"image1.jpg"} type={"FREE"}/>
    </div>
    <Footer/>
      
    </div>
  )
}

export default App
