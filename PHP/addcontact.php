<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type'); 

$curl = curl_init();
$_POST = json_decode(file_get_contents("php://input"),true);

$email = $_POST['data']['email'];

$postData = [ 
    "updateEnabled" => false,
    "email" => strval($email)
];

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.brevo.com/v3/contacts",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  // CURLOPT_POSTFIELDS => "{\"updateEnabled\":false,\"email\":\"elly@example.com\"}",
  // CURLOPT_POSTFIELDS => "{\"updateEnabled\":false,\"email\":\".$email.\"}",
  CURLOPT_POSTFIELDS => json_encode($postData),
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "Content-Type: application/json",
    "api-key: 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"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}