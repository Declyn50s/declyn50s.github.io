<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupérer les données du formulaire
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Vérifier que les champs sont remplis
  if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
    echo "Tous les champs doivent être remplis.";
  } else {
    // Envoi du courrier électronique
    $to = "derval.botuna@gmail.com";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    $message_body = "Nom: " . $name . "\n" .
                    "Email: " . $email . "\n" .
                    "Téléphone: " . $phone . "\n\n" .
                    "Message:\n" . $message;
    mail($to, $subject, $message_body, $headers);

    echo "Votre message a bien été envoyé.";
  }
}
?>
