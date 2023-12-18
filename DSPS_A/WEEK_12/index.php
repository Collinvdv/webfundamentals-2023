<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
            Products
        </h1>

        <?php
            include "./classes/database.php";

            $database = new Database();
            $products = $database->getQuery("SELECT * FROM Products ORDER BY ProductName;");

            echo "<ul>";
            foreach($products as $product) {
                echo("<li>" . $product["ProductName"] . " </li>");
            }
            echo "</ul>";

        ?>

        <hr>

        <form action="./addProduct.php" method="GET">
            <label>
                ProductName
            </label>
            <input type="text" name="productname">
            <label>
                Price
            </label>
            <input type="number" name="productprice">
            <input type="submit">
        </form>
    </body>
</html>