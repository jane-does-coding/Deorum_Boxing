"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { FiInstagram } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
	const [goal, setGoal] = React.useState(350);

	function onClick(adjustment: number) {
		setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle className="flex items-center justify-center gap-4 text-[1.75rem] chakra">
							<img src="/logo1.png" className="w-[4.5rem]" alt="" />
							Deorum Boxing
						</DrawerTitle>
					</DrawerHeader>
					<div className="p-3 px-6 pb-6 flex flex-col">
						<div className="flex flex-col">
							<a
								href=""
								className="text-[1.15rem] pb-2 border-b-[1px] border-neutral-800"
							>
								Schedule
							</a>
							<a
								href=""
								className="text-[1.15rem] pt-2 pb-2 border-b-[1px] border-neutral-800"
							>
								About Coaches
							</a>
							<a
								href=""
								className="text-[1.15rem] pb-2 pt-2 border-b-[0px] border-neutral-800"
							>
								Gallery
							</a>
						</div>
						<div className="flex items-center justify-between border-t-[1px] border-neutral-800 pt-12 px-4">
							<a
								href="https://www.instagram.com/deorumboxing"
								className="flex gap-2 items-center justify-center"
							>
								<FiInstagram size={24} />
								Instagram
							</a>
							<a href="" className="flex gap-2 items-center justify-center">
								<FaSquareFacebook size={24} />
								Facebook
							</a>
						</div>
					</div>
					<DrawerFooter className="pb-8">
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
