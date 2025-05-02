const Work = () => {
	const skills = [
		"NextJS",
		"JavaScript",
		"NodeJS",
		"TypeScript",
		"ReactJS",
		"TailwindCSS",
		"MPesa API",
		"Stripe API",
	];

	return (
		<div
			id="work"
			className="w-full flex flex-col items-center justify-center text-white text-center mt-15"
		>
			<h1 className="font-extrabold text-4xl md:text-6xl">EXPERIENCE</h1>
			<p className="bg-gradient-to-r from-[#9C83FF] to-[#FF905F] bg-clip-text text-transparent text-2xl py-2">
				EXPLORE NOW
			</p>

			<div className="md:w-1/2 text-lg px-5 pb-7 font-light pt-5">
				<div className="w-full justify-between flex items-center p-5">
					<h3 className="text-sm md:text-lg">
						{" "}
						<span className="font-bold md:text-xl text-md">Ngeni Labs</span> |
						Frontend Developer
					</h3>
					<p className="text-sm md:text-lg">March, 2022 - Dec, 2024</p>
				</div>
				<p className="text-lg font-light px-5 pb-7">
					As a Frontend Developer at Ngeni Labs, I played a pivotal role in
					crafting user-friendly interfaces for various applications. My
					responsibilities included collaborating with designers to implement
					responsive layouts, optimizing performance, and ensuring cross-browser
					compatibility. I actively contributed to code reviews and maintained
					documentation to enhance team collaboration.
				</p>
				<div className="flex gap-4 justify-center items-center flex-wrap">
					{skills.map((skill) => (
						<p
							key={skill}
							className="relative text-sm border border-white px-3 py-2 rounded-md text-white transition duration-300 hover:border-[#FF9051] hover:shadow-[0_0_10px_#FF9051] cursor-pointer"
						>
							{skill}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
