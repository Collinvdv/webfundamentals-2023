<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
            Orders
        </h1>

        <?php
            require("./classes/database.php");

            $database = new Database();
           
            $sql = "SELECT * FROM Orders ORDER BY OrderId;";
            $products = $database->getQuery($sql);

            foreach($products as $product) {
                echo $product["OrderID"] . " " . $product["OrderDate"] . "<br>";
            }
        ?>
    </body>
</html>