// project list
const projects = [
  {
    name: "Battleship",
    description: "A battleship game that fully functions.",
    date: "October, 2022",
    technologies: "JavaScript, HTML/CSS",
    img: "images/battleship.PNG",
    link: "https://avajscript.github.io/Battleship/",
  },
  {
    name: "Admin Dashboard",
    description: "Dashboard project that features some of my projects",
    date: "October, 2022",
    technologies: "Javascript, HTML/CSS",
    img: "images/admin-dashboard.PNG",
    link: "https://avajscript.github.io/admin-dashboard/",
  },
  {
    name: "Todo List",
    description: "Todo list with projects, items to do, and sorting",
    date: "December, 2021",
    technologies: "Javscript, HTML/CSS",
    img: "images/todo.PNG",
    link: "https://avajscript.github.io/TodoList/",
  },
  {
    name: "Calculator",
    description: "Fully functioning calculator",
    date: "July 2021",
    technologies: "Javascript, HTML/CSS",
    img: "images/calc.PNG",
    link: "https://avajscript.github.io/NewCalc/",
  },
  {
    name: "Sketch Pad",
    description: "Sketch pad that allows you to draw pixel based images",
    date: "July, 2021",
    technologies: "Javscript, HTML/CSS",
    img: "images/pixel_draw.PNG",
    link: "https://avajscript.github.io/Sketch-Pad/",
  },
];

// current index in projects
let index = 0;

// slideshow DOM element
const slideshow = document.getElementById("slideshow");

// move slideshow to left or right when arrows are clicked
const moveSlideshow = (iterator) => {
  // increase or decrease by 1
  index += iterator;
  // if index below zero, then set to last array element
  if (index < 0) {
    index = projects.length - 1;
    // reset index to zero if out of bounds to the right
  } else if (index > projects.length - 1) {
    index = 0;
  }
  // set project based on index to project from array
  const project = projects[index];

  // container to hold everything
  const container = document.createElement("div");

  // create image
  const img = document.createElement("img");
  img.src = project.img;
  container.appendChild(img);

  // create heading
  const heading = document.createElement("h3");
  heading.innerHTML = project.name;
  container.appendChild(heading);

  // create date
  const date = document.createElement("p");
  date.innerHTML = project.date;
  date.classList.add("grey");
  date.classList.add("small");
  container.appendChild(date);

  // create technologies
  const technologies = document.createElement("p");
  technologies.innerHTML = "<i>" + project.technologies + "</i>";
  technologies.classList.add("mar-bottom-16");
  container.appendChild(technologies);

  // create description
  const description = document.createElement("p");
  description.innerHTML = project.description;
  description.classList.add("mar-bottom-16");
  container.appendChild(description);

  // create flex holder to center button
  const flexHolder = document.createElement("div");
  flexHolder.classList.add("flex");
  flexHolder.classList.add("space-around");

  // create button
  const btn = document.createElement("button");
  btn.classList.add("button-small");
  btn.classList.add("mar-bottom-16");
  btn.classList.add("flex");
  btn.classList.add("align-center");

  // create link
  const link = document.createElement("a");
  link.setAttribute("target", "_blank");
  link.setAttribute("href", project.link);

  // create button text
  const btnText = document.createElement("h5");
  btnText.innerHTML = "Preview";
  btnText.classList.add("mar-right-8");

  // create link icon
  const linkIcon = document.createElement("i");
  linkIcon.classList.add("fa-solid");
  linkIcon.classList.add("fa-link");
  linkIcon.classList.add("tiny-icon");
  linkIcon.classList.add("white");

  // add text and icon to button
  btn.appendChild(btnText);
  btn.appendChild(linkIcon);
  link.appendChild(btn);
  // add button to flex holder to center
  flexHolder.appendChild(link);
  container.appendChild(flexHolder);

  // create arrow flex holder
  const flexHolder2 = document.createElement("div");
  flexHolder2.classList.add("flex");
  flexHolder2.classList.add("space-between");

  // create left arrow
  const arrowLeft = document.createElement("i");
  arrowLeft.classList.add("fa-solid");
  arrowLeft.classList.add("fa-arrow-left");
  arrowLeft.classList.add("small-icon");
  arrowLeft.classList.add("icon-select");
  arrowLeft.classList.add("slideshow-next");
  arrowLeft.addEventListener("click", () => moveSlideshow(-1));
  // create right arrow
  const arrowRight = document.createElement("i");
  arrowRight.classList.add("fa-solid");
  arrowRight.classList.add("fa-arrow-right");
  arrowRight.classList.add("small-icon");
  arrowRight.classList.add("icon-select");
  arrowRight.classList.add("slideshow-prev");
  arrowRight.addEventListener("click", () => moveSlideshow(1));

  flexHolder2.appendChild(arrowLeft);
  flexHolder2.appendChild(arrowRight);
  container.appendChild(flexHolder2);

  // empty slideshow
  slideshow.innerHTML = "";
  // add created elements to slideshow
  //slideshow.classList.add("slideshow-animation");

  slideshow.appendChild(container);
};
