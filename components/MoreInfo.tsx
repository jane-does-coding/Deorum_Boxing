"use client";
import React from "react";
import { motion } from "framer-motion";

const MoreInfo = () => {
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div>
			<div className="w-full flex flex-col">
				<motion.h1
					className="text-[1.75rem] chakra font-light px-4 text-center flex items-center justify-center"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.5 }}
				>
					Lorem ipsum dolor.
				</motion.h1>
				<motion.h2
					className="px-6 text-center text-[0.9rem] text-neutral-400"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
					inventore.
				</motion.h2>
				<motion.div
					className="border-t-[1px] border-neutral-800 w-full mt-8 pt-6 px-6"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<img
						src="/smallgroup5.JPG"
						alt=""
						className="rounded-[0.25rem] w-full aspect-[1] object-cover"
					/>
					<h2 className="mt-4 chakra text-[1.15rem]">Schedule</h2>
					<p className="text-[0.8rem] text-neutral-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
						molestiae.
					</p>
					<a
						href="/gallery"
						className="py-1 mt-4 bg-neutral-900 relative flex items-center justify-center rounded-full w-full chakra"
					>
						View Times
					</a>
				</motion.div>
				<motion.div
					className="border-t-[1px] border-neutral-800 w-full mt-8 pt-6 px-6"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<img
						src="/smallgroup1.JPG"
						alt=""
						className="rounded-[0.25rem] w-full aspect-[3/2] object-cover"
					/>
					<h2 className="mt-4 chakra text-[1.15rem]">Meet our coaches</h2>
					<p className="text-[0.8rem] text-neutral-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
						molestiae.
					</p>
					<a
						href="/gallery"
						className="py-1 mt-4 bg-neutral-900 relative flex items-center justify-center rounded-full w-full chakra"
					>
						Learn More!
					</a>
				</motion.div>
				<motion.div
					className="border-t-[1px] border-neutral-800 w-full mt-8 pt-6 px-6"
					initial="hidden"
					animate="visible"
					variants={fadeInUp}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
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
						className="py-1 mt-4 bg-neutral-900 relative flex items-center justify-center rounded-full w-full chakra"
					>
						View Gallery
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default MoreInfo;
