import React from 'react'
import Menu from './Menu'
import Card from './Card'
import { Route, Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import SignUp from './SignUp'


function Hello() {
    return (
        <div className="text-gray-600 font-body md:flex">
            <Menu />
            <Route exact path="/Home">
            <main className="px-16 py-6 bg-gray-100 md:w-3/4">
                <div className="flex justify-center md:justify-end">
                    <Link to="/login" className="ml-2 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-red-400 md:border-2 hover:bg-red-300 hover:text-white transition ease-out duration-500" style={{color:"#dc5a0e"}}>Log In</Link>
                    <Link to="/signup" className="ml-2 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-red-400 md:border-2 hover:bg-red-300 hover:text-white transition ease-out duration-500" style={{color:"#dc5a0e"}}>Sign Up</Link>
                </div>

                <div className="flex items-baseline">
                    <div className="bg-red-500 h-4 w-6"></div>
                    <div className="bg-blue-500 h-8 w-6"></div>
                    <div className="bg-green-500 h-12 w-6"></div>
                </div>

                <header>
                    <h2 className="text-gray-700 text-4xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold">For Jowin</h3>
                </header>
                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
                    <Card />
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
                    <div className="mt-8">
                        {/* card go here */}
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-gray-300 text-gray-500 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</div>
                    </div>
                </div>
            </main>
            </Route>

            <Route exact path = "/about">
                <About />
            </Route>

            <Route exact path = "/contact">
                <Contact />
            </Route>

            <Route exact path = "/login">
                <Login />
            </Route>

            <Route exact path = "/signup">
                <SignUp />
            </Route>
            
        </div>
    )
}

export default Hello
