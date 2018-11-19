$.ready(loadList());

function createProduct(){
    $(".infoform").submit(function(event) {
        event.preventDefault();
    });
    var product = {
        name: $('#nameInput').val(),
        description: $('textarea#decInput').val(),
        category: $("#categoryInput option:selected").text(),
        price: $('#priceInput').val()
    };
    $.ajax({
        type: 'POST',
        contentType : "application/json",
        url: 'products/create',
        data : JSON.stringify(product),
        success: function(response){
            $('#infoform')[0].reset();
            $('p').remove('#infoform');
            loadList();
            $('#infoform').append('<p id="response">'+response+'</p>');

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
            var lookup = {};
            var result = [];
            var optgroup;
            for (var item, i = 0; item = products[i++];) {
                var category = item.category;

                if (!(category in lookup)) {
                lookup[category] = 1;
                result.push(category);
                }
            };
            for (var j = 0; j < result.length; j++){
                optgroup = result[j];
                listItems += '<optgroup label="'+optgroup+'">'
                for (var i = 0; i < products.length; i++) {
                    if(products[i].category == optgroup){
                        listItems += "<option value='" + products[i]._id + "'>" + products[i].name + "</option>";
                    }
                };
                listItems += '</optgroup>'
            };
            listItems +='</div>'
            var $select = $('<select id="list" class="form-control" data-style="btn-danger" onchange="showProduct(this.value)">').append(
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
            var $button = $('<button value="'+productID+'"onClick = "deleteProduct(this.value)" class="btn-danger">');
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








    