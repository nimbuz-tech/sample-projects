<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=my_db', 'root', 'password');
    $stmt = $pdo->query('SELECT COUNT(*) as cnt FROM visitors');
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    echo 'rows: ' . $row['cnt'] . PHP_EOL;
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage() . PHP_EOL;
}
