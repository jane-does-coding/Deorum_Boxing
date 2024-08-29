import React from "react";

const Gallery = () => {
	return (
		<div className="">
			<h1 className="text-[2rem] md:text-[3rem] chakra mx-auto flex  items-center justify-center pt-[6rem]">
				Gallery
			</h1>
			<div className="flex flex-col md:grid md:grid-cols-3 px-4 py-6 gap-4  pb-4">
				<img src="/group1.JPG" className="w-full rounded-[0.5rem]" alt="" />
				<img src="/group2.JPG" className="w-full rounded-[0.5rem]" alt="" />
				<img src="/group3.JPG" className="w-full rounded-[0.5rem]" alt="" />
				<img src="/room1.JPG" className="w-full rounded-[0.5rem]" alt="" />
				<img src="/room2.JPG" className="w-full rounded-[0.5rem]" alt="" />
				<img src="/room3.JPG" className="w-full rounded-[0.5rem]" alt="" />
				<img
					src="/smallgroup1.JPG"
					className="w-full rounded-[0.5rem]"
					alt=""
				/>
				<img
					src="/smallgroup2.JPG"
					className="w-full rounded-[0.5rem]"
					alt=""
				/>
				<img
					src="/smallgroup3.JPG"
					className="w-full rounded-[0.5rem]"
					alt=""
				/>
				<img
					src="/smallgroup4.JPG"
					className="w-full rounded-[0.5rem]"
					alt=""
				/>
				<img
					src="/smallgroup5.JPG"
					className="w-full rounded-[0.5rem]"
					alt=""
				/>
			</div>{" "}
		</div>
	);
};

export default Gallery;
