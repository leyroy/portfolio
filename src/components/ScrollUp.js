import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollUp() {
	const [isScrllup, setIsScrllup] = useState(false);
	window.addEventListener("scroll", function () {
		if (window.scrollY > 600) {
			return setIsScrllup(true);
		} else {
			setIsScrllup(false);
		}
	});

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const fadeInOut = {
		initial: { opacity: 0, y: 100 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0.9, y: 100 },
		transition: { duration: 0.4 },
	};
	return (
		isScrllup && (
			<motion.div
				{...fadeInOut}
				onClick={scrollUp}
				className="fixed z-20 p-1 rounded-md cursor-pointer group bg-sky-800 hover:bg-sky-700 bottom-20 right-4 md:right-16"
			>
				<FaArrowUp className="relative transition-all duration-300 ease-in-out group-hover:mb-2" />
				<motion.p
					{...fadeInOut}
					className="absolute left-0 z-40 hidden w-8 text-sm font-light text-white bottom-8 whitespace-nowrap inset-x-full md:group-hover:block "
				>
					{" "}
					scroll up ⬆
				</motion.p>
			</motion.div>
		)
	);
}
