<?php
    class Connection{
        public function conectar(){
            $connect= new mysqli("localhost","root","","email_message");
            return $connect;
        }
    }




?>