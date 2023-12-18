<?php
    $productName = $_GET["productname"];
    $productPrice = $_GET["productprice"];

    include "./classes/database.php";
    $database = new Database();

    $products = $database->getQuery("SELECT * FROM Products WHERE ProductName LIKE '" . $productName . "'");

    if (sizeof($products) == 0) {
        $sql = 'INSERT INTO Products(ProductName, UnitPrice) VALUES ("'. $productName. '", ' . $productPrice . ');';
        
        $result = $database->insertQuery($sql);
        header('Location: index.php');
        exit;
    } else {
        echo "already existing";
    }

