import React from 'react'
import background from "../contact-background.jpg";

export default function Contact(){
    return (
        <main className="relative">
        <img src={background} alt="phones" className="absolute w-full" />
        <div className="p-10 lg:pt-48 container mx-auto relative">
            <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20">
            <div className="text-lg flex flex-col justify-center">
                <h1 className="cursive text-6xl text-green-300 mb-4">
                My contact details: 
                </h1>
                <p className="text-green-200 text-lg">Phone: 0401 333 250</p>
                <p className="text-green-200 text-lg">Email: aleoaninda@gmail.com</p>
            </div>
            </section>
        </div>
        </main>
    )
}