const arrowButton = document.getElementById('arrowButton');
const arrowImage = arrowButton.querySelector('img');

arrowButton.addEventListener('click', function() {
    if (arrowImage.getAttribute('src') === '/image/arrow.png') {
        arrowImage.src = '/image/arrow1.png';
    } else {
        arrowImage.src = '/image/arrow.png';
    }
});

arrowButton.addEventListener('click', function() {
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
});


const bellButton = document.getElementById('bellButton');
const bellImage = bellButton.querySelector('img');

bellButton.addEventListener('click', function() {
    if (bellImage.getAttribute('src') === '/image/bell1.jpg') {
        bellImage.src = '/image/bell2.jpg';
    } else {
        bellImage.src = '/image/bell1.jpg';
    }
});


const messageButton = document.getElementById('messageButton');
const messageImage = messageButton.querySelector('img');

messageButton.addEventListener('click', function() {
    if (messageImage.getAttribute('src') === '/image/message1.jpg') {
        messageImage.src = '/image/message2.png';
    } else {
        messageImage.src = '/image/message1.jpg';
    }
});

document.querySelector(".image-button").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgray";
});


