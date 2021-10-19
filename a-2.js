cart={
    items:[
  {  name:"apple",price:20},{name:"mango", price:10},{name:"peas",price:30}

    ],
    total: function(){
        var tot=0;
        for (var i=0;i<3;i++){
            tot=tot+cart.items[i].price;
            
        }
        console.log("Total Price: "+tot);
    }

}
cart.total();