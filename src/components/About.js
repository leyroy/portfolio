import React from "react";
import me from "../Assets/leyroy.jpg";
import { motion } from "framer-motion";

function About() {
	return (
		<div className=" md:p-10 p-2 m-auto gap-3 mt-9 w-full min-h-[89vh] nd:w-[80%] flex flex-col items-center justify-center ">
			<h1 className="mx-auto text-xl font-extrabold text-boled">
				About Me
			</h1>
			<div className="flex flex-col items-center justify-center">
				<div className="flex w-[350px] h-[350px] flex-col items-end p-2 md:flex-row item-center">
					<motion.img
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						src={me}
						alt=""
						className="object-cover w-[320px] max-h-[300px] rounded-full md:mb-20"
					/>
				</div>
				<div className="flex flex-col items-center justify-between gap-6 px-4 mt-3 md:mt-0 ">
					<div className="flex flex-col items-center w-full gap-3 md:flex-row">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.7, delay: 0.4 }}
							className="flex flex-col items-center justify-center p-4 text-center bg-white border-2 border-purple-900 rounded-md hover:scale-105 hover:bg-fuchsia-800 group"
						>
							<h3 className="text-2xl font-bold group-hover:text-gray-600 text-sky-700">
								Web Developer
							</h3>
							<p className="p-2 text-xl font-semibold text-sky-950 group-hover:text-white">
								Ability to buld resposive website
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.79, delay: 0.49 }}
							className="flex flex-col items-center justify-center p-4 text-center bg-white border-2 border-purple-900 rounded-md hover:scale-105 hover:bg-fuchsia-800 group"
						>
							<h3 className="text-2xl font-bold group-hover:text-gray-600 text-sky-900">
								Web Developer
							</h3>
							<p className="p-2 text-xl font-semibold group-hover:text-white text-sky-950">
								Ability to buld resposive website
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.9, delay: 0.67 }}
							className="flex flex-col items-center justify-center p-4 text-center bg-white border-2 border-purple-900 rounded-md hover:scale-105 hover:bg-fuchsia-800 group"
						>
							<h3 className="text-2xl font-bold group-hover:text-gray-600 text-sky-700">
								Web Developer
							</h3>
							<p className="p-2 text-xl font-semibold group-hover:text-white text-sky-950">
								Ability to buld resposive website
							</p>
						</motion.div>
					</div>
					<p className=" md:w-4/5 p-4 px-2 sm:px-6 text-center md:px-3 text-[18px] font-bold tracking-wide text-slate-300 ">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Inventore qui voluptatibus aut? Asperiores,
						obcaecati tempora.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
