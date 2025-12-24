<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="row mb-3">
  <div class="col-md-4 offset-md-4">
    <div class="card p-3">
      <h6>Total Visitors</h6>
      <h2><?= number_format($totalVisitors) ?></h2>
    </div>
  </div>
</div> 


<div class="row">
  <div class="col-12">
    <div class="card p-3">
      <h6>All Visitors</h6>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr><th>#</th><th>Name</th><th>Phone</th><th>Purpose</th><th>Vehicle</th><th>Time</th></tr>
          </thead>
          <tbody>
            <?php foreach ($recent as $i => $r): ?>
            <tr>
              <td><?= $i+1 ?></td>
              <td><?= esc($r['name']) ?></td>
              <td><?= esc($r['phone']) ?></td>
              <td><?= esc($r['purpose']) ?></td>
              <td><?= esc($r['vehicle']) ?></td>
              <td><?= esc($r['created_at']) ?></td>
            </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


<?= $this->endSection() ?>
