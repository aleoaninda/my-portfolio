import React from 'react'
import background from "../exp-background.jpg";

export default function Contact(){
    return (
        <main className="relative">
        <img src={background} alt="phones" className="absolute w-full" />
        <div className="p-10 lg:pt-30 container mx-auto relative">
            <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20">
            <div className="text-lg flex flex-col justify-center">
                <h2 className="text-3xl text-green-300">
                    Flinders University - Student Ambassador
                </h2>
                <h3 className="text-2xl text-green-300 mb-4">
                    August 2018 - August 2019
                </h3>
                <p className="text-green-200 text-lg">• Assisted the Events and Activation Team</p>
                <p className="text-green-200 text-lg">• Coordinated with the staff and volunteers</p>
                <p className="text-green-200 text-lg">• Documented and reported incidents to the security teams</p>
                <p className="text-green-200 text-lg">•	Guided prospective students in the campus</p>
            </div>
            </section>
        </div>
        <div className="p-10 lg:pt-30 container mx-auto relative">
            <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20">
            <div className="text-lg flex flex-col justify-center">
                <h2 className="text-3xl text-green-300">
                    Adi Insights - Customer Success Specialist
                </h2>
                <h3 className="text-2xl text-green-300 mb-4">
                    February 2019 - July 2019
                </h3>
                <p className="text-green-200 text-lg">•	Managed customer queries and issues using email and phone </p>
                <p className="text-green-200 text-lg">•	Replicated issues on controlled development environments</p>
                <p className="text-green-200 text-lg">•	Collaborated on fixing issues for the platform</p>
                <p className="text-green-200 text-lg">•	Tested on new features before final release on the platform</p>
            </div>
            </section>
        </div>
        </main>
    )
}