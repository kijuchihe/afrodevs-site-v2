// icons
import { LuPenTool } from "react-icons/lu";
import { LuCode2 } from "react-icons/lu";
import { LuLaptop } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";

// images
import project1 from "./assets/images/project-1.png";
import project2 from "./assets/images/project-2.png";
import project3 from "./assets/images/project-3.png";
import avatar from "./assets/images/avatar.png";

const data = {
	menuLinks: ["About us", "Projects", "Community"],
	services: [
		{
			id: 1,
			Icon: LuPenTool,
			title: "UI/UX Design",
			description:
				"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa.	Praesent cursus porttitor egestas.",
			link: "#",
		},
		{
			id: 2,
			Icon: LuCode2,
			title: "Mobile App Development",
			description:
				"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa.	Praesent cursus porttitor egestas. ",
			link: "#",
		},
		{
			id: 3,
			Icon: LuLaptop,
			title: "Frontend Development",
			description:
				"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa.	Praesent cursus porttitor egestas.",
			link: "#",
		},
		{
			id: 4,
			Icon: LuDatabase,
			title: "Data Science",
			description:
				"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa.	Praesent cursus porttitor egestas.",
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
