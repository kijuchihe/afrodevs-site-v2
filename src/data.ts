// icons
import { LuPenTool } from "react-icons/lu";
import { LuCode2 } from "react-icons/lu";
import { LuLaptop } from "react-icons/lu";
import { LuBarChart4 } from "react-icons/lu";

// images
import project1 from "/assets/images/project-1.png";
import project2 from "/assets/images/project-2.png";
import project3 from "/assets/images/project-3.png";
import avatar from "/assets/images/avatar.png";

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
      name: "Kingsley",
      status: "Uber",
      comment: `Before Afrodevs, our website was outdated and confusing. It didn't reflect the quality of our floral arrangements, and online orders were a nightmare. The Afrodevs team completely transformed our web presence. They built a beautiful, user-friendly site that showcases our products perfectly. Since launch, we've seen a significant increase in online sales and our order processing is so much smoother. I can't recommend Afrodevs highly enough! pen_spark`,
      rating: 4,
    },
    {
      id: 2,
      image: avatar,
      name: "David",
      status: "Uber",
      comment:
        "Our company website was outdated and failing to capture leads. Afrodevs completely revamped it!  Their team brought fresh ideas and a modern design that reflects our brand perfectly.  The best part?  They worked within our tight deadline and budget.  Now, our website is a lead-generating machine, and it showcases our company's professionalism. Afrodevs gets it!",
      rating: 5,
    },
    {
      id: 3,
      image: avatar,
      name: "Amina",
      status: "Uber",
      comment: `Launching my e-commerce business felt like a mountain to climb. Afrodevs took the technical stress away!  Their developers were incredibly fast and understood my vision perfectly. They suggested features I hadn't even considered, making my online store not only functional but truly user-friendly. Now, customers can find exactly what they need and my sales are soaring. Thanks, Afrodevs`,
      rating: 4,
    },
    {
      id: 4,
      image: avatar,
      name: "Bola",
      status: "Uber",
      comment:
        "My old portfolio website wasn't doing my architectural firm justice.  Afrodevs built a sleek, modern website that showcases our projects in a way that truly impresses.  Their developers were meticulous with the details and ensured the site loaded quickly on any device.  Now, potential clients can easily explore our work and see the value we bring.  Thank you, Afrodevs!",
      rating: 5,
    },
  ],
};

export default data;
