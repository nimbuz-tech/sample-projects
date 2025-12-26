Deployment notes for Nimbuz

If you're deploying this CodeIgniter 4 app to Nimbuz, ensure the following:

1) Document root
- Point your web server's document root to the `public/` folder of this project. This is required for CodeIgniter to work correctly.

2) Procfile (Heroku-style)
- A `Procfile` is included to run Apache with the correct document root. Nimbuz recognizes a Procfile for PHP apps:

  web: vendor/bin/heroku-php-apache2 public/

3) Rewrite / mod_rewrite
- If using Apache, ensure `mod_rewrite` is enabled so `public/.htaccess` can route requests to `index.php`.

4) Health check
- A simple health route is available at `/health` and a static `public/status.html` page. Use these to verify the app is serving static and dynamic content.

5) Environment variables
- Use the platform env settings to set `HOST`, `DATABASE`, `DB_USER`, `PASSWORD`, and `DB_PORT` or add them to `.env` (avoid committing secrets).

6) Logs
- If the site returns 404 on the platform, check platform logs for build/runtime errors and verify the Procfile is used and the service started. Also check that the document root points to `public/`.

If you want, I can add an automated deployment script or check the current Nimbuz app logs for you if you provide access or the logs here.