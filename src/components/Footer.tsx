import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const githubLink = import.meta.env.VITE_GITHUB_URL;
	const linkedinLink = import.meta.env.VITE_LINKEDIN_URL;
	const twitterLink = import.meta.env.VITE_TWITTER_URL;
	const instagramLink = import.meta.env.VITE_INSTAGRAM_URL;

	return (
		<div className="my-15 h-fit w-full flex items-center justify-center text-white text-center">
			<div>
				<p className="text-lg font-light px-5 md:w-200 pt-5 pb-7">
					Hi there 👋! Thanks for checking out my portfolio.
					<br />
					Feel free to reach out or follow for exciting projects!
				</p>
				<div className="flex items-center justify-center gap-10 w-full py-5 text-2xl">
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaGithub />
					</a>
					<a
						href={linkedinLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaLinkedin />
					</a>
					<a
						href={twitterLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaTwitter />
					</a>
					<a
						href={instagramLink}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#FF9051] transition"
					>
						<FaInstagram />
					</a>
				</div>
				<p className="text-sm font-light pt-5">
					&copy;{currentYear} &nbsp; Copyright &nbsp;
					<span className="font-bold">Mairura Brian</span>. &nbsp; All rights
					reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
