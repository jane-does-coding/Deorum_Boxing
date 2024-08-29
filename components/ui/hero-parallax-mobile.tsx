"use client";
import React from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export const HeroParallaxMobileComponent = ({
	products,
}: {
	products: {
		title: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [200, 1000]),
		springConfig
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [-100, -1000]),
		springConfig
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
		springConfig
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-600, 150]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[100rem] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-4 mb-4">
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-4 space-x-4 ">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-4">
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = () => {
	return (
		<div className="max-w-7xl relative mx-auto py-16 md:py-40 px-4 w-full  left-0 top-0 z-[999]">
			<h1 className="text-[4rem] md:text-5xl leading-[5rem] font-bold dark:text-white chakra">
				Deorum Boxing & Fitness
			</h1>
			<div className="max-w-2xl text-[1.3rem] chakra md:text-2xl mt-8 dark:text-neutral-200">
				<div className="w-full flex justify-center items-center gap-3 mb-2">
					<div className="w-full h-[1px] bg-white"></div>
					Building
					<div className="w-full h-[1px] bg-white"></div>
				</div>
				<div className="flex flex-col gap-2 items-center justify-center">
					<div className="w-[43vw] flex justify-center items-center gap-3">
						<div className="w-full h-[1px] bg-white"></div>
						Confidence
						<div className="w-full h-[1px] bg-white"></div>
					</div>
					<div className="w-[50vw] flex justify-center items-center gap-3">
						<div className="w-full h-[1px] bg-white"></div>
						Character
						<div className="w-full h-[1px] bg-white"></div>
					</div>
					<div className="w-[60vw] flex justify-center items-center gap-3">
						<div className="w-full h-[1px] bg-white"></div>
						Champions
						<div className="w-full h-[1px] bg-white"></div>
					</div>
					{/* <p>Character</p>
					<p>Champions</p> */}
				</div>
				{/* Confidence
				<br />
				Character
				<br />
				Champions */}
			</div>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			key={product.title}
			className="group/product h-[15rem] w-[15rem] relative flex-shrink-0 rounded-[0.5rem]"
		>
			<div
				/* 				href={product.link}
				 */ className="block  rounded-[0.5rem]"
			>
				<Image
					src={product.thumbnail}
					height="300"
					width="300"
					className="object-cover object-left-top absolute h-full w-full inset-0 rounded-[0.25rem]"
					alt={product.title}
				/>
			</div>
			<div className="absolute inset-0 h-full w-full opacity-0  bg-black pointer-events-none"></div>
			{/* <h2 className="absolute bottom-4 left-4 opacity-0  text-white">
				{product.title}
			</h2> */}
		</motion.div>
	);
};
