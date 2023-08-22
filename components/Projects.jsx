import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/projects/property.jpg";
import Link from "next/link";
import ProjectItems from "./ProjectItems";

const Projects = () => {
	return (
		<div className="w-full">
			<div className="max-w[1240px] mx-auto px-2 py-16 ">
				<p className=" text-xl tracking-widest uppercase text-[#5651e5]">
					project
				</p>
				<h2 className="py-4">What I have built</h2>
				<div className=" grid md:grid-cols-2 gap-8">
					<ProjectItems title=" Project-Tile" backgroundImg= {propertyImg}/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
