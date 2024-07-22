import React from "react";

const Footer = () => {
	return (
		<div className="w-full px-4 py-3 bg-neutral-900 flex items-center justify-between">
			<a href="/">
				<img src="/image.png" className="w-[4rem]" alt="" />
			</a>
			<div className="flex gap-4">
				<a href="" className="text-neutral-300 chakra">
					Schedule
				</a>
				<a href="" className="text-neutral-300 chakra">
					Gallery
				</a>
				<a
					href="https://www.instagram.com/deorumboxing"
					className="text-neutral-300 chakra"
				>
					Instagram
				</a>
			</div>
		</div>
	);
};

export default Footer;
