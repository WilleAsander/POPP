function loadList(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };

    xhr.open('GET', 'https://glacial-shore-82418.herokuapp.com/products', true);
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
        document.getElementById("productInfo").innerHTML = "";
        return;
    }
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            var productInformation = JSON.parse(this.responseText);
            document.getElementById("productInfo").innerHTML = 
            "<table><tr><th>Name</th><td>"+productInformation.name+"</td></tr><tr><th>Price</th><td>"+productInformation.price+"</td></tr><tr><th>Description</th><td>"
            +productInformation.description+"</td></tr><tr><th>Category</th><td>"
            +productInformation.category+"</td></tr></table>";

        }Price
    };
    xhr.open('GET', 'https://glacial-shore-82418.herokuapp.com/products/'+productID, true);
    xhr.send();
}

    