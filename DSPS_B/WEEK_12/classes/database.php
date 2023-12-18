<?php
    class Database {
        // Properties 
        public $host = "127.0.0.1";
        public $username = "root";
        public $password = "root";
        public $db = "northwind";
        public $port = 8889;
        public $conn;

        // Constructor 
        public function __construct() {
            $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->db, $this->port);
            
            if ($this->conn == false) {
                die("CONNECTION IS NOT CORRECT");
            }
        }

        // Methods
        public function getQuery($sql) {
            $items = mysqli_query($this->conn,$sql);
            return $items->fetch_all(MYSQLI_ASSOC);
        }

        public function insertQuery($sql) {
            return mysqli_query($this->conn,$sql);
        }
    }