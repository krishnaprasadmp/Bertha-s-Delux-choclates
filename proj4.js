//Name: Krishna Prasad id: jadrn027
var proj4_data;
var cart = new shopping_cart("jadrn027");
var cartArrays;


$(document).ready( function() {

	$('#count').text(cart.size());
    proj4_data = new Array();
    var req = new HttpRequest('/perl/jadrn027/proj4/get_products.cgi', storeData);
    req.send(); 
    updateDisplay();
	
    $('#milk').on('click', function() {
    	$('*').removeClass('menu_li');
    	$('#m').addClass('menu_li');
        tmpString = "";
		tmpString += "<table id='products_table'><h1 class='h1_p'>Milk Chocolate</h1>";
        for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][1] == "Milk chocolate") {
        	 
            	tmpString += "<tr><td><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
            				 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" />";
            	tmpString += "<h3 id='p_h3'>"+proj4_data[i][2]+"</h3><b>Price:</b> $"+proj4_data[i][6]+
            	"<label class='query_label'>Quantity:</label><input class='query_box' type='number' value='1' id='q"+proj4_data[i][0]+"' min='1'>"+
            	"<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+' type="button" class="add_cart">Add To Cart</button>'+
            				 "<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];			 
				tmpString += "</td></tr><tr><td><hr/></td></tr>";
				var handle = document.getElementById('prod_choc_list');
        		handle.innerHTML = tmpString;
            }
    	}
    	tmpString += "</table>";
    })
    
    $('#dark').on('click', function() {
    	$('*').removeClass('menu_li');
    	$('#d').addClass('menu_li');
        tmpString = "";
		tmpString += "<table id='products_table'><h1 class='h1_p'>Dark Chocolate</h1>";
        for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][1] == "Dark chocolate") {
        	
        	
            	tmpString += "<tr><td><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
            				 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" />";
            	tmpString += "<h3 id='p_h3'>"+proj4_data[i][2]+"</h3><b>Price:</b> $"+proj4_data[i][6]+
            	"<label class='query_label'>Quantity:</label><input class='query_box' id='q"+proj4_data[i][0]+"' type='number' value='1' min='1'>"+
            	"<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' class='add_cart'>Add To Cart</button>"+
            				 "<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];			 
				tmpString += "</td></tr><tr><td><hr/></td></tr>";
				var handle = document.getElementById('prod_choc_list');
        		handle.innerHTML = tmpString;
            }
    	}
    	tmpString += "</table>";
    })   
    
    $('#nuts').on('click', function() {
    	$('*').removeClass('menu_li');
    	$('#chews').addClass('menu_li');
        tmpString = "";
		tmpString += "<table id='products_table'><h1 class='h1_p'>Nuts and Chews</h1>";
        for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][1] == "Nuts and chews") {
            	tmpString += "<tr><td><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
            				 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" />";
            	tmpString += "<h3 id='p_h3'>"+proj4_data[i][2]+"</h3><b>Price:</b> $"+proj4_data[i][6]+
            	"<label class='query_label'>Quantity:</label><input class='query_box' id='q"+proj4_data[i][0]+"' type='number' value='1' min='1'>"+
            	"<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' class='add_cart'>Add To Cart</button>"+
            				 "<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];			 
				tmpString += "</td></tr><tr><td><hr/></td></tr>";
				var handle = document.getElementById('prod_choc_list');
        		handle.innerHTML = tmpString;
            }
    	}
    	tmpString += "</table>";
    })  
    
    $('#brittle').on('click', function() {
    	$('*').removeClass('menu_li');
    	$('#b').addClass('menu_li');
        tmpString = "";
		tmpString += "<table id='products_table'><h1 class='h1_p'>Brittles and Toffies</h1>";
        for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][1] == "Brittles and toffies") {
            	tmpString += "<tr><td><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
            				 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" />";
            	tmpString += "<h3 id='p_h3'>"+proj4_data[i][2]+"</h3><b>Price:</b> $"+proj4_data[i][6]+
            	"<label class='query_label'>Quantity:</label><input class='query_box' id='q"+proj4_data[i][0]+"' type='number' value='1' min='1'>"+
            	"<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' class='add_cart'>Add To Cart</button>"+
            				 "<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];			 
				tmpString += "</td></tr><tr><td><hr/></td></tr>";
				var handle = document.getElementById('prod_choc_list');
        		handle.innerHTML = tmpString;
            }
    	}
    	tmpString += "</table>";
    })
    
    $('#truffles').on('click', function() {
    	$('*').removeClass('menu_li');
    	$('#t').addClass('menu_li');
    	
        tmpString = "";
		tmpString += "<table id='products_table'><h1 class='h1_p'>Truffles</h1>";
        for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][1] == "Truffles") {	
            	tmpString += "<tr><td><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
            				 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" />";
            	tmpString += "<h3 id='p_h3'>"+proj4_data[i][2]+"</h3><b>Price:</b> $"+proj4_data[i][6]+
            	"<label class='query_label'>Quantity:</label><input class='query_box' id='q"+proj4_data[i][0]+"' type='number' value='1' min='1'>"+
            	"<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' class='add_cart'>Add To Cart</button>"+
            				 "<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];			 
				tmpString += "</td></tr><tr><td><hr/></td></tr>";
				var handle = document.getElementById('prod_choc_list');
        		handle.innerHTML = tmpString;
            }
    	}
    	tmpString += "</table>";
    })
    
    $('#gifts').on('click', function() {
    	$('*').removeClass('menu_li');
    	$('#g').addClass('menu_li');
        tmpString = "";
		tmpString += "<table id='products_table'><h1 class='h1_p'>Gifts</h1>";
        for(var i=0; i < proj4_data.length; i++) {        	
        	if(proj4_data[i][1] == "Gifts") {
        	
        	
            	
            	tmpString += "<tr><td><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
            				 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" />";
            	tmpString += "<h3 id='p_h3'>"+proj4_data[i][2]+"</h3><b>Price:</b> $"+proj4_data[i][6]+
            	"<label class='query_label'>Quantity:</label><input class='query_box' id='q"+proj4_data[i][0]+"' type='number' min='1' value='1'>"+
            	"<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' class='add_cart'>Add To Cart</button>"+
            				 "<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];			 
				tmpString += "</td></tr><tr><td><hr/></td></tr>";
				var handle = document.getElementById('prod_choc_list');
        		handle.innerHTML = tmpString;
            }
    	}
    	tmpString += "</table>";
    })
    
    $('#holiday').on('click', function() {
    	$('*').removeClass('menu_li');
    	$('#ha').addClass('menu_li');
        tmpString = "";
		tmpString += "<table id='products_table'><h1 class='h1_p'>Holiday Assortments</h1>";
        for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][1] == "Holiday assortments") {
            	tmpString += "<tr><td><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
            				 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" />";
            	tmpString += "<h3 id='p_h3'>"+proj4_data[i][2]+"</h3><b>Price:</b> $"+proj4_data[i][6]+
            	"<label class='query_label'>Quantity:</label><input class='query_box' id='q"+proj4_data[i][0]+"' type='number' min='1' value='1'>"+
            	"<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' class='add_cart'>Add To Cart</button>"+
            				 "<br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4];			 
				tmpString += "</td></tr><tr><td><hr/></td></tr>";
				var handle = document.getElementById('prod_choc_list');
        		handle.innerHTML = tmpString;
            }
    	}
    	tmpString += "</table>";
    }); 
    
    $('#c_cat').change(function() {
    	var getValue=$(this).val();
    	get_products(getValue);
    });
    
    $('#o_reset').on('click',function(){ 
    	$('#form1')[0].reset();
    	$('#products').empty();
    	$('#o_errmessage').text(""); 
    	$("<option>--None--</option>").appendTo($("select[name='products']"));
    });
    

    $('#o_addtocart').on('click', function() {
    	$('#o_errmessage').text("");
    	$('#orderform').hide(); 
    	var sku;
    	var quant= $.trim($('#o_quant').val());
    	var title= $.trim($('#products').val());
    	title=title.split(":");
    	title=title[0];
    	
    	for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][2] == title ) {
            	sku= proj4_data[i][0];
            	prc=proj4_data[i][6];
            	break;
            }
    	}
		if(sku != undefined){
			cart.add(sku,quant,prc,title);
			updateDisplay();
		}
    	else {
    		$('#o_errmessage').text("Select a Product");
    	}
    });
    
 	$('#cart').on('click',"[name='delete_button']",function(){
 		var idd=$(this).attr("id");
 		cart.delete(idd);
 		updateDisplay();
 	}); 
 	
 	$('#cart').on('click',"[id='c_shop']",function(){
		window.location.href = "products.html";
 	});   
 	
 	$('#orderform').on('click',"[name='submit1']",function(){
		cart.deleteall();
 	});   
 	
 	$('#cart').on('click',"[id='c_checkout']",function(){
 		$('#orderform').show();
 		$('[name="firstname"]').focus();
 		$('#hiddendiv').empty();
 		var cartArrays = cart.getCartArray();
		var toWrites="";
    	var TotalPrice = 0;
    	var TaxPrice = 0;
		var ShippingPrice = 0;
		var productQty = 0;
		var productPrice = 0;
		var costPrice=0;
		var priceTax=0;
	if(cart.size() > 0) {
        var title;
        for(i=0; i < cartArrays.length; i++) {
    		
    		productQty += parseInt(cartArrays[i][1]);
	    	itemPrice = parseFloat(cartArrays[i][2]);
	    	itemPrice = Math.round(itemPrice * 100)/100;
	    	productPrice += parseFloat(cartArrays[i][2]);
	    	productPrice = Math.round(productPrice * 100)/100;
			
            toWrites += "<input type='hidden' name='SKUNumber' value="+ cartArrays[i][0] + " />";
            toWrites += "<input type='hidden' name='Quantity' value="+cartArrays[i][1]+" />"; 
            for(var j=0; j < proj4_data.length; j++) {
    			if(proj4_data[j][0] == cartArrays[i][0] ) {
    			    costPrice=proj4_data[j][5];
            		break;
            	}
    		}
    		str=cartArrays[i][3];
    		var res = str.replace(/ /g, "-");
    		toWrites +="<input type='hidden' name='Price' value="+cartArrays[i][2]+" />";
    		toWrites += "<input type='hidden' name='CostPrice' value="+$.trim(costPrice)+" />";     
			toWrites += "<input type='hidden' size='50' name='Title' value="+res+" />"
			
        }
		ShippingPrice = parseInt(productQty, 10) * 2;
		TaxPrice = parseFloat(productPrice * 0.08);
		TaxPrice = Math.round(TaxPrice * 100)/100;
		TotalPrice = parseFloat(productPrice)+  parseFloat(TaxPrice) + parseFloat(ShippingPrice);
		TotalPrice = Math.round(TotalPrice * 100)/100;
		toWrites += "<input type='hidden' name='Shipping' value="+ShippingPrice+" />";
		toWrites += "<input type='hidden' name='Tax' value="+TaxPrice+" />";
		toWrites += "<input type='hidden' name='Total' value='"+TotalPrice+"' />";
		toWrites +="<p></p>"
	}
    $('#hiddendiv').html(toWrites); 
    $('#count').text(cart.size()); 
 	
 	});
    
            
});
    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
                   
