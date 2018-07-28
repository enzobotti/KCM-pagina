<?php
$to = "nicoargiz@hotmail.com"; // This is your Email address
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['nombre']; // This is the sender's Name
$company = $_POST['empresa'];
$phone = $_POST['telefono'];
$comments = $_POST['mensaje'];
$subject = "Email de KCM form";
$comments = "Nombre: $first_name \n
            Empresa: $company \n
            Telefono: $phone \n
            Mensaje: $comments ";
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detallle del error". $email; 
}
?>
