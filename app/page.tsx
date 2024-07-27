"use client";
import Link from "next/link";
import React, { useState } from "react";
import Particles from "./components/particles";
import PdfModal from "./components/modal";
import Navbar from "./components/Navbar";
import DecryptText from "./components/decrypt"


const itemVariants = {
	closed: {
		opacity: 0
	},
	open: { opacity: 1 }
};
const sideVariants = {
	closed: {
		transition: {
		staggerChildren: 0.2,
		staggerDirection: -1
		}
	},
	open: {
	  transition: {
		staggerChildren: 0.2,
		staggerDirection: 1
	  }
	}
};
  
export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to toggle the modal open/close state
	const toggleModal = () => {
		setIsModalOpen(true);
	};


	return (
		<div className="overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black h-screen">
			<Navbar/>
			<div className="flex flex-col items-center justify-center w-screen h-screen">
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>
				<h1 className="z-10 text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-9xl whitespace-nowrap bg-clip-text">
					Amjad <span className="hidden lg:inline">Al-Rahal</span>
				</h1>
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<DecryptText initialText="Full-Stack Web Developer"  />
				<div className="my-8 text-center animate-fade-in px-4">
					<h2 className="text-sm text-zinc-500 duration-500 hover:text-zinc-300 pb-1">
					Igniting innovation with an unwavering passion for the latest technologies.
					</h2>
					<h2 className="text-sm text-zinc-500 duration-500 hover:text-zinc-300">
					Driven to deliver exceptional results in fast-paced environments
					</h2>
					<a onClick={toggleModal} className="text-sm text-indigo-700 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1 cursor-pointer">
						Updated CV
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
							<path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
						</svg>
					</a>
				</div>
				<PdfModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
			</div>
		</div>
	);
}
