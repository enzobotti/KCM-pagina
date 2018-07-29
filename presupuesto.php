<?php
$to = "nicoargiz@hotmail.com"; // This is your Email address
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['nombre']; // This is the sender's Name
$phone = $_POST['telefono'];
$comments = $_POST['mensaje'];
$subject = "Email de KCM - presupuesto";

$diseño = @$_REQUEST['diseño']    ? "YES" : "-";
$desarrollo = @$_REQUEST['desarrollo']   ? "YES" : "-";
$community = @$_REQUEST['community'] ? "YES" : "-";
$fotografia = @$_REQUEST['fotografia']  ? "YES" : "-";


$comments = "Nombre: $first_name \n
            Telefono: $phone \n
            Diseño grafico: $diseño \n
            Desarrollo Web: $desarrollo \n
            Community Mgnt: $community \n
            Fotog. y video: $fotografia \n
            Mensaje: $comments ";
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detalle del error". $email; 
}
header('Location: thank-you.html');
exit();
?>

