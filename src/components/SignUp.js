import React from 'react'
import { Link } from 'react-router-dom'
import {GrTwitter} from "react-icons/gr"
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

function SignUp() {
    return (
        <div className="bg-gray-100 md:w-3/4 h-screen flex flex-wrap content-center justify-center">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="block text-gray-700 font-bold mb-5">Create an Accout</h1>
                <div className="mt-4 flex justify-center">
                    <Link to="https://www.linkedin.com"><div className="text-4xl mr-2 text-blue-500"><FaLinkedin /></div></Link>
                    <Link to="https://www.facebook.com"><div className="text-4xl text-blue-600"><FaFacebook /></div></Link>
                    <Link to="https://www.twitter.com"><div className="text-4xl ml-2 text-indigo-400"> <GrTwitter /> </div></Link>
                </div>
                <div className="w-5 ml-2 bg-red-200 grid-flow-row">
            </div>

            <p className="text-center text-gray-500 text-xs mt-2">
                or use your email for registration
            </p>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
                </label>
                <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex">
                <svg className="w-5" viewBox="0 0 20 20" fill="currentColor" class="user w-6 h-6"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <input className="ml-2" id="username" type="text" placeholder="name"/>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="number">
                Phone
                </label>
                <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex">
                <svg className="w-5" viewBox="0 0 20 20" fill="currentColor" class="phone w-6 h-6"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    <input className="ml-2" id="phone" type="number" placeholder="phone"/>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
                </label>
                <div className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <svg className="w-5" viewBox="0 0 20 20" fill="currentColor" class="mail w-6 h-6"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <input className="ml-2" id="email" type="text" placeholder="email"/>
                </div>
            </div>
            <div class="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
                </label>
                <div className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <svg className="w-5" viewBox="0 0 20 20" fill="currentColor" class="key w-6 h-6"><path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path></svg>
                <input className="ml-2" id="password" type="password" placeholder="****************"/>
                </div>
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>

            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign Up
                </button>
            </div>
            <p className="text-center text-gray-500 text-xs mt-3">
            &copy;2020 Jowin Corp. All rights reserved.
            </p>
        </div>

    </div>

    )
}

export default SignUp