function explodeArray(item,delimiter) {
	tempArray=new Array(1);
	var Count=0;
	var tempString=new String(item);
	while (tempString.indexOf(delimiter)>0) {
		tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
		tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
		Count=Count+1
	}
	tempArray[Count]=tempString;
	return tempArray;
} 

function get_products(val) {
	var c= $.trim(val);
	$('#products').empty();
	var p= $("select[name='products']");
	$("<option>--Choose a Product--</option>").appendTo(p);
	for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][1] == c ) {
            	$("<option>"+proj4_data[i][2]+":&nbsp&nbsp$"+proj4_data[i][6]+"</option>").appendTo(p);
            }
    	}	
}

function cartadd(val){
    sku= val;
    quant= "q"+sku;
	quant=$('#'+quant).val();
	for(var i=0; i < proj4_data.length; i++) {
        	
        	if(proj4_data[i][0] == sku ) {
            	prc=proj4_data[i][6];
            	ptitle= proj4_data[i][2]
            	break;
            }
    	}
	cart.add(sku,quant,prc,ptitle);
	updateDisplay();
}

function updateDisplay() {
	var cartArrays = cart.getCartArray();
	var toWrites="";
    var TotalPrice = 0;
    var TaxPrice = 0;
	var ShippingPrice = 0;
	var productQty = 0;
	var productPrice = 0;
	var productTitle;
	if(cart.size() > 0) {
        var toWrites = "<table class='displaycart'><tr><th>Product</th><th class='qty'>Qty</th><th class = 'price'>Price</th><th></th></tr>";
        
        for(i=0; i < cartArrays.length; i++) {
    		
    		productQty += parseInt(cartArrays[i][1]);
	    	itemPrice = parseFloat(cartArrays[i][2]);
	    	itemPrice = Math.round(itemPrice * 100)/100; 
	    	productPrice += parseFloat(cartArrays[i][2]);
	    	productPrice = Math.round(productPrice * 100)/100;
	    	productTitle= $.trim(cartArrays[i][3]);
	    	

            toWrites += "<tr><td class='frow'>"+cartArrays[i][3]+"</td>";
            toWrites += "<td class='val'>"+cartArrays[i][1]+"</td>"; 
            toWrites += "<td class='p_row'>$"+Math.round(cartArrays[i][2] * 100)/100+"</td>"; 
            toWrites += "<td colspan='2'><input type='button' id="+cartArrays[i][0]+" value='Remove' name='delete_button' class='deletebutton'/></td></tr>";
        }
		ShippingPrice = parseInt(productQty, 10) * 2;
		TaxPrice = parseFloat(productPrice * 0.08);
		TaxPrice = Math.round(TaxPrice * 100)/100;
		TotalPrice = parseFloat(productPrice)+  parseFloat(TaxPrice) + parseFloat(ShippingPrice);
		TotalPrice = Math.round(TotalPrice * 100)/100;
		toWrites +="<tr><th colspan='4'><span class ='\ship'\>Shipping Charges: $"+ShippingPrice+"&nbsp;&nbsp;&nbsp;&nbsp;Tax: $"+TaxPrice+"&nbsp;&nbsp;&nbsp;&nbsp;Total: $"+TotalPrice+"</span></th></tr>";
		toWrites += "<tr><td colspan='4'><input type='button' id='c_shop' class='orderbuttons' value='Continue Shopping'/><input type='button' id='c_checkout' value='Check Out' class='orderbuttons'</td></tr></table>";
	}
    $('#cart').html(toWrites); 
    $('#count').text(cart.size()); 
             
} 
    




