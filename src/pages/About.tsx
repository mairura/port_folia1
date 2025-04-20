const About = () => {
	return (
		<div
			id="about"
			className="w-full flex flex-col items-center justify-center text-white text-center md:mb-15"
		>
			<h1 className="font-extrabold text-4xl md:text-6xl">ABOUT ME</h1>
			<p className="bg-gradient-to-r from-[#9C83FF] to-[#FF905F] bg-clip-text text-transparent text-2xl py-2">
				EXPLORE NOW
			</p>
			<p className="md:w-1/2 text-lg px-5 pb-7 font-light pt-5">
				As a passionate software engineer, I thrive on the intricate dance
				between logic and creativity. Currently immersed in the dynamic world of
				WebHR, my expertise centers around React Native, where I seamlessly
				blend technology with innovation.
			</p>
			<p className="md:not-only-of-type:w-1/2 text-lg px-5 pt-2 pb-7 font-light">
				With a fervor for crafting elegant solutions, I navigate the
				ever-evolving landscape of software development. My journey involves
				translating concepts into code, creating seamless user experiences, and
				constantly pushing the boundaries of what's possible
			</p>
		</div>
	);
};

export default About;
