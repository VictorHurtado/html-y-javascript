<?php

    class Message{
        private $db;

        public function __construct(){
            $this->db =Connection::conectar();
        }

        public function sendMessage($name,$nit,$lastname,$age,$email,$affair,$message){
            // echo $name;
            // echo $nit;
            // echo $lastname;
            // echo $age;
            $query = "INSERT INTO messages (id_message,email,affair,message) VALUES (NULL,'$email','$affair','$message')";
            $resultado= $this->db->query($query);
            return $resultado;
        }

    }



?>