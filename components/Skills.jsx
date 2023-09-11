
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Skills = () => {
	return (
		<div id="skills" className=" w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto  flex flex-col justify-center h-full ">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					design tools
				</p>
				<h2 className="py-5">what can do</h2>
				{/* dev grid*/}
				<div className="grid md:grid-cols-2 lg:-cols-4 gap-8">
					<div className="p-6 shadow-xl  shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/html.png"
									alt="/"
									width="87"
									height="33"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/css.png"
									alt="/"
									width="87"
									height="33"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl shadow-green-400  rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/javascript.png"
									alt="/"
									width="87"
									height="33"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>Javascript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/tailwind.png"
									alt="/"
									width="87"
									height="55"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/python.png"
									alt="/"
									width="87"
									height="55"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>Python</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/MERN-pic.png"
									alt="/"
									width="150"
									height="100"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>Mern-Stack</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl  shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/github1.png"
									alt="/"
									width="87"
									height="55"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/firebase.png"
									alt="/"
									width="87"
									height="55"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>Firebase</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="flex  m-4 justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor pointer  hover:scale-110 ease-in duration-300">
							<HiOutlineChevronDoubleDown
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

export default Skills;
