const myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello World!';

    document.querySelector('html').onclick = function() {
        alert('Ouch! Stop clicking on me!');
    }