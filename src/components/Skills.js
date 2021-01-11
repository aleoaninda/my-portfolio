import React from 'react'
import html from "../html.jpg";
import css from "../css.jpg";
import javascript from "../javascript.png";

export default function Contact(){
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-100">
                            <img 
                                src={html}
                                alt="html5"
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-grey-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    HTML
                                </h3>
                            </span>
                        </span>
                    </article>
                    <article>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-100">
                            <img 
                                src={css}
                                alt="css3"
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-grey-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    CSS
                                </h3>
                            </span>
                        </span>
                    </article>
                    <article>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-100">
                            <img 
                                src={javascript}
                                alt="javascript"
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-grey-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    JavaScript
                                </h3>
                            </span>
                        </span>
                    </article>
                </div>
            </section>
        </main>
    )
}