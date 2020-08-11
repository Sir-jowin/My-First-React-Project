import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    const [First, setFirst] = useState(true)
    const turggle = () => setFirst(!First)
    return (
        <div className="md-flex md:justify-end md:w-1/4">
        <nav className="text-right">
            <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase p-4 border-b border-gray-100" style={{fontSize:"2rem"}}><a href="/" className="hover:text-gray-800">Food Burger</a></h1>
                <div className="px-4 cursor-pointer md:hidden" id="burger" onClick={turggle}>
                    <svg className="w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
            </div>
            <ul className={`text-sm mt-6 ${First ? 'hidden': ""} md:block`} id="menu">
                <li className="text-gray-700 font-bold">
                    <Link to="/home" className="px-4 flex justify-end border-r-4 border-red-600">
                    <span>Home</span>
                    <svg className="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </Link>

                </li>
                <li className="mt-2">
                    <Link to="/about" className="px-4 flex justify-end border-r-4 border-white">
                        <span>About</span>
                        <svg className="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </Link>
                    </li>
                <li className="mt-1">
                    <Link to="/contact" className="px-4 flex justify-end border-r-4 border-white">
                        <span>Contact</span>
                        <svg className="w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                    </Link>
                    </li>
            </ul>
        </nav>
    </div>
    )
}

export default Menu
