import React from "react";
import me from "../Assets/leyroy.jpg";
import {
	FaInstagram,
	FaFacebook,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa6";

function About() {
	return (
		<div className=" md:p-10 mb-10 p-2 m-auto gap-3 mt-9 w-full min-h-[89vh] nd:w-[80%] flex flex-col items-center justify-center ">
			<h1 className="mx-auto text-xl font-extrabold text-boled">
				About Me
			</h1>
			<div className="flex flex-col items-center justify-center mt-10 md:w-4/5 md:flex-row">
				<div className="flex-1">
					<h2 className="text-4xl font-extrabold ">Hello</h2>
					<h3 className="my-3 text-lg font-bold text-gray-100">
						here is who I am
					</h3>
					<div className="flex flex-col justify-between px-6 mt-10">
						<p className="p-4 text-lg font-semibold text-center ">
							Hello there! I'm Ley Roy, a passionate Frontend
							Developer on a mission to transform digital
							landscapes with creativity and precision.
						</p>
						<div className="flex items-center w-full gap-20 px-6 m-auto mt-16 mb-4 md:justify-between">
							<button className="px-3 py-2 text-sm transition-all duration-300 ease-in-out rounded-md bg-sky-700 hover:bg-sky-400 whitespace-nowrap">
								Download Resume
							</button>
							<button className="px-3 py-2 text-sm transition-all duration-300 ease-in-out rounded-md bg-sky-700 hover:bg-sky-400 whitespace-nowrap">
								Contact Me
							</button>
						</div>
					</div>
				</div>
				<div className="flex-1 rounded-md  bg-orange-700 mt-6 min-w-[50%] ">
					<div className="flex flex-col items-center w-full h-full p-4 text-black bg-white rounded-t-md ">
						<img
							src={me}
							alt=""
							className="w-56 h-56 rounded-full"
						/>
						<h1 className="mt-2 text-sm font-semibold ">
							ATIWEN SOLOMON
						</h1>
						<h2 className="text-sm text-gray-800">Ley Roy</h2>
					</div>
					<div className="flex items-center justify-center p-2 mx-auto gap-7">
						<FaInstagram className="text-2xl font-bold transition-all duration-200 ease-in-out rounded-full cursor-pointer w-7 h-7 hover:scale-105" />{" "}
						<FaFacebook className="text-2xl font-bold transition-all duration-200 ease-in-out rounded-full cursor-pointer w-7 h-7 hover:scale-105" />{" "}
						<FaLinkedin className="text-2xl font-bold transition-all duration-200 ease-in-out rounded-full cursor-pointer w-7 h-7 hover:scale-105" />
						<FaGithub className="text-2xl font-bold transition-all duration-200 ease-in-out rounded-full cursor-pointer w-7 h-7 hover:scale-105" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
