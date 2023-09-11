import Image from "next/image";
import React from 'react'

const Design = () => {
  return (
		<div className=" w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto  flex flex-col justify-center h-full ">
				<p className="text-xl mt- tracking-widest uppercase text-[#5651e5]">
					design tools
				</p>
				<h2 className="py-5">what can do</h2>
				{/* dev grid*/}
				<div className="grid md:grid-cols-2 lg:-cols-4 gap-8">
					<div className="p-6 shadow-xl shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/4.png"
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
									src="/../public/assets/skills/figma.png"
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
					<div className="p-6 shadow-xl  shadow-green-400 rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/../public/assets/skills/sketch.png"
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
									src="/../public/assets/skills/AD.png"
									alt="/"
									width="150"
									height="100"
								/>
							</div>
							<div className=" flex flex-col items-center just-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
			
				</div>
			</div>
		</div>
	);
}



export default Design