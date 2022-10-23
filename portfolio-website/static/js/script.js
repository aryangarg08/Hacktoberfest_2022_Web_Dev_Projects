const ul = document.querySelector(".navbar-ul");
const burgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector("header");
const headerTitle = document.querySelector("#header-title");
const borderDisplayIndicator = document.querySelector(
	"#header-border-indicator"
);
const main = document.querySelector("main");

// Header title
const observer1 = new IntersectionObserver(displayHeaderTitle);
observer1.observe(main);

// Header border
const observer2 = new IntersectionObserver(displayHeaderBorder);
observer2.observe(borderDisplayIndicator);

// For burger menu
burgerMenu.addEventListener("click", (event) => {
	ul.classList.toggle("hide-burger-menu");
	event.stopPropagation();
});

window.addEventListener("click", () => {
	ul.classList.add("hide-burger-menu");
});

// Utility functions
function displayHeaderTitle(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting)
			headerTitle.classList.add("hidden-visibility");
		else headerTitle.classList.remove("hidden-visibility");
	});
}

function displayHeaderBorder(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) header.classList.remove("header-border");
		else header.classList.add("header-border");
	});
}
