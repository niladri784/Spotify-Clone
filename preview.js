const closeBtton = document.querySelector('.cross');
const previewDiv = document.querySelector('.preview');

closeBtton.addEventListener('click', () => {
    previewDiv.classList.add('live');
});

// closeButton.onclick = () => {
//     popupContainer.classList.add('live');
// }