import "./css/Footer.css"

export default function Footer(){
    return(
        <div className="bg-black text-white text-center w-auto bottom-0 p-4">
            <h2 className="text-center mb-1">Developer page</h2>
            <p className="text-xs mb-4">Something written here</p>
            <hr className="w-2/3 mx-auto " />
            <div className="logos mt-3">
                <a href="#" className="px-1"><i className="fa-brands fa-instagram opacity-70"></i></a>
                <a href="#" className="px-1"><i className="fa-brands fa-github opacity-70"></i></a>
                <a href="#" className="px-1"><i className="fa-brands fa-x-twitter opacity-70"></i></a>
                <a href="#" className="px-1"><i className="fa-brands fa-facebook opacity-70"></i></a>  
            </div>
        </div>
    )
}