"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";

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
					<div className="p-3 px-6 pb-8 flex flex-col gap-8">
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
						<div className="flex items-center justify-between">
							<a href="">Instagram</a>
							<a href="">Facebook</a>
						</div>
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
