import { DrawerDemo } from "@/components/Drawer";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import { HeroParallaxMobile } from "@/components/HeroParallaxMobile";
import { FeaturesSectionDemo } from "@/components/Hmm";
import MoreInfo from "@/components/MoreInfo";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<div className="flex md:hidden ">
				<HeroParallaxMobile />
			</div>
			<div className="hidden md:flex mb-12">
				<HeroParallaxDemo />
				<br />
				<br />
			</div>
			<MoreInfo />
			<br />
		</div>
	);
}
