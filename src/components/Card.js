import React from 'react'

function Card() {
    return (
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
            {/* card go here */}
            <div className="hover:shadow-lg bg-white rounded overflow-hidden shadow-md relative">
                <img src={require("../assets/Plate1.jpg")} alt="" className="object-cover w-full h-32 sm:h-48" />
                <div className="m-4">
                    <span className="font-bold">5 Bean Chilli Stew</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                </div>  
                <div className="bg-gray-300 text-xs font-bold rounded-full p-2 uppercase absolute top-0 ml-2 mt-2">
                <svg className="w-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>25 mins</span>
                </div>  
            </div>
            <div className="hover:shadow-lg bg-white rounded overflow-hidden shadow-md relative">
                <img src={require("../assets/Plate2.jpg")} alt="" className="object-cover w-full h-32 sm:h-48" />
                <div className="m-4">
                    <span className="font-bold">5 Bean Chilli Stew</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                </div>  
                <div className="bg-gray-300 text-xs font-bold rounded-full p-2 uppercase absolute top-0 ml-2 mt-2">
                <svg className="w-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>25 mins</span>
                </div>  
            </div>
            <div className="hover:shadow-lg bg-white rounded overflow-hidden shadow-md relative">
                <img src={require("../assets/Plate3.jpg")} alt="" className="object-cover w-full h-32 sm:h-48" />
                <div className="m-4">
                    <span className="font-bold">5 Bean Chilli Stew</span>
                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                </div>  
                <div className="bg-gray-300 text-xs font-bold rounded-full p-2 uppercase absolute top-0 ml-2 mt-2">
                    <svg className="w-5 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>25 mins</span>
                </div>  
            </div>
        </div>
    )
}

export default Card
