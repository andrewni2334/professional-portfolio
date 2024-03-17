// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "andrewni2334";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Results-driven software engineer with over four years of combined industry experience in full-stack development, cloud services, and data engineering. Proficient in translating complex business requirements into robust technical solutions, I bring exceptional communication and influence skills to drive collaborative and innovative software development projects. My ability to bridge the gap between technical and non-technical stakeholders allows me to create and implement effective software solutions that meet both business and user needs.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="logos:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 2,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <Icon icon="vscode-icons:file-type-sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 4,
    skill: <Icon icon="logos:scala" className="display-4" />,
    name: "Scala",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 7,
    skill: <Icon icon="devicon:bash" className="display-4" />,
    name: " Unix Bash/Shell",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 10,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS",
  },
  {
    id: 11,
    skill: <Icon icon="fluent-mdl2:c-plus-plus-language" className="display-4" />,
    name: "C++",
  },
  {
    id: 12,
    skill: <Icon icon="mdi:language-r" className="display-4" />,
    name: "R",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

