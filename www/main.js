$.ready(loadList());

function createProduct(){
    $(".infoform").submit(function(event) {
        event.preventDefault();
    });
    var product = {
        name: $('#nameInput').val(),
        description: $('#descInput').val(),
        category: $('#categoryInput').val(),
        price: $('#priceInput').val()
    };
    $.ajax({
        type: 'POST',
        contentType : "application/json",
        url: 'products/create',
        data : JSON.stringify(product),
        success: function(response){
            $('#infoform')[0].reset();
            $('#listBox').empty();
            loadList();
            $('#infoform').append('<p>'+response+'</p>');

        }
    });
};

function loadList(){
    $.ajax({
        type: 'GET',
        url: 'products',
        success: function(list){
            var products = list;
            var $form = $('<form action="" id="listDropDown">');
            var listItems = '<option selected="selected" value="0">- Select -</option>';
 
            for (var i = 0; i < products.length; i++) {
                listItems += "<option value='" + products[i]._id + "'>" + products[i].name + "</option>";
            };
            var $select = $('<select class="infotext" id="list" name="products"onchange="showProduct(this.value)">').append(
                listItems
                

            );
            $form.append(
                $select
            );
            $('#listBox').append(
                $form
            );
            
        }
    });
};

function showProduct(productID){
    $.ajax({
        
        type: "GET",
        url: 'products/'+productID,
        success: function(result){
            $('#productInfo').empty();
            var productInformation = result;
            var $button = $('<button value="'+productID+'"onClick = "deleteProduct(this.value)">');
            $button.text("Delete");
            var $table = $('<table>');
            var $name = $('<tr>').append(
                $('<th>').text("Name"),
                $('<td>').text(productInformation.name)
            );
            var $price = $('<tr>').append(
                $('<th>').text("Price"),
                $('<td>').text(productInformation.price)                   
            );
            var $description = $('<tr>').append(
                $('<th>').text("Description"),
                $('<td>').text(productInformation.description),
            );
            var $category = $('<tr>').append(
                $('<th>').text("Category"),
                $('<td>').text(productInformation.category)
            );
            $table.append(
                $name,
                $price,
                $description,
                $category
            );


            $('#productInfo').append(
                $table,
                $button
            );
            
               
        }
    });
};

function deleteProduct(productID){
    $.ajax({
        type: "DELETE",
        url: 'products/'+productID+'/delete',
        success: function(result){
            $('#productInfo').empty();
            $("#productInfo").append('<p>'+result+'</p>');
            $('#listBox').empty();
            loadList();
        }
    });
};








    