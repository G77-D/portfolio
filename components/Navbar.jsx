import Home from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React,{useState, useEffect}from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
	const[nav,setNav]=useState(false)
	const [shadow, setShadow] = useState(false);
	const handleNav=()=>{
		setNav(!nav)
	}

useEffect(() => {
	const handleScroll = () => {
		if (window.scrollY > 20) {
			setShadow(true);
		} else {
			setShadow(false);
		}
	};
	window.addEventListener("scroll", handleScroll);
	return () => {
		window.removeEventListener("scroll", handleScroll);
	};
}, []);

	return (
		<div
			div
			className={
				shadow
					? "fixed w-full h-20 shadow-xl shadow-green-400  z-[100]"
					: "fixed w-full h-20  z-[100]"
			}
		>
			<div className="flex justify-between w-full h-full px-2 2xl:px-16">
				<Image
					src="/../public/assets/navLogo.png"
					alt="/"
					width="120"
					height="30"
				/>
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b p-5">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b p-5">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b p-5">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b p-5">
								Project
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase hover:border-b p-5">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden p-5">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#020201] p-10 ease in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className=" flex w-full items-center justify-between">
							<Image
								src="/../public/assets/navLogo.png"
								alt="/"
								width="87"
								height="33"
							/>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-green-400 p-4 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-green-300 my-4">
							<p className="md:w-[90%]py-4">Let create something</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">About</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Project</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Contact</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#7be551]">
								oi oi fuckers{" "}
							</p>
							<div className="flex item-center justify-between my-4 sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow- shadow-green-400 p-3 cursor pointer  hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow- shadow-green-400 p-3 cursor pointer  hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow- shadow-green-400 p-3 cursor pointer  hover:scale-105 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow- shadow-green-400 p-3 cursor pointer  hover:scale-105 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
