console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`Thank you for the submission!`);
}
const duckMan = (event) => {
	event.preventDefault()
	alert(`A TRUE DUCKMAN`)
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector(`img`).addEventListener(`mouseover`, duckMan)

