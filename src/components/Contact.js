import React from "react";
import {
	IoLogoFacebook,
	IoLogoWhatsapp,
	IoLogoInstagram,
} from "react-icons/io";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
	return (
		<div className="flex px-4 flex-col items-center justify-center w-full h-screen gap-12 m-auto mb-52 md:mb-4 mt-[7rem] md:mt-0 pt-20 sm:pt-9">
			<h1 className="text-[35px] font-bold mt-4">Contat Me</h1>
			<div className="flex flex-col items-center justify-center w-full px-3 md:flex-row ">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 90 }}
					transition={{ delay: 0.2, duration: 0.2 }}
					className="w-full h-full px-6 sm:max-w-7xl"
				>
					<div className="w-full h-auto text-white border p-9 rounded-2xl border-sky-600">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 90 }}
							transition={{ delay: 0.2, duration: 0.2 }}
							className="p-3 mb-4 border-b border-gray-900 "
						>
							<h1 className="font-bold flex items-center gap-2 text-[17px]">
								<IoLogoWhatsapp /> WhatsApp
							</h1>
							<a
								href="https://wa.me/message/OEZ42CSCHO2MN1"
								className=" text-[15px] mr-4 font-normal  hover:text-red-700"
							>
								+233554290614
							</a>
							<br />
							<a
								href="https://wa.me/message/OEZ42CSCHO2MN1"
								className=" text-[15px] font-normal  hover:text-red-700"
							>
								+233597840053
							</a>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 90 }}
							transition={{ delay: 0.28, duration: 0.25 }}
							className="p-3 mb-4 border-b border-gray-900 "
						>
							<h1 className="font-bold flex items-center gap-2 text-[17px]">
								<IoLogoFacebook /> Facebook
							</h1>
							<a
								href="https://instagram.com/ley__roy/?igshid=YWYwM2l1ZDdmQQ=="
								className=" text-[15px] mr-4 font-normal  hover:text-red-700"
							>
								Ley Roy
							</a>
							<br />
							<a
								href="https://instagram.com/ley__roy/?igshid=YWYwM2l1ZDdmQQ=="
								className=" text-[15px] font-normal  hover:text-red-700"
							>
								@ley__roy
							</a>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 90 }}
							transition={{ delay: 0.29, duration: 0.29 }}
							className="p-3 mb-4 border-b border-gray-900 "
						>
							<h1 className="font-bold flex items-center gap-2 text-[17px]">
								<IoLogoInstagram /> Instagram
							</h1>
							<a
								href="https://instagram.com/ley__roy/?igshid=YWYwM2l1ZDdmQQ=="
								className=" text-[15px] mr-4 font-normal  hover:text-red-700"
							>
								Ley Roy
							</a>
							<br />
							<a
								href="https://instagram.com/ley__roy/?igshid=YWYwM2l1ZDdmQQ=="
								className=" text-[15px] font-normal  hover:text-red-700"
							>
								@ley__roy
							</a>
						</motion.div>
					</div>
				</motion.div>
				<ContactForm className="" />
			</div>
		</div>
	);
}
