<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="row">
  <div class="col-md-8 offset-md-2">
    <div class="card p-4">
      <h4 class="mb-3">Register Visitor</h4>

      <div id="alertPlaceholder"></div>

      <form id="visitorForm">
        <div class="mb-3">
          <label class="form-label">Name *</label>
          <input type="text" name="name" class="form-control" required minlength="2">
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input type="text" name="phone" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Purpose</label>
          <input type="text" name="purpose" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Vehicle</label>
          <input type="text" name="vehicle" class="form-control">
        </div>

        <div class="d-flex justify-content-between">
          <a href="<?= site_url('visitors/all') ?>" class="btn btn-outline-secondary">Back</a>
          <button type="submit" class="btn btn-primary">Check In</button>
        </div>
      </form>
    </div>
  </div>
</div>

<script>
  const form = document.getElementById('visitorForm');
  const alertPlaceholder = document.getElementById('alertPlaceholder');

  function showAlert(message, type = 'success'){
    alertPlaceholder.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>`;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = {};
    formData.forEach((v,k) => payload[k] = v);

    const csrfName = document.querySelector('meta[name="csrf-name"]').getAttribute('content');
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    try {
      const res = await fetch('<?= site_url('visitors') ?>', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          [csrfName]: csrfToken
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        const errs = data.messages?.errors || data || 'Validation failed';
        if (typeof errs === 'object') {
          showAlert(Object.values(errs).flat().join('<br>'), 'danger');
        } else {
          showAlert(errs, 'danger');
        }
        return;
      }

      showAlert('Visitor checked in successfully.', 'success');
      setTimeout(() => location.href = '<?= site_url('dashboard') ?>', 800);
    } catch (err) {
      showAlert('Request failed. ' + err.message, 'danger');
    }
  });
</script>

<?= $this->endSection() ?>