import { Globe } from "@/components/BentoGrid";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import { HeroParallaxMobile } from "@/components/HeroParallaxMobile";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<div className="flex md:hidden ">
				<HeroParallaxMobile />
				<br />
				<br />
			</div>
			<div className="hidden md:flex">
				<HeroParallaxDemo />
				<br />
				<br />
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}
