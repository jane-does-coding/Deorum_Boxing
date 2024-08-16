"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MoreInfo = () => {
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);
	const ref5 = useRef(null);

	const inView1 = useInView(ref1);
	const inView2 = useInView(ref2);
	const inView3 = useInView(ref3);
	const inView4 = useInView(ref4);
	const inView5 = useInView(ref5);

	return (
		<div>
			<div className="w-full">
				<motion.h1
					ref={ref1}
					className="text-[1.75rem] chakra font-light px-4 text-center flex items-center justify-center"
					initial="hidden"
					animate={inView1 ? "visible" : "hidden"}
					variants={fadeInUp}
					transition={{ duration: 0.5 }}
				>
					Deorum Boxing
				</motion.h1>
				<motion.h2
					ref={ref2}
					className="px-6 text-center text-[0.9rem] text-neutral-400"
					initial="hidden"
					animate={inView2 ? "visible" : "hidden"}
					variants={fadeInUp}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					At Deorum Boxing, we offer a variety of classes for all skill levels.
				</motion.h2>
				<div className=" flex flex-col md:flex-row">
					<motion.div
						ref={ref3}
						className="border-t-[1px] border-neutral-800 w-full mt-8 pt-6 px-6"
						initial="hidden"
						animate={inView3 ? "visible" : "hidden"}
						variants={fadeInUp}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<img
							src="/smallgroup5.JPG"
							alt=""
							className="rounded-[0.25rem] w-full aspect-[1] object-cover"
						/>
						<h2 className="mt-4 chakra text-[1.15rem]">Schedule</h2>
						<p className="text-[0.8rem] text-neutral-300">
							Discover available times and and which lessons are available when.
						</p>
						<a
							href="/schedule"
							className="py-1 mt-4 bg-neutral-900 relative flex items-center justify-center rounded-full w-full chakra"
						>
							View Times
						</a>
					</motion.div>
					<motion.div
						ref={ref4}
						className="border-t-[1px] border-neutral-800 w-full mt-8 pt-6 px-6"
						initial="hidden"
						animate={inView4 ? "visible" : "hidden"}
						variants={fadeInUp}
						transition={{ duration: 0.4, delay: 0.4 }}
					>
						<img
							src="/smallgroup1.JPG"
							alt=""
							className="rounded-[0.25rem] w-full aspect-[3/2] object-cover"
						/>
						<h2 className="mt-4 chakra text-[1.15rem]">Meet our coaches</h2>
						<p className="text-[0.8rem] text-neutral-300">
							Here, in Deorum Boxing, we have great Boxing Coaches, who can help
							you achive more!
						</p>
						<a
							href="/coaches"
							className="py-1 mt-4 bg-neutral-900 relative flex items-center justify-center rounded-full w-full chakra"
						>
							Learn More!
						</a>
					</motion.div>
					<motion.div
						ref={ref5}
						className="border-t-[1px] border-neutral-800 w-full mt-8 pt-6 px-6"
						initial="hidden"
						animate={inView5 ? "visible" : "hidden"}
						variants={fadeInUp}
						transition={{ duration: 0.4, delay: 0.4 }}
					>
						<img
							src="/room2.JPG"
							alt=""
							className="rounded-[0.25rem] w-full aspect-[3/2] object-cover"
						/>
						<h2 className="mt-4 chakra text-[1.15rem]">Our gym</h2>
						<p className="text-[0.8rem] text-neutral-300">
							View our Gym and the Gallery of more images!
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
		</div>
	);
};

export default MoreInfo;
