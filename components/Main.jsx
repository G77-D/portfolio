import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {  AiOutlineMail} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
	return (
		<div className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className=" uppercase text-sm tracking-widest text-gray-600">
						{" "}
						The people who are crazy enough to think they can change the world
						are the ones who do{" "}
					</p>
					<h1 className="py-4 text-gray-700">
						Hello, Im <span className="text-[#5651e5]">Gary</span>
					</h1>
					<h1 className="py-2 text-gray-700">
						Full Stack Developer&UX&UI Designer
					</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
						exercitationem, labore amet quo laudantium minus corrupti
						reprehenderit explicabo eum. Voluptates, ex nihil pariatur rerum
						corporis quam ab dolorum laudantium id.
					</p>
					<div className="flex item-center justify-between max-w- py-4">
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
	);
};

export default Main;
