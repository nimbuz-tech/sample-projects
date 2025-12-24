<?php

/**
 * Simple .env loader helper for CodeIgniter 4 projects.
 *
 * Usage: call `loadEnv(FCPATH . '../.env')` early in your bootstrap (e.g. in public/index.php)
 *
 * This will set environment variables using putenv() and populate $_ENV / $_SERVER.
 */

if (! function_exists('loadEnv')) {
    function loadEnv(string $path): void
    {
        if (! file_exists($path)) {
            return;
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        foreach ($lines as $line) {
            $line = trim($line);

            // Skip comments and blank lines
            if ($line === '' || $line[0] === '#') {
                continue;
            }

            // Only accept lines that look like KEY=VALUE
            if (strpos($line, '=') === false) {
                continue;
            }

            // Split key and value (only at first =)
            [$name, $value] = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);

            // Remove surrounding quotes if present
            if ((strlen($value) >= 2) && (($value[0] === '"' && substr($value, -1) === '"') || ($value[0] === "'" && substr($value, -1) === "'"))) {
                $value = substr($value, 1, -1);
            }

            // Remove optional trailing comma (common when editing .env incorrectly)
            if (substr($value, -1) === ',') {
                $value = rtrim($value, ',');
            }

            // Expand environment variables referenced like ${VAR}
            $value = preg_replace_callback('/\$\{([^}]+)\}/', function ($m) {
                return getenv($m[1]) ?: $_ENV[$m[1]] ?? $_SERVER[$m[1]] ?? '';
            }, $value);

            // Finally set env var
            putenv("$name=$value");
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}
