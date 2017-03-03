#Name: Krishna Prasad M P id:jadrn027
use CGI;
use DBI;
use File::Path;

my $q = new CGI;

print "Content-type: text/html\n\n";
print <<ENDHTML;
<html>
<head>
	<title>Berthas Deluxe Chocolates<\/title>
	 <meta http-equiv="content-type" content="text/html;charset=utf-8"\/>
	 <script type="text/javascript" src="/jquery/jquery.js" ><\/script>
	 <link type="text/css" rel="stylesheet" href="/~jadrn027/proj4/proj4css.css"/>
     <script type="text/javascript" src="ajax_get_lib.js"><\/script>
     <script type="text/javascript" src="shopping_cart.js"><\/script>
     <script type="text/javascript" src="proj4.js"><\/script>
     <script type="text/javascript" src="order_form.js"><\/script>
<\/head>
<body>
 <div class ="wrapper">

            <ul>
               <li> <a href="/~jadrn027/proj4/index.html">Home<\/a> <\/li>
               <li> <a href="/~jadrn027/proj4/products.html">Products<\/a><\/li>
               <li> <a href="/~jadrn027/proj4/about.html">About Us<\/a><\/li>
               <li> <a href="/~jadrn027/proj4/contact.html">Contact Us<\/a><\/li>
            <\/ul>
         <\/div>
   <div id="choclate_list">
  <div id="confirm_page">
  <h1>Confirmation Page<\/h1>
ENDHTML
sub getDate() {
	($second, $minute, $hour, $dayofmonth, $month, $yearoffset, $dayofweek, $dayofyear, $daylightsavings) = localtime();
	$month += 1;
	$year = 1900 + $yearoffset;
	$date = "$year-$month-$dayofmonth";

	return $date;
}

sub getCustomerDetails() {
   
   	foreach $key ($q->param) {
	
	if ($key =~ /firstname/) {
	   $FirstName = $q->param($key);	
	}
	if ($key =~ /lastname/) {
	   $LastName = $q->param($key);	
	}
	if ($key =~ /email/) {
    	$Email = $q->param($key);	
    }
    if ($key =~ /areacode/) {
    	$a = $q->param($key);	
    }
    if ($key =~ /prefix/) {
    	$pr = $q->param($key);	
    }
    if ($key =~ /phone/) {
    	$ph = $q->param($key);	
    } 
    
    $Phone= $a.$pr.$ph;
	if ($key =~ /s_address1/) {
	   $Address1 = $q->param($key);	
	}
	if ($key =~ /s_address2/) {
	   $Address2 = $q->param($key);	
	}
	if ($key =~ /s_city/) {
	   $City = $q->param($key);	
	}
	if ($key =~ /s_state/) {
	   $State = $q->param($key);	
	}
	if ($key =~ /s_zip/) {
	   $Zip = $q->param($key);	
	}
   }
}

sub getOrderDetails() {
    foreach $key ($q->param) {
    	if ($key =~ /SKUNumber/) {
    	foreach $value ($q->param($key)) {
	   		if ($value ne "") {	   
				push(@SKUArray, $value);	   	
	    	}
        }
	}
	if ($key =~ /Title/) {
    	foreach $value ($q->param($key)) {
	   		if ($value ne "") {	   
				push(@TArray, $value);	   	
	    	}
        }
	}
	if ($key =~ /Quantity/) {
    	foreach $value ($q->param($key)) {
	   		push(@QtyArray, $value);
        }
	}
	if($key =~ /CostPrice/) {
		foreach $value ($q->param($key)) {
			push(@CpArray, $value);
		}
	}
	if($key =~ /Price/) {
		foreach $value ($q->param($key)) {
			push(@PriceArray, $value);
		}
	}
	
	if ($key =~ /Tax/) {
	   $Tax = $q->param($key);	
	}
	if ($key =~ /Shipping/) {
	   $Shipping = $q->param($key);	
	}
	if ($key =~ /Total/) {
	   $TotalCharges = $q->param($key);	
	}
    }
}
sub printO_Confirmation() {   
    if (@SKUArray) {
    print "<div id='confirm_page'><h2><center>Thank You, For Shopping with us<br>Your Order has been Placed Succesfully!</center></h2>";
    print "<h2><center>$FirstName&nbsp;$LastName</center></h2>";
	my $date = &getDate();
	print "<table class='confirm_table'>";
	print "<tr><td colspan='4'><b>Order Details </b>(Date: $date)</td></tr><tr>";
	print "<th>SKU</th><th>Product Title</th><th>Quantity</th><th>Price</th>";
    print "</tr> ";  	
    for($count = 0; $count < @SKUArray; $count++) {
    	print "<tr>";
    	print "<td> $SKUArray[$count] </td>";
    	my $str = $TArray[$count] ;
		my $find = "-";
		my $replace = " ";
		$find = quotemeta $find; 
		$str =~ s/$find/$replace/g;
		print "<td> $str </td>";
		print "<td><center> $QtyArray[$count] </center></td>";
		print "<td>\$$PriceArray[$count] </td>";
		print "</tr>";    	    
    }

    print "<tr><th colspan='2'>Estimated Tax: &nbsp;\$$Tax &nbsp;&nbsp;&nbsp;&nbsp; Shipping Charges: &nbsp;\$$Shipping</th>";
 	
 	print "<th colspan='2'>Total Order Price:  \$$TotalCharges</th></tr>";	
	
	print "<tr></tr>";
	print "<tr><th class=\"shipping\" >Shipment Address</th></tr>";
	print "<tr><td colspan='4'><b>Address:</b> &nbsp; $Address1 ,&nbsp;&nbsp; $Address2</td></tr>";
	print "<tr><td colspan='4'>&emsp;&emsp;&emsp;&emsp;&emsp;$City, $State - $Zip</td></tr>";
	print "<tr><td colspan='2'><b>Email:</b>&nbsp; $Email</td><td colspan='2'><b>Tel:</b> &nbsp; ($a)-$pr-$ph</td></tr>";
	print "</table></div>";
    }
    
}

&getOrderDetails();
&getCustomerDetails();
&printO_Confirmation();

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn027";
my $username = "jadrn027";
my $password = "cloud";
my $database_source = "dbi:mysql:$database:$host:$port";
my $query;
	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

if (@SKUArray) {
	for(my $count = 0; $count < @SKUArray; $count++) {
		my $str1 = $TArray[$count] ;
		my $find1 = "-";
		my $replace1 = " ";
		$find1 = quotemeta $find; 
		$str1 =~ s/$find/$replace/g;

		$query = $dbh->prepare("INSERT INTO orders(orderdate,sku,title,quantity,cost,retail) VALUES
		 ('$date','$SKUArray[$count]','$str1','$QtyArray[$count]','$CpArray[$count]','$PriceArray[$count]')"); 
		$query->execute();
	}
	$query->finish();
}

$dbh->disconnect();   


undef @SKUArray;



print "</div>";
print "</div>";
print "</body>";
print "</html>";

