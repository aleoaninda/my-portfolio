import React from 'react'
import background from "../education-background.jpg";
import flinders from "../flinders.png";
import brac from "../brac.png";

export default function Education(){
    return (
        <main className="relative">
        <img src={background} alt="legos" className="absolute w-full" />
        <div className="p-10 lg:pt-30 container mx-auto relative">
            <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
            <img
                src={flinders}
                className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                alt="Flinders"
            />
            <div className="text-lg flex flex-col justify-center">
                <h1 className="cursive text-6xl text-green-300 mb-4">
                Flinders University
                </h1>
                <h2 className="text-green-200 text-lg">Master of Science (Computer Science)</h2>
                <p className="text-green-200 text-lg">February 2018 to November 2019</p>
            </div>
            </section>
        </div>
        <div className="p-10 lg:pt-30 container mx-auto relative">
            <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
            <img
                src={brac}
                className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                alt="BRAC"
            />
            <div className="text-lg flex flex-col justify-center">
                <h1 className="cursive text-6xl text-green-300 mb-4">
                BRAC University
                </h1>
                <h2 className="text-green-200 text-lg">Bachelor of Science in Computer Science and Engineering</h2>
                <p className="text-green-200 text-lg">February 2013 to August 2017</p>
            </div>
            </section>
        </div>
        </main>
    )
}