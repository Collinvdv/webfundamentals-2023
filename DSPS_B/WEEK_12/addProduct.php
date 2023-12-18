<?php
    require("./classes/database.php");
    
    $database = new Database();

    // get variables
    $productName = $_GET["productName"];
    $productPrice = $_GET["productPrice"];

    // CHECK IF WE GOT PRODUCT WITH THE NAME KIWI
    $sqlProductsByName = "SELECT * FROM Products WHERE ProductName LIKE '". $productName."'";
    $productsByName = $database->getQuery($sqlProductsByName);

    // INSERT
    if (sizeof($productsByName) == 0) {
        $sql = "INSERT INTO Products(ProductName, UnitPrice) VALUES ('".$productName."', ".$productPrice.");";
    
        $result = $database->insertQuery($sql);
        header('Location: index.php?addedItem=1');
        exit;
    } else {
        echo "Already in the table";
    }