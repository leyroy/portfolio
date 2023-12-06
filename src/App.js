import React, { useRef, useState } from "react";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollUp from "./components/ScrollUp";

export default function App() {
	const aboutRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);
	const heroRef = useRef(null);

	window.addEventListener("scroll", () => {});

	return (
		<div className="min-h-screen">
			<ScrollUp />
			<Header
				heroRef={heroRef}
				aboutRef={aboutRef}
				projectRef={projectRef}
				contactRef={contactRef}
			/>
			<section
				className="min-h-screen pb-4 flex items-center bg-[url(./Assets/leyroy.jpg)]  bg-no-repeat bg-blend-multiply bg-cover bg-center "
				ref={heroRef}
				id="home"
			>
				<HeroPage contactRef={contactRef} />
			</section>
			<section
				ref={aboutRef}
				id="projucts"
			>
				<About />
			</section>
			<section
				className="w-full"
				ref={projectRef}
				id="about"
			>
				<Projects />
			</section>
			<section
				ref={contactRef}
				id="contact"
			>
				<Contact />
			</section>
		</div>
	);
}
