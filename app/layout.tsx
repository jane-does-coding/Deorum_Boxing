import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Deorum Boxing",
	description:
		"Discover the best boxing lessons with us. At Deorum Boxing, we offer a variety of classes for all skill levels. Easily find and book the perfect class that fits your schedule. Stay updated with our latest class schedules, and never miss a session. Join us today and start your journey to becoming a better boxer!",
	robots: "index,follow",
	applicationName: "Boxing",
	keywords:
		"boxing lessons, boxing classes, boxing training, beginner boxing, advanced boxing, boxing workout, fitness boxing, boxing schedule, boxing sessions, boxing gym, boxing for kids, boxing for women, personal boxing coach, boxing techniques, boxing drills, boxing programs, boxing exercises, boxing fitness, boxing sparring, boxing fundamentals",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body className={`dark ${inter.className}`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
