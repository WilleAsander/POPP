var Product = require('../Models/product.model');
exports.create = function(req,res){
    var product = new Product({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
    });

    
    product.save(function(error){
        //obs hantera error
        if (error){
            return next(error);
        }
        res.send('Product created');
    });



};

exports.list = function(req,res){
     Product.find(function(err, product){
         if (err) return next(err);

        res.send(product);
     });
};

exports.details = function(req,res){
    Product.findById(req.params.id, function(err, product){
        if (err) return next(err);
        res.send(product);
    });
};


exports.update = function(req,res){
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, product){
      if (err) return next (err);
      res.send('Product updated');
    });
  };

  exports.delete = function(req,res){
    Product.findByIdAndDelete(req.params.id, {$set: req.body}, function(err, product){
      if (err) return next (err);
      res.send('Product removed');
    });
  };



