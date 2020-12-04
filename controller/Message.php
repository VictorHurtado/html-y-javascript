<?php
    class MessageController{
        
        public function __construct(){
            require_once("model/message_model.php");
        }
        public function index(){
            
            $message=new Message();
            require_once("view/home.php");
        }
        public function guardar(){
           
            $msg= new Message();
            $name= $_POST['name'];
            $nit =$_POST['nit'];
            $lastname=$_POST['lastname'];
            $age= $_POST['age'];
            $email= $_POST['email'];
            $affair= $_POST['affair'];
            $message=$_POST['message'];
            $msg->sendMessage($name,$nit,$lastname,$age,$email,$affair,$message);
            $this->index();
            
        }

    }



?>