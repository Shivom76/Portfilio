import Card from "./Card";

export default function Cards({text,data}){
    // const eduData=[
    //     { id: 1, title: "Jain University", content: "Bachelor in CSE-IoT" },
    //     { id: 2, title: "Don Bosco", content: "5-12" },
    // ]
    
    const items=data || []

    return(
        <div className="cardBox">
            <h3 className="ml-3">{text}</h3>
            {items.map((item)=>(
                <Card key={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    )
}