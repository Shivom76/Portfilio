import {useState} from "react"
import SkillProgress from "./SkillProgress"
import Card from "./Card"

export default function Tools({data}){
    const [activeSkillSet,setactiveSkillSet]=useState("front")

    // const tools=[
    //     {id:1, name:"Git", level:85},
    //     {id:2, name:"Github", level:90},
    //     {id:3, name:"Canva", level:89},
    // ]

    const tools=[
        {id:1, name:"Git",logo:<i className="fa-brands fa-git-alt "></i> },
        {id:2, name:"Github",logo:<i className="fa-brands fa-github"></i>,},
        {id:3, name:"Canva",logo:<i className="fa-solid fa-pen"></i>},
    ]

    const front= [
        { id: 1, name: "React.js", level: 80 },
        { id: 2, name: "Tailwind CSS", level: 85 },
        { id: 3, name: "JavaScript", level: 95 },
        { id: 4, name: "UI/UX Design", level: 75 },
        { id: 5, name: "Bootstrap", level: 85 },
      ];
      
      const back= [
        { id: 1, name: "Node.js", level: 95 },
        { id: 2, name: "Express", level: 86 },
        { id: 3, name: "Next js", level: 80 },
        { id: 4, name: "Python", level: 87 },
      ];
      
      const database=[
        { id: 1, name: "MongoDB", level: 85 },
        { id: 2, name: "MySQL", level: 85 },
        { id: 3, name: "PostgreSql", level: 85 },
      ]


    let print=(e)=>{
        {
        if(e.target.value=="back"){
            console.log(e.target.value)
            setactiveSkillSet("back")
        }
        if(e.target.value=="database"){
            console.log(e.target.value)
            setactiveSkillSet("database")
        }
        if(e.target.value=="front"){
            console.log(e.target.value)
            setactiveSkillSet("front")
        }
    }
    }

    const skillSets={
        front:front,
        back:back,
        database:database
    }

    const renderSkills=skillSets[activeSkillSet] || front

    return(
        <div className="text-center mt-3">
            <h2 className="font-extrabold text-xl"><span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-blue-800">Tools</span> And <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-700 to-blue-800">Skills</span></h2>
            <div className="mt-3">
                <button onClick={print} value="front" className="mx-2 px-4 py-3 rounded-lg text-sm font-semibold shadow-lg text-white 
                bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:from-indigo-300 hover:to-cyan-300 transition duration-300">Front End</button>
                <button onClick={print} value="back"  className="mx-2 px-4 py-3 rounded-lg text-sm font-semibold shadow-lg text-white 
                bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:from-indigo-300 hover:to-cyan-300 transition duration-300">Back End</button>
                <button onClick={print} value="database"  className="mx-2 px-4 py-3 rounded-lg text-sm font-semibold shadow-lg text-white 
                bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:from-indigo-300 hover:to-cyan-300 transition duration-300">Database</button>
            </div>


            <div className="skillSet flex justify-center">

                <div className="w-1/2 md:w-1/3 p-4 rounded-lg bg-gray-900/50 shadow-xl m-4">
                    <h3 className="text-xl font-bold mb-4">Tools</h3>
                    {/* {tools.map((skill) => (
                        <SkillProgress 
                            key={skill.id} 
                            skill={skill.name} 
                            percentage={skill.level} 
                        />
                        ))} */}
                        <ul>
                        {tools.map((item)=>(
                            <li className="my-2" key={item.id}>{item.logo}{item.name}</li>
                            ))}
                        </ul>
                </div>

                <div className="w-1/2 md:w-1/3 p-4 rounded-lg bg-gray-900/50 shadow-xl m-4">
                        <h3 className="text-xl font-bold mb-4">Skills</h3>
        

                        {renderSkills.map((skill) => (
                            <SkillProgress 
                                key={skill.id} 
                                skill={skill.name} 
                                percentage={skill.level} 
                            />
                            ))}
                </div>
            </div>

        </div>
    )
}