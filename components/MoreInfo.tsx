import React from "react";

const MoreInfo = () => {
	return (
		<div>
			<div className="w-full flex flex-col">
				<h1 className="text-[1.75rem] chakra font-light px-4 text-center flex items-center justify-center">
					Lorem ipsum dolor.
				</h1>
				<h2 className="px-6 text-center text-[0.9rem] text-neutral-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
					inventore.
				</h2>
				<div className="border-t-[1px] border-neutral-800 w-full mt-8 pt-4 px-6">
					<img src="/group3.JPG" alt="" className="rounded-[0.25rem]" />
					<h2 className="mt-4 chakra text-[1.15rem]">About us</h2>
					<p className="text-[0.8rem] text-neutral-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
						molestiae.
					</p>
				</div>
				<div className="border-t-[1px] border-neutral-800 w-full mt-8 pt-6 px-6">
					<img
						src="/room2.JPG"
						alt=""
						className="rounded-[0.25rem] w-full aspect-[3/2] object-cover"
					/>
					<h2 className="mt-4 chakra text-[1.15rem]">Our gym</h2>
					<p className="text-[0.8rem] text-neutral-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
						molestiae.
					</p>
					<a
						href="/gallery"
						className="py-1 mt-4 bg-neutral-900 relative flex items-center justify-center rounded-full w-full"
					>
						View Gallery
					</a>
				</div>
			</div>
		</div>
	);
};

export default MoreInfo;
