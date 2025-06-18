<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "contact@2mapetroleum.com";
    $subject = "Nouvelle inscription via le formulaire 2MA Petroleum";

    // Sécurisation des données
    $name = htmlspecialchars(trim($_POST["username"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Construction du corps du mail
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // En-têtes du mail
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoi du mail
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Votre message a été envoyé avec succès.'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\'envoi du message.'); window.history.back();</script>";
    }
}
?>
