import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export default function ContactForm() {
	const [error, setError] = useState(null);
	const [errorStatus, setErrorStatus] = useState(false);
	const nameRef = useRef();
	const emailRef = useRef();
	const requestRef = useRef();

	const handleSubmit = (e) => {
		const claiantName = nameRef.current.value;
		const email = emailRef.current.value;
		const request = requestRef.current.value;
		e.preventDefault();
		const data = {
			claiantName,
			email,
			request,
		};
		if (
			claiantName !== "" &&
			email !== "" &&
			request !== ""
		) {
			console.log(data);
			setError("massage submitted");
			setErrorStatus(true);
			setTimeout(() => {
				setError(null);
				setErrorStatus(false);
			}, 2000);
		} else {
			setError("please fill all the fields");
			setTimeout(() => {
				setError(null);
			}, 2000);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 0.2 }}
			className="relative w-full px-8 md:max-w-3xl"
		>
			{error && (
				<p
					className={`absolute w-auto px-4 py-2 text-lg font-normal text-black ${
						!errorStatus ? "bg-red-600" : "bg-green-600"
					} rounded-lg right-2 -top-8 `}
				>
					{error}
				</p>
			)}
			<form
				action="submit"
				onSubmit={handleSubmit}
				className="flex flex-col items-start justify-center gap-3"
			>
				<label
					htmlFor="name"
					className="text-xl font-bold"
				>
					Name
				</label>
				<input
					type="text"
					name="name"
					ref={nameRef}
					id="name"
					placeholder="Please enter your name here.."
					className="w-full px-3 py-2 font-serif overflow-hidden text-[15px] bg-transparent border rounded-md outline-none border-sky-400 "
				/>
				<label
					htmlFor="name"
					className="text-xl font-bold"
				>
					Email
				</label>
				<input
					type="email"
					name="name"
					ref={emailRef}
					id="name"
					placeholder="Please enter your email here.."
					className="w-full px-3 py-2 font-serif text-[15px] bg-transparent border rounded-md outline-none border-sky-400 "
				/>
				<label
					htmlFor="name"
					className="text-xl font-bold"
				>
					Your Request
				</label>
				<textarea
					type="text"
					name="name"
					ref={requestRef}
					id="name"
					placeholder="Please enter your request here.."
					className="w-full px-3 py-2 font-serif text-[15px] bg-transparent border rounded-md outline-none border-sky-400  min-h-[8rem] "
				/>
				<button
					type="submite"
					className="px-4 py-2 ml-auto rounded-lg font-semibold text-[16px] hover:bg-sky-950 duration-300 ease-in-out  bg-sky-700"
				>
					Submite
				</button>
			</form>
		</motion.div>
	);
}
