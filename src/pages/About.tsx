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
				I specialize in building scalable products that enhance business
				performance and drive measurable growth. Over the years, I’ve worked
				with a diverse set of tools and languages—ranging from frontend
				technologies like Next.js, React.js, Tailwind CSS, Framer Motion, and
				Redux, to backend systems where my current passion lies.
			</p>
			<p className="md:w-1/2 text-lg px-5 pt-2 pb-7 font-light">
				Lately, I’ve been diving deeper into backend architecture—working with
				Node.js, PHP, and both SQL and NoSQL databases. From MongoDB aggregation
				pipelines to Redis caching strategies, I’m constantly exploring how to
				handle large datasets efficiently and apply scalable design patterns.
				I'm also actively learning Java with Spring Boot to strengthen my
				backend expertise. Whether you’re building something new or refining an
				existing system, I’m always open to collaborate, contribute, or even
				learn together.
			</p>
		</div>
	);
};

export default About;
