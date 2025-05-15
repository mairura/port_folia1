const Work = () => {
	return (
		<div
			id="work"
			className="w-full flex flex-col items-center justify-center text-white text-center mt-15"
		>
			<h1 className="font-extrabold text-4xl md:text-6xl">EXPERIENCE</h1>
			<p className="bg-gradient-to-r from-[#9C83FF] to-[#FF905F] bg-clip-text text-transparent text-2xl py-2">
				EXPLORE NOW
			</p>

			{/* Freelance Work */}
			<div className="md:w-1/2 text-lg px-5 pb-7 font-light pt-5">
				<div className="w-full justify-between flex items-center p-5">
					<h3 className="text-sm md:text-lg">
						<span className="font-bold md:text-xl text-md">Freelance</span> |
						Fullstack Developer
					</h3>
					<p className="text-sm md:text-lg">2024 - Present</p>
				</div>
				<p className="text-lg font-light px-5 pb-5">
					Currently working on an exciting project involving complex backend logic
					and real-time APIs using NodeJS, Spring Boot, and building scalable
					UIs with Next.js, ShadCN. Integrated services like PesaPal for
					payments, and implemented robust auth systems.
				</p>
				<div className="flex gap-3 flex-wrap justify-center">
					{["NodeJS", "Spring Boot", "NextJS", "ShadCN", "PesaPal"].map((tech) => (
						<p
							key={tech}
							className="text-sm border border-white px-3 py-1 rounded-md transition duration-300 hover:border-[#FF9051] hover:shadow-[0_0_10px_#FF9051]"
						>
							{tech}
						</p>
					))}
				</div>
			</div>

			{/* Ngeni Labs */}
			<div className="md:w-1/2 text-lg px-5 pb-7 font-light pt-5">
				<div className="w-full justify-between flex items-center p-5">
					<h3 className="text-sm md:text-lg">
						<span className="font-bold md:text-xl text-md">Ngeni Labs</span> |
						Frontend Developer
					</h3>
					<p className="text-sm md:text-lg">March 2022 - Dec 2024</p>
				</div>
				<p className="text-lg font-light px-5 pb-5">
					Contributed to building responsive UIs, collaborating closely with
					designers and backend engineers. Focused on performance, accessibility,
					and reusable components for internal tools and client-facing apps.
				</p>
				<div className="flex gap-3 flex-wrap justify-center">
					{["ReactJS", "TailwindCSS", "NextJS", "TypeScript"].map((tech) => (
						<p
							key={tech}
							className="text-sm border border-white px-3 py-1 rounded-md transition duration-300 hover:border-[#FF9051] hover:shadow-[0_0_10px_#FF9051]"
						>
							{tech}
						</p>
					))}
				</div>
			</div>

			{/* Web3 Facilitator */}
			<div className="md:w-1/2 text-lg px-5 pb-7 font-light pt-5">
				<div className="w-full justify-between flex items-center p-5">
					<h3 className="text-sm md:text-lg">
						<span className="font-bold md:text-xl text-md">Web3 Community</span> |
						Web3 Facilitator
					</h3>
					<p className="text-sm md:text-lg">2023 - 2024</p>
				</div>
				<p className="text-lg font-light px-5 pb-5">
					Taught beginners the foundations of blockchain, smart contracts, and
					how to build and deploy dApps. Guided projects like a "build and send"
					Web3 app, covering the full stack from Solidity to UI.
				</p>
				<div className="flex gap-3 flex-wrap justify-center">
					{["Solidity", "Hardhat", "Ethereum", "MetaMask", "JavaScript"].map((tech) => (
						<p
							key={tech}
							className="text-sm border border-white px-3 py-1 rounded-md transition duration-300 hover:border-[#FF9051] hover:shadow-[0_0_10px_#FF9051]"
						>
							{tech}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
