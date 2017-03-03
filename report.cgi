use CGI;
use DBI;
use File::Path;

# Name: Krishna Prasad M P id: jadrn027
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
ENDHTML

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn027";
my $username = "jadrn027";
my $password = "cloud";
my $database_source = "dbi:mysql:$database:$host:$port";
my $query;
	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';
print "<h1>Sales Report</h1>";
my $sql = qq/select sku,count(sku),sum(retail-cost) from orders group by sku /;      # the query to execute
my $sth = $dbh->prepare($sql);          # prepare the query
$sth->execute();                        # execute the query
my @row;
print "<table border='1' class =\"table_report\">\n";
print "<tr><th>SKU ID</th><th>Number of Units Sold</th><th>Profit</th></tr>";
while (@row = $sth->fetchrow_array) {  # retrieve one row
     print "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td></tr>\n";
}
print "</table>\n";
my $sql1 = qq/select count(id),sum(cost),sum(retail),sum(retail-cost) from orders /;      # the query to execute
my $sth1 = $dbh->prepare($sql1);          # prepare the query
$sth1->execute();                        # execute the query
my @row1;
print "<table border='1' class =\"table_report\">\n";
print "<tr><th>Total sales</th><th>Total Cost</th><th>Total Retail Cost</th><th>Overall Profit</th></tr>";
while (@row1 = $sth1->fetchrow_array) {  # retrieve one row
     print "<tr><td>$row1[0]</td><td>$row1[1]</td><td>$row1[2]</td><td>$row1[3]</td></tr>\n";
}
print "</table>\n";

$dbh->disconnect(); 
print "</div>";
print "</body>";
print "</html>";
