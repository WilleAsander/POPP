    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            document.getElementById('kvack').innerHTML = this.responseText;
        }
    };

    xhr.open('GET', 'https://glacial-shore-82418.herokuapp.com/', true);
    xhr.send();