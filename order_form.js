// Reference: Alan Riggns 
// name: Krishna prasad M P id:jadrn027

$(document).ready(function() {

	$('#form1')[0].reset();
	$('#orderform').hide();
	var errorStatus = $('#message_line');
	
	var element = new Array();
    element[0] = $('[name="firstname"]');
    element[1] = $('[name="lastname"]');
    element[2] = $('[name="email"]');
    element[3] = $('[name="s_address1"]');
    element[4] = $('[name="s_city"]');
    element[5] = $('[name="s_state"]');
    element[6] = $('[name="s_zip"]');
    element[7] = $('[name="nameonc"]');
    element[8] = $('[name="cardno"]');
    element[9] = $('[name="cvv"]');
    element[10] = $('[name="b_address1"]');
    element[11] = $('[name="b_city"]');
    element[12] = $('[name="b_state"]');
    element[13] = $('[name="b_zip"]');
    
    
    var area_code= $('[name="areacode"]');
    var hpr= $('[name="prefix"]');
    var hph= $('[name="phone"]');

	$('[name="month"]').on('keyup', function() {
        if($('[name="month"]').val().length == 2)       
        $('[name="year"]').focus();
	});
			
	
	area_code.on('keyup', function() {
        if(area_code.val().length == 3)       
        hpr.focus();
    });
            
    hpr.on('keyup', function() {
        if(hpr.val().length == 3)       
        hph.focus();
	});   
			
    
    $('[name="sameaddr"]').click(function(){
        if ($('[name="sameaddr"]').is(":checked")) {
        	var value=element[3].val();
        	element[10].val(value);
        	value=$('[name="s_address2"]').val();
        	$('[name="b_address2"]').val(value);
        	value=element[4].val();
        	element[11].val(value);
        	value=element[5].val();
        	element[12].val(value);
        	value=element[6].val();
        	element[13].val(value);
    	}
    	else {
    		element[10].val("");
    		element[11].val("");
    		element[12].val("");
    		element[13].val("");
    	}
    });
    
    $(':reset').on('click', function() {
    	errorStatus.html("");
       	$('*').removeClass("error");
    });
	      
	$(':submit').on('click', function(e) {
		$('*').removeClass("error");	
        errorStatus.html("");
	    if(!validate_Data()){
	    	e.preventDefault();
        	return;    
        }   
	   	else {
	   		$('#form2').submit();
	   	}       
    });
    
    function validate_Data() { 

    	var htel= $.trim($('[name="areacode"]').val()) +
			  $.trim($('[name="prefix"]').val()) +
			  $.trim($('[name="phone"]').val());
    	
    	if(isEmpty(element[0].val())) {
            element[0].addClass("error");
            errorStatus.text("Please enter your First name");
            element[0].focus();
            return false; 
        }
        
        if(isEmpty(element[1].val())) {
            element[1].addClass("error");
            errorStatus.text("Please enter your Last name");
            element[1].focus();
            return false; 
        }	
        if(isEmpty(htel)) {
            area_code.addClass("error");
            hpr.addClass("error");
            hph.addClass("error");
            errorStatus.text("Please enter your phone number ");
            area_code.focus();
            return false;
            }
            
     	if(!isEmpty(htel)) {
        	if (isEmpty(area_code.val())) {
        		area_code.focus();
        		errorStatus.text("Please enter your phone number's areacode");
        		return false;
        	}
        	if (isEmpty(hpr.val())) {
        		hpr.focus();
        		errorStatus.text("Please enter your phone number's prefix");
        		return false;
        	}
        	if (isEmpty(hph.val())) {
        		hph.focus();
        		errorStatus.text("Please enter your last 4 digits of your phone number");
        		return false;
        	}
        }
    	if(!$.isNumeric(htel)) {
        	if(!$.isNumeric(area_code.val())) {
        		errorStatus.text("The Phone number's areacode appears to be invalid, numbers only please.");
        		area_code.addClass("error");
        		area_code.focus();
        		return false;
        	}
        	if(!$.isNumeric(hpr.val())) {
        		errorStatus.text("The Phone number's prefix appears to be invalid, numbers only please.");
        		hpr.addClass("error");
        		hpr.focus();
        		return false;
        	}
        	if(!$.isNumeric(hph.val())) {
        		errorStatus.text("The last 4 digits of your phone number appears to be invalid, numbers only please.");
        		hph.addClass("error");
        		hph.focus();
        		return false;
        	}
        }  
        else if(validate_Tel(htel)) {
        	if(area_code.val().length != 3) {
        		errorStatus.text("The Phone number's areacode must have 3 digits");
        		area_code.addClass("error");
        		area_code.focus();
        		return false;
        	}
        	if(hpr.val().length != 3) {
        		errorStatus.text("The Phone number's prefix must have 3 digits");
        		hpr.addClass("error");
        		hpr.focus();
        		return false;
        	}
        	if(hph.val().length != 4) {
        		errorStatus.text("The Phone number's, Phone field must have 4 digits.");
        		hph.addClass("error");
        		hph.focus();
        		return false;
        	}	
        } 
        if(isEmpty(element[2].val())) {
            element[2].addClass("error");
            errorStatus.text("Please enter your Email");
            element[2].focus();
            return false;
            }
            
        if(!validate_Email()) {
        	element[2].addClass("error");
            errorStatus.text("Please enter a valid Email");
            element[2].focus();
        	return false;
        	}
    
    	if(isEmpty(element[3].val())) {
            element[3].addClass("error");
            errorStatus.text("Please enter your Address");
            element[3].focus();
            return false;
        }
            
        if(isEmpty(element[4].val())) {
            element[4].addClass("error");
            errorStatus.text("Please enter your City");
            element[4].focus();
            return false;
		}
            
        if(!validate_City(element[4].val())) {
        	element[4].addClass("error");
            errorStatus.text("Please enter a valid City name");
            element[4].focus();
        	return false;
        }
            
        if(isEmpty(element[5].val())) {
            element[5].addClass("error");
            errorStatus.text("Please enter your State");
            element[5].focus();
            return false;
            }
        
        if(!validate_State(element[5].val())) {
        	element[5].addClass("error");
            errorStatus.text("Please enter a valid  State Abbreviation");
            element[5].focus();
        	return false;
        	
        }
            
        if(isEmpty(element[6].val())) {
            element[6].addClass("error");
            errorStatus.text("Please enter your Zip code");
            element[6].focus();
            return false;
        }
            
        if(!validate_Zip(element[6].val())) {
        	element[6].addClass("error");
            errorStatus.text("Please enter a valid 5 digit Zip code");
            element[6].focus();
        	return false;
    	}
    	
    	if(!validate_Ptype()) {
            errorStatus.text("Please choose Payment type");
            $('[name="ptype"]').focus();
        	return false;
    	}
    	
    	if(isEmpty(element[7].val())) {
            element[7].addClass("error");
            errorStatus.text("Please enter Name on Card");
            element[7].focus();
            return false;
        }
        
        if(isEmpty(element[8].val())) {
            element[8].addClass("error");
            errorStatus.text("Please enter Card Number");
            element[8].focus();
            return false;
        }
        if(!$.isNumeric(element[8].val())) {
        	element[8].addClass("error");
            errorStatus.text("Invalid, digits only");
            element[8].focus();
            return false;
        }
		if((element[8].val()).length != 15 && (element[8].val()).length != 16 ){
    		element[8].addClass("error");
            errorStatus.text("Invalid, American Express Card has 15 digits. 16 digits in Visa,Master Cards,Discover");
            element[8].focus();
            return false;
    	}
    	
    	if(isEmpty($('[name="month"]').val())) {
        	$('[name="month"]').addClass("error");
            errorStatus.text("Please enter Month field in Expiration Date");
            $('[name="month"]').focus();
            return false;
            }
        else if(!$.isNumeric($('[name="month"]').val())){
        	$('[name="month"]').addClass("error");
        	errorStatus.text("Please enter digits only");
        	$('[name="month"]').focus();
        	return false;
        } 
        
        if(isEmpty($('[name="year"]').val())) {
        	$('[name="year"]').addClass("error");
            errorStatus.text("Please enter year field in Expiration Date");
            $('[name="year"]').focus();
            return false;
            }
        else if(!$.isNumeric($('[name="year"]').val())){
        	$('[name="year"]').addClass("error");
        	errorStatus.text("Please enter numbers only");
        	$('[name="year"]').focus();
        	return false;
        }
        
        if(!validate_Date()) {
        	return false;
        }
    	
        if(isEmpty(element[9].val())) {
            element[9].addClass("error");
            errorStatus.text("Please enter CVV,It is in back of your card");
            element[9].focus();
            return false;
        }
        
       	if((!$.isNumeric(element[9].val())) || ((element[9].val()).length < 3)) {
       		element[9].addClass("error");
            errorStatus.text("Invalid CVV, Enter a valid 3 or 4 digit CVV ");
            element[9].focus();
            return false;
       	}
       	
       	
    	
    	if(isEmpty(element[10].val())) {
            element[10].addClass("error");
            errorStatus.text("Please enter Address, in Billing Address Section");
            element[10].focus();
            return false;
        }
            
        if(isEmpty(element[11].val())) {
            element[11].addClass("error");
            errorStatus.text("Please enter City, in Billing Address");
            element[11].focus();
            return false;
		}
            
        if(!validate_City(element[11].val())) {
        	element[11].addClass("error");
            errorStatus.text("Please enter a valid City name, in Billing Address");
            element[11].focus();
        	return false;
        }
            
        if(isEmpty(element[12].val())) {
            element[12].addClass("error");
            errorStatus.text("Please enter State, in Billing Address");
            element[12].focus();
            return false;
            }
        
        if(!validate_State(element[12].val())) {
        	element[12].addClass("error");
            errorStatus.text("Please enter a valid 2 letter State Abbreviation, in Billing Address");
            element[12].focus();
        	return false;
        }
            
        if(isEmpty(element[13].val())) {
            element[13].addClass("error");
            errorStatus.text("Please enter Zip code,");
            element[13].focus();
            return false;
        }
            
        if(!validate_Zip(element[13].val())) {
        	element[13].addClass("error");
            errorStatus.text("Please enter a valid 5 digit Zip code");
            element[13].focus();
        	return false;
    	}
    
    	return true;
    }
    
});


