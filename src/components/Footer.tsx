import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="my-15 h-fit w-full flex items-center justify-center text-white text-center">
			<div>
				<p className="text-lg font-light px-5 md:w-200 pt-5 pb-7">
					Hi there 👋!. Thanks for checking out my portifolio<br ></br> Feel free to reach
					out and also you can follow for exciting projects
				</p>
				<div className="flex items-center justify-center gap-10 w-full py-5 text-2xl">
					<a
						href="https://github.com/mairura"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/brian-mairura-955843217/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://twitter.com/BrynTeddy"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaTwitter />
					</a>
					<a
						href="https://instagram.com/teddybryn"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaInstagram />
					</a>
				</div>
				<p className="text-sm font-light pt-5">
					&copy;{currentYear} &nbsp; Copyright &nbsp;{" "}
					<span className="font-bold">Mairura Brian.</span> &nbsp; All rights
					reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
