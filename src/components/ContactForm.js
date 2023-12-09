import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export default function ContactForm() {
	const [error, setError] = useState(null);
	const [errorStatus, setErrorStatus] = useState(false);
	const nameRef = useRef();
	const emailRef = useRef();
	const requestRef = useRef();

	const clearInputsValues = () => {
		nameRef.current.value = "";
		emailRef.current.value = "";
		requestRef.current.value = "";
	};

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
			clearInputsValues();
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
			className="relative w-full px-3 md:w-[42rem] sm:px-5 md:px-auto"
		>
			{error && (
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 0.2, duration: 0.2 }}
					className={`absolute m-auto self-center  text-center text-[13px] px-3 py-1 md:py-2 md:text-lg font-normal text-black ${
						!errorStatus ? "bg-red-600" : "bg-green-600"
					} rounded-md md:right-2 -top-8 `}
				>
					{error}
				</motion.p>
			)}
			<form
				action="submit"
				onSubmit={handleSubmit}
				className="flex flex-col items-start justify-center gap-3"
			>
				<label
					htmlFor="name"
					className="text-xl font-semibold"
				>
					Name
				</label>
				<input
					type="text"
					name="name"
					ref={nameRef}
					id="name"
					placeholder="Please enter your name here.."
					className="w-full mb-3 px-3 py-2 font-serif overflow-hidden text-[15px] bg-transparent border rounded-md outline-none border-sky-400 "
				/>
				<label
					htmlFor="name"
					className="text-xl font-semibold"
				>
					Email
				</label>
				<input
					type="email"
					name="name"
					ref={emailRef}
					id="name"
					placeholder="Please enter your email here.."
					className="w-full mb-3 px-3 py-2 font-serif text-[15px] bg-transparent border rounded-md outline-none border-sky-400 "
				/>
				<label
					htmlFor="name"
					className="text-xl font-semibold"
				>
					Your Request
				</label>
				<textarea
					type="text"
					name="name"
					ref={requestRef}
					id="name"
					placeholder="Please enter your request here.."
					className="w-full px-3 py-2 font-serif text-[15px] bg-transparent border rounded-md outline-none border-sky-400  min-h-[9rem] "
				/>
				<motion.button
					whileTap={{ scale: 0.9 }}
					type="submite"
					className="px-4 py-2 m-auto md:ml-auto w-4/5 md:w-auto rounded-lg font-semibold text-[12px] md:text-[17px] hover:bg-sky-950 duration-300 ease-in-out mt-3 bg-sky-700"
				>
					Submite
				</motion.button>
			</form>
		</motion.div>
	);
}
