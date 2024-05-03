// icons
import { LuPenTool } from "react-icons/lu";
import { LuCode2 } from "react-icons/lu";
import { LuLaptop } from "react-icons/lu";
import { LuBarChart4 } from "react-icons/lu";

// images
import project1 from "./assets/images/project-1.png";
import project2 from "./assets/images/project-2.png";
import project3 from "./assets/images/project-3.png";
import avatar from "./assets/images/avatar.png";

const data = {
	menuLinks: ["About us", "Community"],
	services: [
		{
			id: 1,
			Icon: LuPenTool,
			title: "UI/UX Design",
			description:
				"Elevate your digital experience with our exceptional UI/UX design service. We specialize in creating intuitive, stunning user interfaces for seamless user experiences. Focusing on user-centric principles, we ensure accessibility and enjoyment, transforming your ideas into reality.",
			link: "#",
		},
		{
			id: 2,
			Icon: LuCode2,
			title: "Mobile App Development",
			description:
				"Bring your ideas to life anywhere with our mobile app development service. We cover everything from concept to launch for iOS and Android, focusing on performance, scalability, and security. Our team builds outstanding custom mobile applications.",
			link: "#",
		},
		{
			id: 3,
			Icon: LuLaptop,
			title: "Frontend Development",
			description:
				"Craft your digital presence with our frontend development services. We create fast, responsive, visually compelling websites that work flawlessly across all devices. Our sites are dynamic experiences that captivate and convert, not just digital spaces.",
			link: "#",
		},
		{
			id: 4,
			Icon: LuBarChart4,
			title: "SEO/Marketing",
			description:
				"Visibility, Engagement, Growth: Our SEO and marketing services enhance your online visibility and traffic. With keyword research, optimization, content marketing, and social media strategies, we elevate your brand and accelerate business growth.",
			link: "#",
		},
	],
	projects: [
		{
			id: 1,
			image: project1,
			title: "Uber alternative for local businesses",
			description:
				"Pizza ipsum dolor amet thin crust large black olives large olives large black olives.",
			link: "#",
		},
		{
			id: 2,
			image: project2,
			title: "Uber alternative for local businesses",
			description:
				"Pizza ipsum dolor amet thin crust large black olives large olives large black olives.",
			link: "#",
		},
		{
			id: 3,
			image: project3,
			title: "Uber alternative for local businesses",
			description:
				"Pizza ipsum dolor amet thin crust large black olives large olives large black olives.",
			link: "#",
		},
	],
	reviews: [
		{
			id: 1,
			image: avatar,
			name: "Arlene McCoy",
			status: "Uber",
			comment:
				"Pizza ipsum dolor amet thin crust large black olives & tomato fresh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large blackh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large black.",
			rating: 4,
		},
		{
			id: 2,
			image: avatar,
			name: "Arlene McCoy",
			status: "Uber",
			comment:
				"Pizza ipsum dolor amet thin crust large black olives & tomato fresh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large blackh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large black.",
			rating: 5,
		},
		{
			id: 3,
			image: avatar,
			name: "Arlene McCoy",
			status: "Uber",
			comment:
				"Pizza ipsum dolor amet thin crust large black olives & tomato fresh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large blackh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large black.",
			rating: 4,
		},
		{
			id: 4,
			image: avatar,
			name: "Arlene McCoy",
			status: "Uber",
			comment:
				"Pizza ipsum dolor amet thin crust large black olives & tomato fresh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large blackh tomatoes Pizza ipsum dolor amet thin crust large black fresh tomatoes Pizza ipsum dolor amet thin crust large black.",
			rating: 5,
		},
	],
};

export default data;
