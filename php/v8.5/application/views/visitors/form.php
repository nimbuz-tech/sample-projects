<?php defined('BASEPATH') || exit('No direct script access allowed'); ?>
<h1><?php echo isset($visitor) ? 'Edit Visitor' : 'Add Visitor'; ?></h1>
<?php echo form_open(); ?>
<p>
    <label>Name<br>
    <input type="text" name="name" value="<?php echo isset($visitor) ? html_escape($visitor->name) : ''; ?>" required>
    </label>
</p>
<p>
    <label>Phone<br>
    <input type="text" name="phone" value="<?php echo isset($visitor) ? html_escape($visitor->phone) : ''; ?>">
    </label>
</p>
<p>
    <label>Purpose<br>
    <input type="text" name="purpose" value="<?php echo isset($visitor) ? html_escape($visitor->purpose) : ''; ?>">
    </label>
</p>
<p>
    <label>Vehicle<br>
    <input type="text" name="vehicle" value="<?php echo isset($visitor) ? html_escape($visitor->vehicle) : ''; ?>">
    </label>
</p>
<p>
    <button type="submit">Save</button>
    <a href="<?php echo site_url('visitors'); ?>">Cancel</a>
</p>
<?php echo form_close(); ?>
