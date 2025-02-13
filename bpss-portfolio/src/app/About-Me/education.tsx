import React from 'react';
import categories from '@/techstack';
import Link from 'next/link';
import TestimonialsSection from '@/components/Reviews';

const TechStackGrid = () => {

    return (
        <div className="mx-auto pt-14 px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">Tech Stack</span>
                <h2 className="mt-3 text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 ">What I know || My Technology Arsenal</h2>
                <p className="mt-4 text-gray-400">
                    A comprehensive suite of modern technologies I use to build powerful solutions
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(categories).map(([category, items]) => (
                    <div
                        key={category}
                        className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-600/10 rounded-lg">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white">{category}</h3>
                        </div>
                        <ul className="space-y-3">
                            {items.map((tech) => (
                                <li key={tech} className="flex items-center text-gray-400">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-20">
                <h3 className="text-xl font-semibold text-white text-center mb-8">Key Skills Gained</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <span
                        className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors">Problem
                        Solving</span>
                    <span
                        className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors">Team
                        Collaboration</span>
                    <span
                        className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors">Project
                        Management</span>
                    <span
                        className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors">Technical
                        Leadership</span>
                    <span
                        className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors">Communication</span>
                    <span
                        className="px-4 py-2 bg-neutral-800 text-gray-300 rounded-full hover:bg-neutral-700 transition-colors">Time
                        Management</span>
                </div>
            </div>


            <section id="why_hire_me" className="bg-black py-24">
                <div className=" mx-auto">

                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">Why Hire Me</span>
                        <h2 className="mt-3 text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">What Makes Me Different</h2>
                        <p className="mt-4 text-gray-400">A unique blend of technical expertise, business acumen, and creative
                            problem-solving</p>
                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                        <div
                            className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600/10 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Business Acumen</h3>
                            </div>
                            <p className="text-gray-400">B.Com background combined with technical skills provides unique insights into
                                business solutions.</p>
                        </div>


                        <div
                            className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600/10 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Early Adopter</h3>
                            </div>
                            <p className="text-gray-400">Started coding at 17, demonstrating passion, dedication, and ability to learn
                                quickly.</p>
                        </div>


                        <div
                            className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600/10 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Full Stack Mastery</h3>
                            </div>
                            <p className="text-gray-400">Comprehensive understanding of both frontend and backend development with modern
                                technologies.</p>
                        </div>


                        <div
                            className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600/10 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Content Creator</h3>
                            </div>
                            <p className="text-gray-400">Experience in creating engaging content with 250k+ monthly views, showcasing
                                communication skills.</p>
                        </div>


                        <div
                            className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600/10 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Problem Solver</h3>
                            </div>
                            <p className="text-gray-400">Strong analytical skills with a proven track record of delivering innovative
                                solutions.</p>
                        </div>


                        <div
                            className="group bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-600/10 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Future-Ready</h3>
                            </div>
                            <p className="text-gray-400">Passionate about AI, ML, and DevOps, constantly learning and adapting to new
                                technologies.</p>
                        </div>
                    </div>

                    <section id="freelance_services" className="bg-black py-20">
                        <div className=" mx-auto ">
                            <div className="grid md:grid-cols-3 py-10 pb-20 gap-8">
                                <div className="bg-neutral-800/50 rounded-lg p-6">
                                    <svg className="w-8 h-8 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <h4 className="text-white font-medium mb-2">Fast Delivery</h4>
                                    <p className="text-gray-400 text-sm">Quick turnaround without compromising quality</p>
                                </div>
                                <div className="bg-neutral-800/50 rounded-lg p-6">
                                    <svg className="w-8 h-8 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                    <h4 className="text-white font-medium mb-2">Clear Communication</h4>
                                    <p className="text-gray-400 text-sm">Regular updates and responsive support</p>
                                </div>
                                <div className="bg-neutral-800/50 rounded-lg p-6">
                                    <svg className="w-8 h-8 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <h4 className="text-white font-medium mb-2">Quality Guaranteed</h4>
                                    <p className="text-gray-400 text-sm">Clean code and modern best practices</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">250K+</div>
                            <p className="text-gray-400">Monthly Content Views</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                            <p className="text-gray-400">Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                            <p className="text-gray-400">Technologies Mastered</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-white mb-4">Ready to Work Together?</h3>
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 mb-8">Let's create something amazing that drives real business results</p>
                        <Link href="/Connect-With-Me"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors">
                            <span>Connect With ME</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechStackGrid;