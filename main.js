var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            var myArr = JSON.parse(this.responseText);
             myFunction(myArr)
            }
        };

    xhr.open('GET', 'https://glacial-shore-82418.herokuapp.com/products', true);
    xhr.send(); 
    function myFunction(arr){
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++){
            out += '<tr> <td>' + arr[i].name + '</td>' + " " + '<td>' + arr[i].price + '</td> </tr>'
            +" "+'<td> <a href="https://glacial-shore-82418.herokuapp.com/products/'+ arr[i]._id+'">Details</a>';
        }
        document.getElementById("table").innerHTML += out;
}

    