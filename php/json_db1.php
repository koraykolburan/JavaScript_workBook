<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["x"], false);

$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
$stmt = $conn->prepare("SELECT name FROM customers LIMIT ?");
$stmt->bind_param("s", $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp); //convert the request into an object, using the PHP function json_encode()

// Firstly, convert the request into an object, using PHP function json_encode().
// Secondly, access the Database and fill an array with the requested data.
// Finally, add the array to an object and return the object as JSON using the json_encode() function.