function isEmpty(fieldValue) {
    if($.trim(fieldValue).length == 0)
    	return true;
    return false;  
}  

function validate_Tel(t) {
	var value= t.length;
	if(value == 10)
	return false
	return true;
}

function validate_Ptype() {
	var radio = document.getElementsByName("ptype")
	var check = -1
	for(var i=0; i<radio.length; i++) {
		if(radio[i].checked) {
			check = i;
		}
	}
	if(check == -1)
	return false;
	return true;
}

function validate_Email() {
	var value= $.trim($('[name="email"]').val());
	var pattern=/\S+@\S+\.[a-zA-Z]{2,6}/;
	if(pattern.test(value))
		return true;
	return false;
}

function validate_City(val) {
	var value = $.trim(val);
	var pattern= /^[a-zA-Z\- \.]+$/;
	if(pattern.test(value))
		return true;
		return false;
}

function validate_State(state) {  
	var value= $.trim(state).toUpperCase();                          
    var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DC2","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA",
        "MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH",
        "NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN",
        "TX","UT","VA","VT","WA","WI","WV","WY");
    for(var i=0; i < stateList.length; i++) 
        if(stateList[i] == value)
            return true;
         return false;
}

function validate_Zip(zip) {
	var value = $.trim(zip);
	var pattern = /^[0-9]{5}$/;
	if(pattern.test(value))
        return true;
    return false;
}

function validate_Date() {
    var Month = $.trim($('[name="month"]').val());
    var Year = $.trim($('[name="year"]').val());        
    if (Month < 1 || Month > 12) {
    	$('[name="month"]').addClass("error");
    	$('#message_line').text("Invalid month,Please enter 1-12 months only");
    	$('[name="month"]').focus();
        return false; 
        }
	if(Year < 2016){
		$('[name="year"]').addClass("error");
    	$('#message_line').text("Your card cannot be used,please check the valid year");
    	$('[name="month"]').focus();
        return false; 
    }
    if(Year == 2016){
    	if(Month!=12) {
    	$('[name="year"]').addClass("error");
    	$('#message_line').text("Please Check Card Validity Period");
    	$('[name="month"]').focus();
    	return false;
    	}
    
    }
    return true;
}

