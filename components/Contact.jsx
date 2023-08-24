import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpeg";

const Contact = () => {
	return (
		<div id ="contact" className=" w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					contact
				</p>
				<h2 className="py-4"> Get in touch</h2>
				<div className=" grid lg:grid-cols-5 gap-8">
					{/* left*/}
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:-4 h-full">
							<div>
								<img
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="/"
								/>
							</div>
							<div>
								<h2>Name</h2>
								<p>Full stack & UX-UI Designer </p>
								<p class="py-4">
									Iam available for Freelance or full time positio
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect with me</p>
								<div className=" flex items-center justify-between py-4">
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor pointer  hover:scale-110 ease-in duration-300">
										<FaLinkedin />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor pointer  hover:scale-110 ease-in duration-300">
										<FaGithub />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor pointer  hover:scale-110 ease-in duration-300">
										<AiOutlineMail />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor pointer  hover:scale-110 ease-in duration-300">
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* right  side  email panel */}
					<div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2"> Name</label>
										<input
											className=" border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											{" "}
											Phone Number
										</label>
										<input
											className=" border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
										/>
									</div>
								</div>
								<div className=" flex flex-col py-2">
									<label className="uppercase text-sm py-2">Email</label>
									<input
										className=" border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
									/>
								</div>
								<div className=" flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input
										className=" border-2 rounded-lg p-3 flex border-gray-300"
										type="Subject"
									/>
								</div>
								<div className=" flex flex-col py-2">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea
										className=" border-2 rounded-lg p-3 border-gray-300"
										rows="10"
									></textarea>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className=" flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor pointer  hover:scale-110 ease-in duration-300">
							<HiOutlineChevronDoubleUp
								className="text-[#5651e5]"
								size={30}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
