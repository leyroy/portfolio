import {
	useScroll,
	useSpring,
	motion,
} from "framer-motion";
import React, { useRef } from "react";
import { Projectss } from "./Projectss";

export default function Projects() {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div
			ref={ref}
			className="relative w-screen px-2 pt-4 mb-10 md:px-6 md:pt-10"
		>
			<motion.div className="sticky right-0 flex flex-col items-center w-full gap-2 top-2 md:top-[3rem] ">
				<h1 className="font-mono text-4xl font-[900] ">
					What I Do
				</h1>
				<motion.div
					style={{ scaleX }}
					className="w-4/5 h-1 mx-auto bg-red-700 rounded-full "
				></motion.div>
			</motion.div>
			<div className="grid items-center row-span-full m-auto sm:grid-cols-2 grid-cols-1 max-w-[900px]">
				<Projectss />
			</div>
		</div>
	);
}
