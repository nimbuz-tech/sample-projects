<?php defined('BASEPATH') || exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apartment Visitors Management - Visitors Dashboard</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome for icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
    <style>
        .stats-card {
            transition: transform 0.3s;
        }
        .stats-card:hover {
            transform: translateY(-5px);
        }
        .table-responsive {
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body class="bg-light">

<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <nav class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse" style="min-height: 100vh;">
            <div class="position-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active text-white" href="#">
                            <i class="fas fa-home me-2"></i>
                            Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="<?php echo site_url('visitors/create'); ?>">
                            <i class="fas fa-user-plus me-2"></i>
                            Add Visitor
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Main content -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Apartment Visitors Management - Visitors Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <a href="<?php echo site_url('visitors/create'); ?>" class="btn btn-primary">
                        <i class="fas fa-plus me-2"></i>Add New Visitor
                    </a>
                </div>
            </div>

            <?php if ($this->session->flashdata('message')): ?>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <?php echo $this->session->flashdata('message'); ?>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            <?php endif; ?>

            <!-- Stats cards -->
            <div class="row mb-4">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2 stats-card">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Visitors</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"><?php echo count($visitors); ?></div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-users fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Visitors Table -->
            <div class="table-responsive shadow-sm">
                <?php if (empty($visitors)): ?>
                    <div class="alert alert-info m-3">No visitors yet.</div>
                <?php else: ?>
                    <table class="table table-striped table-hover">
                        <thead class="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Purpose</th>
                                <th>Vehicle</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($visitors as $v): ?>
                            <tr>
                                <td><?php echo $v->id; ?></td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <i class="fas fa-user-circle fa-2x me-2 text-secondary"></i>
                                        <?php echo html_escape($v->name); ?>
                                    </div>
                                </td>
                                <td>
                                    <i class="fas fa-phone me-2 text-primary"></i>
                                    <?php echo html_escape($v->phone); ?>
                                </td>
                                <td>
                                    <span class="badge bg-info text-dark">
                                        <?php echo html_escape($v->purpose); ?>
                                    </span>
                                </td>
                                <td>
                                    <i class="fas fa-car me-2 text-secondary"></i>
                                    <?php echo html_escape($v->vehicle); ?>
                                </td>
                                <td>
                                    <i class="fas fa-calendar me-2 text-secondary"></i>
                                    <?php echo date('M d, Y H:i', strtotime($v->created_at)); ?>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <a href="<?php echo site_url('visitors/edit/'.$v->id); ?>"
                                           class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="<?php echo site_url('visitors/delete/'.$v->id); ?>"
                                           class="btn btn-sm btn-outline-danger"
                                           onclick="return confirm('Are you sure you want to delete this visitor?')">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php endif; ?>
            </div>
        </main>
    </div>
</div>

<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
