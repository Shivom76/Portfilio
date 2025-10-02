export default function Card({title,content}){
    return(
        <div className="bg-white/10 text-white shadow-lg rounded-lg p-6 backdrop-blur-sm border border-white/10 m-2 w-40">
            <div className="title font-bold">{title}</div>
            <p className="content text-xs">{content}</p>
        </div>
    )
}