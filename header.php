<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?php bloginfo('name'); ?></title>

<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/responsive.css">

<script src="https://unpkg.com/lucide@latest"></script>

<script>
window.SITE_URL = "<?php echo home_url(); ?>";
window.THEME_URL = "<?php echo get_template_directory_uri(); ?>";
</script>

<?php wp_head(); ?>
</head>

<body>
