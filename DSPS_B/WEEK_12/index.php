<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            .success {
                background-color: green; 
                padding: 20px;
                color: white;
            }
        </style>
    </head>
    <body>
        <?php 
            if (isset($_GET['addedItem']) && $_GET['addedItem'] == 1) {
        ?>
                <div class="success">You added an iteem</div>
        <?php
            }
        ?>
        <h1>
            Products
        </h1>

        <?php
            require("./classes/database.php");

            $database = new Database();
           
            $sql = "SELECT * FROM Products ORDER BY ProductName;";
            $products = $database->getQuery($sql);

            foreach($products as $product) {
                echo $product["ProductName"] . " " . $product["UnitPrice"] . "<br>";
            }
        ?>

        <hr/>

        <form method="get" action="./addProduct.php">
            <label>
                ProductName
            </label>
            <input type="text" name="productName">
            <label>
                Price
            </label>
            <input type="number" name="productPrice">
           <input type="submit">
        </form>
    </body>
</html>