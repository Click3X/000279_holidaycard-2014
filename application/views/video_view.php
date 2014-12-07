<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Holidaycard2014</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?= base_url();?>styles/css/main.css">

        <meta property="og:url" content="<?= base_url(); ?>video/1234" /> 
        <meta property="og:title" content="My Custom Click 3X Holiday Video" />
        <meta property="og:description" content="This is awesome!" /> 
        <meta property="og:image" content="<?= base_url(); ?>images/thumbs/vacation.jpg"/> 

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@click3x">
        <!-- <meta name="twitter:creator" content="@jaytord"> -->
        <meta name="twitter:title" content="My Custom Click 3X Holiday Video">
        <meta name="twitter:description" content="This is awesome!">
        <meta name="twitter:image:src" content="<?= base_url(); ?>images/thumbs/vacation.jpg">
    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div id="video-container" class="container"><?php echo $videoid; ?></div>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
</body>
</html>