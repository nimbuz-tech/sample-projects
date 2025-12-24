<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= esc($title ?? 'Dashboard') ?></title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <meta name="csrf-name" content="<?= csrf_token() ?>">
  <meta name="csrf-token" content="<?= csrf_hash() ?>">
  <style>
    body { padding-top: 56px; }
    .card { box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="<?= base_url() ?>">Apartment visitor management</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navMain">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link" href="<?= site_url('dashboard') ?>">Dashboard</a></li>
        <!-- <li class="nav-item"><a class="nav-link" href="<?= site_url('visitors/all') ?>">All Visitors</a></li>
        <li class="nav-item"><a class="nav-link" href="<?= site_url('visitors/total') ?>">Total Visitors</a></li> -->
        <li class="nav-item"><a class="nav-link" href="<?= site_url('visitors/add') ?>">Add Visitor</a></li>
        <!-- <li class="nav-item"><a class="nav-link" href="<?= site_url('visitors') ?>">Visitors (API)</a></li> -->
      </ul>
    </div>
  </div>
</nav>

<main class="container mt-4">
  <?= $this->renderSection('content') ?>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
