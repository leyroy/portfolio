import React, { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import {
	IoStorefrontOutline,
	IoClose,
} from "react-icons/io5";
import { motion } from "framer-motion";

export default function Header({
	heroRef,
	aboutRef,
	projectRef,
	contactRef,
}) {
	const naveItems = [
		{
			name: "Home",
			ref: heroRef,
		},
		{
			name: "About",
			ref: aboutRef,
		},
		{
			name: "Portfoleo",
			ref: projectRef,
		},
		{
			name: "Contact",
			ref: contactRef,
		},
	];
	const [toglemenu, setToglemenu] = useState(false);
	const scrollToSection = (sectionRef) => {
		window.scrollTo({
			top: sectionRef.current.offsetTop,
			behavior: "smooth",
		});
	};
	return (
		<div className="fixed bottom-0 left-0 right-0 top-auto z-50 py-1 bg-black shadow-md md:bottom-auto md:top-0 md:px-12 md:bg-transparent">
			<div className="relative flex items-center justify-between w-full px-16 pt-1 ">
				<h1 className="text-lg font-semibold text-white md:font-bold md:text-3xl md:text-slate-900">
					Ley Roy
				</h1>

				<ul className="items-center justify-between hidden gap-5 md:flex">
					{naveItems.map((item) => (
						<li
							onClick={() => {
								setToglemenu(!toglemenu);
								scrollToSection(item.ref);
							}}
							className="m-auto cursor-pointer hover:underline hover:underline-offset-8 text-slate-700 "
							key={item.name}
						>
							{item.name}
						</li>
					))}
				</ul>
				<motion.ul
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 90 }}
					transition={{ delay: 0.2, duration: 0.2 }}
					className={`absolute left-0 md:hidden right-0 grid mb-4 border-b border-gray-400  grid-cols-2 gap-5 rounded-t-[2rem] bg-black bg-opacity-80 bottom-8 h-44  ${
						!toglemenu ? "hidden" : "block"
					}`}
				>
					{naveItems.map((item) => (
						<li
							onClick={() => {
								setToglemenu(!toglemenu);
								scrollToSection(item.ref);
							}}
							className="m-auto text-white cursor-pointer hover:underline hover:underline-offset-8 md:text-slate-700 "
							key={item.name}
						>
							{item.name}
						</li>
					))}
				</motion.ul>
				{!toglemenu ? (
					<IoStorefrontOutline
						onClick={() => setToglemenu(!toglemenu)}
						className="mt-1 text-2xl font-extrabold cursor-pointer md:hidden"
					/>
				) : (
					<IoClose
						onClick={() => setToglemenu(!toglemenu)}
						className="mt-1 text-2xl font-extrabold cursor-pointer md:hidden"
					/>
				)}
				<div className="flex items-center justify-center gap-2 mt-auto ">
					<div className="flex items-center justify-center w-10 h-10 p-1 rounded-full hover:bg-white">
						<a href="/#">
							<IoLogoLinkedin className="flex items-center justify-center text-xl font-semibold rounded-full " />
						</a>
					</div>
					<div className="flex items-center justify-center w-10 h-10 p-1 rounded-full hover:bg-white">
						<a href="#">
							<FaInstagramSquare className="text-xl font-semibold rounded-full " />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
