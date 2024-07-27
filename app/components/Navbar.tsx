import React, { useState } from 'react'
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Particles from "./particles";
const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];
const Navbar : React.FC = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className="relative z-20">
            <nav className="flex flex-row items-start justify-between p-8 animate-fade-in h-12">
            <h3 className="text-xl duration-1000 cursor-default animate-title font-display sm:text-2xl whitespace-nowrap bg-clip-text p-2">
                <span className="text-edge-outline font-semibold">@Amjad &middot;<span className="text-transparent bg-white bg-clip-text animate-glow duration-2000 animate-fade-in"> Software</span></span>
            </h3>

                <ul className="items-center justify-center gap-4 hidden md:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-md duration-500 text-zinc-500 hover:text-zinc-300">
                            {item.name}
                        </Link>
                    ))}
                </ul>

                <div onClick={() => setNav(!nav)} className='cursor-pointer z-30 md:hidden text-zinc-500'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={25} />}
                </div>

                {nav && (
                    <>
                        <ul className="z-20 duration-1000 md:hidden flex flex-col items-center justify-center gap-4 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-800 to-gray-700 text-gray-500">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-4xl duration-500 font-display capitalize text-zinc-300 hover:text-zinc-400 text-edge-outline animate-glow whitespace-nowrap bg-clip-text">
                                    {item.name}
                                </Link>
                            ))}
                            <Particles className="absolute inset-0 -z-10" quantity={500} />

                        </ul>
                    </>
                )}

            </nav>
        </div>
    )
}

export default Navbar;