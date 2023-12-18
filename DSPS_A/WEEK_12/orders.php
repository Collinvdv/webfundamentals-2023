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
            include "./classes/database.php";

            $database = new Database();
            $orders = $database->getQuery("SELECT * FROM Orders ORDER BY OrderID;");

            echo "<ul>";
            foreach($orders as $order) {
                echo("<li>" . $order["OrderID"] . " </li>");
            }
            echo "</ul>";

        ?>
    </body>
</html>