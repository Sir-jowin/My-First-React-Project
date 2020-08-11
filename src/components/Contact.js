import React from 'react'

function Contact() {
    return (
        <div className="bg-gray-100 md:w-3/4 h-screen flex flex-wrap content-center justify-center">
            <div className="hover:shadow-lg bg-white rounded overflow-hidden shadow-md mr-6">
                <div className="m-4">
                    <span className="font-bold">Address:</span>
                    <span className="block text-gray-500 text-sm">
                    Sir-Jowin Web is located at ask me .com<br />
                    N432, Cold stone street,<br />
                    Jowin State, Country
                    </span>
                </div>   
            </div>

            <div className="hover:shadow-lg bg-white rounded overflow-hidden shadow-md">
                <div className="m-4">
                    <span className="font-bold">Give us a call on:</span>
                    <span className="block text-gray-500 text-sm">
                        +234-90-4498-6476<br />
                        +234-90-4498-6477<br />
                        +234-90-4498-6478
                    </span>
                </div>   
            </div>
            
        </div>
    )
}

export default Contact
