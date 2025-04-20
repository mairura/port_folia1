import profile from "../assets/image.png";

const Home = () => {
	const whatsappMessage =
		"Hey I have checked your portfolio and would like to work together. Reach me out!";
	const encodedMessage = encodeURIComponent(whatsappMessage);
	const whatsappLink = `https://wa.me/${
		import.meta.env.VITE_WHATSAPP_NUMBER
	}?text=${encodedMessage}`;

	return (
		<div
			id="home"
			className="min-h-screen w-full flex flex-col items-center justify-center text-white text-center"
		>
			<img src={profile} alt="profile" className="object-cover mb-5" />
			<h1 className="pt-5 font-extrabold text-4xl md:text-6xl">
				Mairura Brian
			</h1>
			<p className="text-xl md:text-2xl font-medium py-3">
				I do Code &{" "}
				<span className="bg-gradient-to-r from-[#9C83FF] to-[#FF905F] bg-clip-text text-transparent">
					Chill
				</span>{" "}
				🍿
			</p>
			<p className="text-lg font-light px-5 md:w-200 pt-2 pb-7">
				Passionate Software Engineer with a focus on React Native development,
				dedicated to crafting elegant and user-friendly mobile applications.
			</p>
			<a href={whatsappLink} target="_blank" rel="noopener noreferrer">
				<button className="relative border border-white cursor-pointer px-8 py-4 rounded-full text-white transition duration-300 hover:border-[#FF9051] hover:shadow-[0_0_10px_#FF9051]">
					Contact Me
				</button>
			</a>
		</div>
	);
};

export default Home;
