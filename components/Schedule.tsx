import React from "react";

const Schedule = () => {
	return (
		<div className="flex flex-col px-4 py-6 gap-4 pt-[6rem]">
			<h1 className="text-[2rem] chakra mx-auto flex items-center justify-center pb-[1rem] mb-0 border-b-[1px] border-neutral-800 w-full">
				Schedule
			</h1>
			<div className="flex flex-col">
				<div className="flex items-center justify-between px-4 pt-0 pb-6 text-[1.15rem]">
					<div className="chakra flex items-center justify-center gap-4 flex-wrap text-neutral-300">
						<p>Kids (4-12)</p>
						<p>Teens (12-17)</p>
						<p>Adult(18 and up)</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:grid md:grid-cols-3 md:gap-[6rem] md:px-6">
				<div className="flex flex-col">
					<h1 className="text-[1.75rem] text-neutral-200 chakra mx-auto flex items-center justify-center pb-[0.5rem] w-full">
						Monday
					</h1>
					<p className="text-[1rem] text-neutral-400 font-light mb-4 text-center mx-auto">
						Boxing Fundamentals
					</p>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">6:30 am - 7:30 am</div>
						<div className="">Adults</div>
					</div>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">9:00 - 10:00</div>
						<div className="">Family</div>
					</div>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">4:00 - 5:00</div>
						<div className="">Adults</div>
					</div>
				</div>
				<div className="flex flex-col mt-4">
					<h1 className="text-[1.75rem] text-neutral-200 chakra mx-auto flex items-center justify-center pb-[0.5rem] w-full">
						Tuesday
					</h1>
					<p className="text-[1rem] text-neutral-400 font-light mb-4 text-center mx-auto">
						Bag Fundamentals
					</p>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">6:30 am - 7:30 am</div>
						<div className="">Adults</div>
					</div>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">9:00 - 10:00</div>
						<div className="">Family</div>
					</div>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">4:00 - 5:00</div>
						<div className="">Adults</div>
					</div>
				</div>
				<div className="flex flex-col mt-4">
					<h1 className="text-[1.75rem] text-neutral-200 chakra mx-auto flex items-center justify-center pb-[0.5rem] w-full">
						Wednesday
					</h1>
					<p className="text-[1rem] text-neutral-400 font-light mb-4 text-center mx-auto">
						Boxing Conditioning
					</p>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">6:30 am - 7:30 am</div>
						<div className="">Adults</div>
					</div>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">9:00 - 10:00</div>
						<div className="">Family</div>
					</div>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">4:00 - 5:00</div>
						<div className="">Adults</div>
					</div>
				</div>
				<div className="flex flex-col mt-4">
					<h1 className="text-[1.75rem] text-neutral-200 chakra mx-auto flex items-center justify-center pb-[0.5rem] w-full">
						Thursday
					</h1>
					<p className="text-[1rem] text-neutral-400 font-light mb-4 text-center mx-auto">
						Sparring / Open Gym
					</p>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">6:30 am - 7:30 am</div>
						<div className="">Adults</div>
					</div>
					<div className="flex items-center justify-between px-4 border-b-[1px] border-neutral-800 pb-3 pt-3 text-[1.15rem]">
						<div className="chakra">9:00 - 10:00</div>
						<div className="">Family</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
