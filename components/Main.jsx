import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {garyImg} from "../public/assets/gary .png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi"; 


const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						LET&#39;S The people who are crazy enough to think they can change
						the world are the ones who do.
					</p>
					<h1 className="py-4 text-gray-500">
						Hi, I,m <span className="text-[#5651e5]"> Gary</span>
					</h1>
					<h1 className="py-2 text-gray-500">
						A Fullstack Developer & UI-UX Designer{" "}
					</h1>
					<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
						I’m focused on designing and building responsive front-end web applications
						integrating back-end technologies.
					</p>

					<div className=" flex justify-center mt-4 py-8">
						<Link href="/#about">
							<div className="rounded-full  mt-3 shadow-lg shadow-green-300 p-4 cursor pointer  hover:scale-110 ease-in duration-300">
								<HiOutlineChevronDoubleDown
									className="text-[#5651e5]"
									size={30}
								/>
							</div>
						</Link>
					</div>

					{/* Social icons */}
					<div className=" hidden lg:flex fixed flex-col top-[35%] py-4 left-5">
						<a
							href="https://www.linkedin.com/in/clint-briley-50056920a/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg mb-5 shadow- shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href="https://github.com/fireclint"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg  mb-5 shadow- shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<Link href="/#contact">
							<div className="rounded-full shadow-lg mb-5 shadow- shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</Link>
						<Link href="/resume">
							<div className="rounded-full shadow-lg shadow- shadow-green-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<BsFillPersonLinesFill />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
