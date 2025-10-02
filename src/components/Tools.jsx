import SkillProgress from "./SkillProgress"

export default function Tools({data}){
    const items=data || []
    const tools=[
        {id:1, name:"Git", level:85},
        {id:2, name:"Github", level:90},
        {id:3, name:"Canva", level:89},
    ]


    return(
        <div className="text-center mt-4">
            <span className="">Tools</span> And Skills
            <div className="mt-3">
                <button className="mx-2 px-4 py-3 rounded-lg text-sm font-semibold shadow-lg text-white 
                bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:from-indigo-300 hover:to-cyan-300 transition duration-300">Front End</button>
                <button className="mx-2 px-4 py-3 rounded-lg text-sm font-semibold shadow-lg text-white 
                bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:from-indigo-300 hover:to-cyan-300 transition duration-300">Back End</button>
                <button className="mx-2 px-4 py-3 rounded-lg text-sm font-semibold shadow-lg text-white 
                bg-gradient-to-r from-indigo-400 to-cyan-400
                hover:from-indigo-300 hover:to-cyan-300 transition duration-300">Database</button>
            </div>


            <div className="skillSet flex justify-between">

                <div className="w-1/2 md:w-1/3 p-4 border rounded-lg bg-gray-800 shadow-xl m-4">
                    <h3 className="text-xl font-bold mb-4">Tools</h3>
                    {tools.map((skill) => (
                        <SkillProgress 
                            key={skill.id} 
                            skill={skill.name} 
                            percentage={skill.level} 
                        />
                        ))}
                </div>

                <div className="w-1/2 md:w-1/3 p-4 border rounded-lg bg-gray-800 shadow-xl m-4">
                        <h3 className="text-xl font-bold mb-4">Skills</h3>
                        {items.map((skill) => (
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