"use client";
import React from "react";
import { HeroParallaxMobileComponent } from "./ui/hero-parallax-mobile";

export function HeroParallaxMobile() {
	return <HeroParallaxMobileComponent products={products} />;
}
export const products = [
	/* First Row */
	{
		title: "Moonbeam",
		thumbnail: "/room1.JPG",
	},
	{
		title: "Cursor",
		thumbnail: "/room2.JPG",
	},
	{
		title: "Rogue",
		thumbnail: "/room3.JPG",
	},
	/* Not visible in mobile */
	{
		title: "Editorially",
		thumbnail: "/room1.JPG",
	},
	{
		title: "Editrix AI",
		thumbnail: "/room1.JPG",
	},
	/* Second Row */
	{
		title: "Pixel Perfect",
		thumbnail: "/group2.JPG",
	},

	{
		title: "Algochurn",
		thumbnail: "/group1.JPG",
	},
	{
		title: "Aceternity UI",
		thumbnail: "/smallgroup4.JPG",
	},
	/* Not visible in mobile */
	{
		title: "Tailwind Master Kit",
		thumbnail: "/room1.JPG",
	},

	{
		title: "Renderwork Studio",
		thumbnail: "/smallgroup2.JPG",
	},
	/* Third Row */

	{
		title: "Creme Digital",
		thumbnail: "/smallgroup3.JPG",
	},
	{
		title: "Golden Bells Academy",
		thumbnail: "/smallgroup1.JPG",
	},
	{
		title: "Invoker Labs",
		thumbnail: "/smallgroup2.JPG",
	},
	{
		title: "E Free Invoice",
		thumbnail: "/group3.JPG",
	},
	{
		title: "SmartBridge",
		thumbnail: "/smallgroup3.JPG",
	},
];
