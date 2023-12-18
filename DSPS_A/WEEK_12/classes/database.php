<?php
    class Database {
        // Properties 
        public $dbServername = "127.0.0.1";
        public $dbUsername = "root";
        public $dbPassword = "root";
        public $dbName = "northwind";
        public $port = 8889;
        public $conn;

        // Construct
        public function __construct()
        {
            $this->conn = mysqli_connect($this->dbServername, $this->dbUsername, $this->dbPassword, $this->dbName, $this->port);
            
            if ($this->conn == false) {
                die("Connection failed"); 
            }
        }

        // Methods 
        public function getQuery($sql) {
            $items = mysqli_query($this->conn, $sql);

            return $items->fetch_all(MYSQLI_ASSOC);
        }

        public function insertQuery($sql) {
            $result = mysqli_query($this->conn, $sql);

            return $result;
        }

    }