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
			className="h-[190vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
			<h1 className="text-[4rem] md:text-7xl font-bold dark:text-white chakra">
				Deorum Boxing
			</h1>
			<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
				Find and book boxing lessons easily. Check our latest class schedules
				and start your boxing journey today!
			</p>
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
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-[15rem] w-[15rem] relative flex-shrink-0 rounded-[0.5rem]"
		>
			<div
				/* 				href={product.link}
				 */ className="block group-hover/product:shadow-2xl rounded-[0.5rem]"
			>
				<Image
					src={product.thumbnail}
					height="300"
					width="300"
					className="object-cover object-left-top absolute h-full w-full inset-0 rounded-[0.25rem]"
					alt={product.title}
				/>
			</div>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
				{product.title}
			</h2>
		</motion.div>
	);
};
