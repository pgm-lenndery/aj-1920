const btn = document.querySelector('#btnCollapse');
const nav = document.querySelector('header');

btn.addEventListener('click', () => {
    console.log('cliked');
    nav.classList.toggle('show');
})

document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest("nav") || event.target.closest('#btnCollapse')) return;

    // If user clicks outside the element, hide it!
	nav.classList.remove('show');
});