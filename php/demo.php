<?php
$myObj = new stdClass();
$myObj->name = "Tommy";
$myObj->age = 40;
$myObj->city = "California";

$myJSON = json_encode($myObj);

echo $myJSON;
?>