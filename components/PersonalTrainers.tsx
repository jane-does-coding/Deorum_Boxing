import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";

const PersonalTrainers = () => {
	return (
		<div className="flex flex-col px-4 py-6 gap-4 pt-[6rem] pb-4 min-h-screen">
			<h1 className="text-[2rem] chakra mx-auto flex items-center justify-center mb-[1rem]">
				Personal Trainers
			</h1>
			<div className="flex flex-col md:flex-row gap-12 px-6 md:px-12">
				<div className="flex flex-col w-full">
					<img
						src="/smallgroup5.JPG"
						alt=""
						className="rounded-full w-[200px] h-[200px] object-cover z-[8] mx-auto"
					/>
					<div className="border-[1.5px] border-neutral-700 bg-neutral-900/50 p-4 pt-[100px] rounded-[1rem] -translate-y-[70px]  pb-10 flex flex-col gap-2 items-center justify-center text-center w-full">
						<h2 className="chakra text-[1.5rem]">Esteban French</h2>
						<p className="text-neutral-400">Head Trainer</p>
						<div className="flex items-center justify-center text-neutral-200 gap-4 mt-2">
							<a href="https://www.instagram.com/fitness.by.french/">
								<FiInstagram size={24} />
							</a>
							<a href="">
								<FaSquareFacebook size={24} />
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full">
					<img
						src="/smallgroup5.JPG"
						alt=""
						className="rounded-full w-[200px] h-[200px] object-cover z-[8] mx-auto"
					/>
					<div className="border-[1.5px] border-neutral-700 bg-neutral-900/50 p-4 pt-[100px] rounded-[1rem] -translate-y-[70px] w-[100%] pb-10 flex flex-col gap-2 items-center justify-center text-center">
						<h2 className="chakra text-[1.5rem]">Andrew Graff</h2>
						<p className="text-neutral-400">
							Athletic Performance / Nutritionist
						</p>
						<div className="flex items-center justify-center text-neutral-200 gap-4 mt-2">
							<a href="https://www.instagram.com/lionbuilt_fitness/">
								<FiInstagram size={24} />
							</a>
							<a href="https://www.facebook.com/andrew.graff.16">
								<FaSquareFacebook size={24} />
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full">
					<img
						src="/smallgroup5.JPG"
						alt=""
						className="rounded-full w-[200px] h-[200px] object-cover z-[8] mx-auto"
					/>
					<div className="border-[1.5px] border-neutral-700 bg-neutral-900/50 p-4 pt-[100px] rounded-[1rem] -translate-y-[70px] w-[100%] pb-10 flex flex-col gap-2 items-center justify-center text-center">
						<h2 className="chakra text-[1.5rem]">Jade Lopez</h2>
						<p className="text-neutral-400">Functional Strength Trainer</p>
						<div className="flex items-center justify-center text-neutral-200 gap-4 mt-2">
							<a href="https://www.instagram.com/womenofdeorum/">
								<FiInstagram size={24} />
							</a>
							<a href="https://www.facebook.com/people/Jade-Lopez/pfbid02SCE2xbTLd1RdLBRoKFGTMiCrmiRjgDLjp97pRXWKmjCPr1xJX77z8UpWPbFAeqUl/">
								<FaSquareFacebook size={24} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-12 px-6 md:px-12">
				<div className="flex flex-col w-full">
					<img
						src="/smallgroup5.JPG"
						alt=""
						className="rounded-full w-[200px] h-[200px] object-cover z-[8] mx-auto"
					/>
					<div className="border-[1.5px] border-neutral-700 bg-neutral-900/50 p-4 pt-[100px] rounded-[1rem] -translate-y-[70px]  pb-10 flex flex-col gap-2 items-center justify-center text-center w-full">
						<h2 className="chakra text-[1.5rem]">Janae Benson</h2>
						<p className="text-neutral-400">Functional Strength Trainer</p>
						<div className="flex items-center justify-center text-neutral-200 gap-4 mt-2">
							<a href="https://www.instagram.com/somastrength_/">
								<FiInstagram size={24} />
							</a>
							<a href="">
								<FaSquareFacebook size={24} />
							</a>
						</div>
					</div>
				</div>
				<div className="w-full"></div>
				<div className="w-full"></div>
			</div>
		</div>
	);
};

export default PersonalTrainers;
