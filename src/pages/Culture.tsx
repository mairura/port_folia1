import NextJS from "../assets/nextjs_logo_dark.webp";
import NodeJS from "../assets/nodejs-icon.webp";
import SpringBoot from "../assets/spring-boot.webp";
import Tailwind from "../assets/Tailwind_CSS_Logo.webp";
import Sql from "../assets/sql-logo-png.webp";
import MongoDB from "../assets/Mongodb-PNG-Pic.webp";
import Python from "../assets/Python_logo.webp";
import Java from "../assets/Java_logo.webp";
import Docker from "../assets/Docker_logo.webp";

const Culture = () => {
	return (
		<div
			id="culture"
			className="w-full flex flex-col items-center justify-center text-white text-center py-10"
		>
			<h1 className="text-3xl font-bold mb-6">Programming Culture</h1>

			{/* Grid container for logos */}
			<div className="w-1/2 not-first:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center pt-15">
				{/* NextJS logo */}
				<a href="/projects/nextjs">
					<img
						src={NextJS}
						alt="NextJS"
						className="w-20 h-7 rounded-lg transition-transform transform hover:scale-90 items-center"
					/>
				</a>

				{/* NodeJS logo */}
				<a href="/projects/nodejs">
					<img
						src={NodeJS}
						alt="NodeJS"
						className="w-16 h-16 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>

				{/* SpringBoot logo */}
				<a href="/projects/springboot">
					<img
						src={SpringBoot}
						alt="Spring Boot"
						className="w-16 h-13 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>

				{/* Tailwind logo */}
				<a href="/projects/tailwind">
					<img
						src={Tailwind}
						alt="Tailwind CSS"
						className="w-16 h-13 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>

				{/* SQL logo */}
				<a href="/projects/sql">
					<img
						src={Sql}
						alt="SQL"
						className="w-16 h-16 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>

				{/* MongoDB logo */}
				<a href="/projects/mongodb">
					<img
						src={MongoDB}
						alt="MongoDB"
						className="w-16 h-16 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>

				{/* Python logo */}
				<a href="/projects/python">
					<img
						src={Python}
						alt="Python"
						className="w-16 h-16 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>

				{/* Java logo */}
				<a href="/projects/java">
					<img
						src={Java}
						alt="Java"
						className="w-16 h-16 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>

				{/* Docker logo */}
				<a href="/projects/docker">
					<img
						src={Docker}
						alt="Docker"
						className="w-16 h-16 rounded-lg transition-transform transform hover:scale-90"
					/>
				</a>
			</div>
		</div>
	);
};

export default Culture;
