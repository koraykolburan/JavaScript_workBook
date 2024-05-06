<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_encode($_GET["x"], false);

$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
$result = $conn->query("SELECT name FROM ".$obj->$table." LIMIT ".$obj->$limit);
$outp = array();
$outp = $result->fetch_all(MYSQL_ASSOC);

echo "myFunc(".json_encode($outp).")";
?>