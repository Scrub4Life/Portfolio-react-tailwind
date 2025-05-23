// images
import adviceGenerator from "./assets/images/advice generator.png";
import tipCalculator from "./assets/images/tip calculator.png";
import ratingComponent from "./assets/images/rating component.png";
import todoList from "./assets/images/desktop-design-dark.jpg";
import jobListing from "./assets/images/static job listing.png";
import dessertMenu from "./assets/images/dessert menu.png";

const projects = [
  {
    name: "Dessert Menu",
    src: dessertMenu,
    link: "https://dessert-menu-three.vercel.app/",
    repo: "https://github.com/Scrub4Life/Dessert-Menu",
  },
  {
    name: "Todo List",
    src: todoList,
    link: "https://ab-todo-list.vercel.app/",
    repo: "https://github.com/Scrub4Life/todo_app",
  },
  {
    name: "Job Listing",
    src: jobListing,
    link: "https://ab-static-job-listings.vercel.app/",
    repo: "https://github.com/Scrub4Life/static-job-listings",
  },
  {
    name: "Tip Calculator",
    src: tipCalculator,
    link: "https://ab-tip-calculator.vercel.app/",
    repo: "https://github.com/Scrub4Life/tip-calculator/tree/gh-pages",
  },
  {
    name: "Advice Generator",
    src: adviceGenerator,
    link: "https://avery-blake-advice-generator.vercel.app/",
    repo: "https://github.com/Scrub4Life/advice-generator/tree/master",
  },
  {
    name: "Rating Component",
    src: ratingComponent,
    link: "https://avery-blake-interactive-rating-component.vercel.app/",
    repo: "https://github.com/Scrub4Life/interactive-rating-component",
  },
];

for (let i = 0; i < projects.length; i++) {
  projects[i].id = i + 1;
}

export default projects;
