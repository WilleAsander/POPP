    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            document.getElementById('screen').innerHTML = "Hello from nodea and Heroku!";
        }
    };

    xhr.open('GET', 'https://glacial-shore-82418.herokuapp.com/', true);
    xhr.send();