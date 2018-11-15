document.onload()
/*document.getElementById('kvack').innerHTML = "BIG BAD THINGS ARE COMMING!!!!";
var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            var myArr = JSON.parse(this.responseText);
             myFunction(myArr)
            }
        };

    xhr.open('GET', 'https://localhost:4242/products', true);
    xhr.send(); 
    function myFunction(arr){
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++){
            out += '<tr> <td>' + arr[i].name + '</td>' + " " + '<td>' + arr[i].price + '</td> </tr>'
            +" "+'<td> <a href="https://localhost:4242/products/'+ arr[i]._id+'">Details</a>';
        }
        document.getElementById("table").innerHTML += out;
}

*/

function loadList(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };

    xhr.open('GET', 'https://localhost:4242/products', true);
    xhr.send();
    function myFunction(arr){
        
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++){
            out += '<option value="' + arr[i]._id + '">' + arr[i].name + '</option>';
        }
        document.getElementById("list").innerHTML += out;
    }

    
};
loadList();
function showProduct(productID){
    var xhr;
    if (productID == ""){
        document.getElementById("productInfo").innerHTML = "Please select a product";
        return;
    }
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            var row = $("<tr />");
            var productInformation = JSON.parse(this.responseText);
            $("#personDataTable").append(row);
            row.append($("<td>" + productInformation.name + "</td>"));
            row.append($("<td>" + productInformation.price + "</td>"));
            row.append($("<td>" + productInformation.description + "</td>"));
            row.append($("<td>" + productInformation.category + "</td>"));

        }
    };
    xhr.open('GET', 'https://localhost:4242/products'+productID, true);
    xhr.send();


}

    