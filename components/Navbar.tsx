import React from "react";
import { DrawerDemo } from "./Drawer";

const Navbar = () => {
	return (
		<div className="w-[96vw] rounded-[0.25rem] fixed bg-neutral-900/95 top-3 left-[2vw] py-2 px-6 z-[999] flex items-center justify-between backdrop-blur-sm">
			<a href="/">
				<img src="/image.png" className="w-[4rem]" alt="" />
			</a>
			<DrawerDemo />
		</div>
	);
};

export default Navbar;
