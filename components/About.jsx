import React from 'react'
import Image from "next/image";
import Link from "next/link";
import garyImg from "../public/assets/gary .png";

const About = () => {
  return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<div class=" py-5 pr-3 shadow-xl rounded-xl   shadow-green-400 ">
						<p className="pt-2 py-2 pl-3 pr-4  text-gray-500">
							I specialize in building mobile responsive front-end UI
							applications that connect with API’s and other backend
							technologies. I’m passionate about learning new technologies and
							understand there is more than one way to accomplish a task. Though
							I am most proficient in building front-end applications using
							HTML, CSS, Javascript, and React, I am a quick learner and can
							pick up new tech stacks as needed. I believe that being a great
							developer is not using one specific language, but choosing the
							best tool for the job.
						</p>
						<p className="py-2 pl-3 pr-4 text-gray-600">
							I started web developement in 2013 managing multiple e-commerce
							websites on CMS platforms such as WordPress, BigCommerce, and
							Shopify. I have experience working directly with clients and
							taking mock wireframes all the way to deployed applications. In my
							spare time I run Code Commerce, a Youtube channel where I teach
							web developement and various front-end technologies.
						</p>
					</div>
				</div>
				<div className="w-full h-auto  shadow-xl shadow-green-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={garyImg} className="rounded-xl" alt="/" />
				</div>

				<button
					className=" mt-2 bg-transparent hover:scale-105 ease-in duration-300 text
					font-semibold py-2 px-4 border border-green rounded"
				>
					{" "}
					CV
				</button>
			</div>
		</div>
	);
}

export default About