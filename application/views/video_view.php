<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Happy Holidays from Click 3X</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
        <link rel="stylesheet" href="<?= base_url();?>styles/css/main.css">
        
        <!--[if IE]>
            <link rel="stylesheet" type="text/css" href="<?= base_url();?>styles/css/ie.css" />
        <![endif]-->

        <link rel="icon" type="image/png" href="favicon.png">

        <meta property="og:url" content="<?= base_url(); ?>video/1234" /> 
        <meta property="og:title" content="My Custom Click 3X Holiday Video" />
        <meta property="og:description" content="This is awesome!" /> 
        <meta property="og:image" content="<?= base_url(); ?>images/thumbs/vacation.jpg"/> 

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@click3x">
        <meta name="twitter:creator" content="@cfmdev">
        <meta name="twitter:title" content="My Custom Click 3X Holiday Video">
        <meta name="twitter:description" content="This is awesome!">
        <meta name="twitter:image:src" content="<?= base_url(); ?>images/thumbs/vacation.jpg">

        <!-- TYPE KIT FONT JS CODE -->
        <script src="//use.typekit.net/ali5dgb.js"></script>
        <script>try{Typekit.load();}catch(e){}</script>

        <script type="text/javascript">
            var router;
            var base_url = "<?=base_url(); ?>";
            var root_dir = "<?= $this->config->item('root_directory'); ?>";
        </script>

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>css/ie8.css" />
        <![endif]-->
    </head>
    <!--[if IE 8 ]><body class="ie8"><![endif]-->
    <!--[if (gt IE 9)|!(IE)]><!--> <body> <!--<![endif]-->
        <div id="page-container">
            <section>
                <h1>MY HOLIDAY STORY: <?php echo $videoid; ?></h1>
                <div class="video-wrapper">
                    <div class="video-container">
                        <div class="video-player">
                            <!-- <video class="mobile-video" width="960" height="540" controls></video> -->
                            <div class="poster" style="background-image:url('<?php echo base_url(); ?>images/thumbs/vacation.jpg')"></div>
                            <video class="video" width="960" height="540" type="video/mp4" src="<?php echo base_url(); ?>videos/output/vacation-slopes.mp4" controls></video>
                        </div>
                    </div>
                </div>
            </section>

            <!-- SOCIAL LINKS -->
            <section class="button-holder clearfix">
                <div class="start-over-holder clearfix">
                    <a class="form-btn start-over-btn" data-navigate-to="home">Create your own!</a>
                </div>
            </section>
        </div>

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