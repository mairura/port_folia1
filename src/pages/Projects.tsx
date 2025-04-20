import image1 from "../assets/image2.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image2.png";
import image4 from "../assets/image2.png";

const projectData = [
	{
		image: image1,
		title: "WebHR",
		description:
			"Designed a modern UI website comprising more than 50 screens, along with the integration of a blog using Next.js.",
	},
	{
		image: image2,
		title: "TaskFlow",
		description:
			"A task management app built with React and Tailwind CSS, allowing users to organize projects and assign team members.",
	},
	{
		image: image3,
		title: "AI Chatbot",
		description:
			"Developed a Python-based chatbot using NLP and machine learning, deployed with Docker and integrated into a website.",
	},
	{
		image: image4,
		title: "E-commerce Backend",
		description:
			"Built a RESTful API using Node.js, Express, and MongoDB to support user authentication, product listings, and payments.",
	},
];

const Projects = () => {
	return (
		<div id="projects" className="w-full flex justify-center items-center py-12 px-4 my-15">
			<div className="w-full max-w-screen-lg text-center">
				<h1 className="font-extrabold text-4xl md:text-6xl">PROJECTS</h1>
				<p className="bg-gradient-to-r from-[#9C83FF] to-[#FF905F] bg-clip-text text-transparent text-2xl py-2">
					EXPLORE NOW
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
					{projectData.map((project, i) => (
						<div
							key={i}
							className="flex flex-col sm:flex-row items-center gap-4 text-left bg-[#121212] p-4 rounded-lg shadow-lg hover:scale-[1.02] transition-transform"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-60 h-auto rounded-lg"
							/>
							<div className="flex flex-col justify-center items-start">
								<h2 className="text-2xl font-bold">{project.title}</h2>
								<p className="text-sm font-light mt-1">{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
