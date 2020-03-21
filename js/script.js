var link = document.querySelector('.button-feedback');
var popup = document.querySelector('.form-feedback-page');
var close = popup.querySelector('.form-feedback-closed');

link.addEventListener('click', function(event) {
	event.preventDefault()
	popup.classList.add('.show');
})