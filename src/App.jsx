// import './App.css'
import Navbar  from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Cards from "./components/Cards.jsx"
import Tools from "./components/Tools.jsx"
import Contact from "./components/Contact.jsx"
// import pic from "./src/assets/pic1";


const eduData=[
  { id: 1, title: "Jain University", content: "Bachelor in CSE-IoT" },
  { id: 2, title: "Don Bosco", content: "5-12" },
]

const proffData=[
  { id: 1, title: "Company 1", content: "Bachelor in CSE-IoT" },
  { id: 2, title: "Company 2", content: "Bachelor in CSE-IoT" },
  { id: 3, title: "Company 3", content: "Bachelor in CSE-IoT" },
]

function App() {
// bg-blue-950

return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-gray-900 text-white">
     
      <Navbar />
      <h1 className='text-center text-6xl font-extrabold tracking-tight 
    bg-clip-text text-transparent 
    bg-gradient-to-r from-indigo-400 to-cyan-400 leading-relaxed'>My Portfolio</h1>



    <div className="flex justify-evenly items-center m-3">
      <div className="text-center">
        <img src="/images/pic1.jpg" alt="pic" className="h-72 rounded-lg"/>
      </div>
      <div>
        <p className=" text-center">Hi, I am Shivom Paul. A fullstack web Developer</p>
      </div>
    </div>



      <h2 className="text-center mt-3 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-blue-800">My Academic & Professional Journey</h2>
      <div className="Box flex justify-center">
        <Cards text="Education" data={eduData}/>

        <Cards text="Professional Experience"  data={proffData}/>
      </div>
      <Tools/>

      <Contact />

      <Footer/>
    </div>
  )
}

export default App


// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch