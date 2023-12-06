import React from "react";
import leyroy from "../Assets/leyroy.jpg";
import { motion } from "framer-motion";

export default function HeroPage({ contactRef }) {
	const contactSection = () => {
		window.scrollTo({
			top: contactRef.current.offsetTop,
			behavior: "smooth",
		});
	};
	return (
		<div className="flex items-center justify-center px-3 mx-auto backdrop-blur-md md:pt-12 bg-none w-fu md:px-16">
			<div className="flex flex-col items-center justify-center gap-3 px-6 pt-6 md:gap-7 md:flex-row">
				<motion.div
					initial={{ opacity: 0, x: -10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.36, duration: 0.3 }}
					className=" gap-3 md:gap-6 px-2 flex items-center justify-center flex-col md:p-4 md:w-[500px]"
				>
					<div className="text-black sm:px-10 md:px-2 md:text-3xl">
						<h1 className="mb-2 text-4xl font-bold">Helo 👋🏽,</h1>
						<p className="text-3xl text-black">
							Welcome to Ley Roy's World of Web Development
							Excellence!
						</p>
					</div>
					<p className=" max-w-[30rem] text-black font-medium ">
						Hello there! I'm Ley Roy, a passionate Frontend
						Developer on a mission to transform digital landscapes
						with <br />
						creativity and precision.
					</p>
					<button
						onClick={contactSection}
						className="px-6 sm:max-w-[26rem] py-2 text-sm font-semibold text-white rounded-full w-[60%]   bg-slate-800"
					>
						Book Me
					</button>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 10 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="grid grid-flow-col max-h-[100%] items-center justify-center "
				>
					<img
						src={leyroy}
						alt=""
						height={50}
						width={"300"}
						className="object-cover rounded-md md:mt-5"
					/>
				</motion.div>
			</div>
		</div>
	);
}
