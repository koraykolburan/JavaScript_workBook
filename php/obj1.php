<?php
$myObj = new stdClass();
$myObj->name = "Tom";
$myObj->age = 30;
$myObj->city = "California";

$myJSON = json_encode($myObj);

echo $myJSON;
