<?php
require __DIR__ . '/../app/Helpers/env_helper.php';
loadEnv(__DIR__ . '/../.env');
echo 'HOST=' . getenv('HOST') . PHP_EOL;
echo 'DATABASE=' . getenv('DATABASE') . PHP_EOL;
echo 'DB_USER=' . getenv('DB_USER') . PHP_EOL;
echo 'DB_PORT=' . getenv('DB_PORT') . PHP_EOL;
