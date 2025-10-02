// import './App.css'
import Navbar  from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Cards from "./components/Cards.jsx"
import Tools from "./components/Tools.jsx"
import SkillProgress from "./components/SkillProgress.jsx"


const eduData=[
  { id: 1, title: "Jain University", content: "Bachelor in CSE-IoT" },
  { id: 2, title: "Don Bosco", content: "5-12" },
]

const proffData=[
  { id: 1, title: "Company 1", content: "Bachelor in CSE-IoT" },
  { id: 2, title: "Company 2", content: "Bachelor in CSE-IoT" },
  { id: 3, title: "Company 3", content: "Bachelor in CSE-IoT" },
  { id: 4, title: "Company 4", content: "Bachelor in CSE-IoT" }

]

const skillData = [
  { id: 1, name: "React.js", level: 90 },
  { id: 2, name: "Tailwind CSS", level: 85 },
  { id: 3, name: "JavaScript", level: 95 },
  { id: 4, name: "Node.js", level: 70 },
  { id: 5, name: "MongoDB", level: 60 },
  { id: 6, name: "UI/UX Design", level: 75 },
];


function App() {
// bg-blue-950

return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-gray-900 text-white">
     
      <Navbar />
      <h1 className='text-center text-6xl font-extrabold tracking-tight 
    bg-clip-text text-transparent 
    bg-gradient-to-r from-indigo-400 to-cyan-400'>My Portfolio</h1>

      <h2 className="text-center text-lg">My Academic & Professional Journey</h2>
      <div className="Box flex justify-center">
        <Cards text="Education" data={eduData}/>

        <Cards text="Professional Experience"  data={proffData}/>
      </div>
      <Tools data={skillData}/>

      <Footer/>
    </div>
  )
}

export default App


// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch