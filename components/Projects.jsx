import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import gymImg from "../public/assets/projects/gym.png";
import ProjectItems from "./ProjectItems";

const Projects = () => {
	return (
		<div id ="projects" className="w-full">
			<div className="max-w[1240px] mx-auto px-2 py-16 ">
				<p className=" text-xl tracking-widest uppercase text-[#5651e5]">
					project
				</p>
				<h2 className="py-4">What I have built</h2>
				<div className=" grid md:grid-cols-2 gap-8">
					<ProjectItems
						title="Project-Tile"
						backgroundImg={propertyImg}
						projectUrl="/property"
					/>
					<ProjectItems
						title="Gym-Website"
						backgroundImg={gymImg}
						projectUrl="/property"
					/>
					<ProjectItems
						title="Online-Shop"
						backgroundImg={netflixImg}
						projectUrl="/property"
					/>
					<ProjectItems
						title="crypto App"
						backgroundImg={cryptoImg}
						projectUrl="/property"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
