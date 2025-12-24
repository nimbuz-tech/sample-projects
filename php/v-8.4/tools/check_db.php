<?php
require __DIR__ . '/check_env.php';
$host = getenv('HOST');
$db = getenv('DATABASE');
$user = getenv('DB_USER');
$pass = getenv('PASSWORD');
$port = getenv('DB_PORT') ?: 3306;
try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$db", $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    $stmt = $pdo->query('SELECT VERSION() as v');
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    echo "Connected to MySQL: " . $row['v'] . PHP_EOL;
} catch (PDOException $e) {
    echo "DB Error: " . $e->getMessage() . PHP_EOL;
    exit(1);
}
