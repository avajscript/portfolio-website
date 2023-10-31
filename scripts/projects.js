const javascriptProjects = [
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
];

const javaProjects = [
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
];

const wordpressProjects = [
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
  {
    name: "Project Name",
    date: "Oct, 16th, 2023",
    description: "This will be the project description section",
    link: "",
    url: "images/java.jpg",
  },
];

// map over every project, create element and append to document fragment
const createDomFragments = (fragment, projects) => {
  for (project of projects) {
    // create container to put other elements inside
    const container = document.createElement("div");
    container.classList.add("project");

    const img = document.createElement("img");
    img.src = project.url;
    img.classList.add("project-image");

    const title = document.createElement("h4");
    title.innerHTML = project.name;

    const description = document.createElement("p");
    description.innerHTML = project.description;

    const date = document.createElement("p");
    date.classList.add("small");
    date.classList.add("grey");

    const flexHolder = document.createElement("div");
    flexHolder.classList.add("flex");
    flexHolder.classList.add("space-between");
    flexHolder.classList.add("align-center");
    flexHolder.appendChild(title);
    flexHolder.appendChild(date);

    container.appendChild(img);
    container.appendChild(flexHolder);
    container.appendChild(description);

    fragment.appendChild(container);
  }
};

// create document fragment to put projects inside and append to the dom

for (project of [
  { name: "javascript", projects: javascriptProjects },
  { name: "java", projects: javaProjects },
  { name: "wordpress", projects: wordpressProjects },
]) {
  // add event listeners to all project navigations so they can slide right and left
  document
    .querySelector(`#${project.name}-nav  .left`)
    .addEventListener("click", () => slideProjects(projectDiv, "left"));
  document
    .querySelector(`#${project.name}-nav  .right`)
    .addEventListener("click", () => slideProjects(projectDiv, "right"));
  // get project div
  const projectDiv = document.getElementById(project.name + "Projects");
  // set project div width to corespond with project length * element width
  projectDiv.style.width = project.projects.length * 380 + "px";
  const fragment = document.createDocumentFragment();
  // creates all dom elements based on project arg and appends them to the empty dom fragments
  createDomFragments(fragment, project.projects);
  // adds fragment to actual dom
  projectDiv.appendChild(fragment);
}

const slideProjects = (element, dir) => {
  let slideAmount = window.innerWidth;
  if (dir == "right") {
    slideAmount = parseInt("-" + slideAmount);
  } else if (dir == "left") {
    // don't go left if element is all the way to the left already
    if (element.offsetLeft >= 0) {
      console.log(element.offsetLeft);
      return;
    }
  }

  // set the element that holds the projects left
  element.style.left = element.offsetLeft + slideAmount / 2 + "px";
};

// add document fragment to dom
