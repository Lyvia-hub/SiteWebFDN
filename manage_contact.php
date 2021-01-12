<?php
	$sended = false;
	$errors = [];
	/* On traite uniquement les requêtes POST */
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		if(!isset($_POST["name"]) || empty($_POST["name"])) {
			array_push($errors, "Vous devez renseigner un nom");
		}

		if(!isset($_POST["email"]) || empty($_POST["email"])) {
			array_push($errors, "Vous devez renseigner un email");
		}
		else if(!filter_var($_POST["email"])) {
			array_push($errors, "L'email renseigné est invalide");
		}

		if(!isset($_POST["subject"]) || empty($_POST["subject"])) {
			array_push($errors, "Vous devez renseigner un sujet");
		}

		if(!isset($_POST["message"]) || empty($_POST["message"])) {
			array_push($errors, "Vous devez renseigner un message");
		}

		if(!count($errors)) {
			$message = $_POST["message"] . "\r\n" . $_POST["name"] . "\r\n" . $_POST["email"];
			$headers = array(
				'From' => $_POST["name"] . ' <' . $_POST["email"] . '>',
				'Reply-To' => $_POST["name"] . ' <' . $_POST["email"] . '>',
				'X-Mailer' => 'PHP/' . phpversion()
			);
			try {
				$sended = mail("fansdenetflixfrance@gmail.com", $_POST["subject"], $_POST["message"], $headers);
				if(!$sended) array_push($errors, "Nous sommes désolé, il y a eu un soucis lors de l'envoi de l'email...");
			} catch (Exception $e) {
				array_push($errors, $e);
			}
		}
	}

	header('Content-Type: application/json');
	echo json_encode(array(
		"sended" => $sended,
		"errors" => $errors,
	));
?>