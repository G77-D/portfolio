import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const Contact = () => {
	return (
		<div className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto py-16 w-full">
				<p className=" text-xl tracking-widest uppercase text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4d">Let Talk</h2>
				<div className=" grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div className="col-span-3 lg:col-spam-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:-4 h-full">
							<div>
								<img
									className="rounded-xl hover:scale-105 ease in duration-300 "
									src="/../public/assets/contact.jpeg"
									alt=" "
									with=""
									height=""
								/>
							</div>
							<div>
								<h2 className="py-2">Name here</h2>
								<p>Full stack dev & UX&IU Designer</p>
								<p className="py-4">
									I am available for freelance or full-time positions
								</p>
							</div>
						</div>

					</div>
					{/* right */}
				</div>
			</div>
		</div>
	);
};

export default Contact;
