<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Holidaycard2014</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
        <link rel="stylesheet" href="<?= base_url();?>styles/css/main.css">
        
        <!--[if IE]>
            <link rel="stylesheet" type="text/css" href="<?= base_url();?>styles/css/ie.css" />
        <![endif]-->

        <link rel="icon" type="image/png" href="favicon.png">

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

        <!-- HEADER -->
        <div id="header-container" class="header-container clearfix">
            <!-- ANIMATED SNOW -->
            <div class="snow-container">
                <div class="snow foreground"></div>
                <div class="snow foreground layered"></div>
                <div class="snow middleground"></div>
                <div class="snow middleground layered"></div>
                <div class="snow background"></div>
                <div class="snow background layered"></div>
            </div>

            <!-- NEW SVGS -->
            <div class="demo bg"></div>
            <div class="svg-holder clearfix">
                <!-- <div class="new-header bg"></div> -->
                <?php include ('images/new-header/inline/header.svg'); ?>
            </div>
        </div>

        <!-- PAGE CONTAINER -->
        <div id="page-container"></div>

        <!-- FOOTER -->
        <div id="footer" class="footer clearfix">
            <div class="gift-icon"></div>
            <p>If you have a gift code<br><span class="red">enter it here</span></p>
            <form id="giftcode" class="gift-code-form">
                <div class="txt-holder clearfix">
                    <label for="code" class="form-txt"></label>
                    <input name="code" id="gift-code" type="text" placeholder="Gift code" />
                    <input type="submit" class="form-btn" value="submit" />
                    <span class="error"></span>
                </div>
            </form>
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

        <script data-main="scripts/main" src="<?= base_url();?>scripts/vendor/require/require.min.js"></script>

        <?php
            // CHARLES DEV - OUTLINE DEBUG TOOL -- CONDITIONALLY LOAD OUTLINE SCRIPT
            $server = $_SERVER['REMOTE_ADDR'];
            // IF SERVER IS LOCAL, ADD OUTLINE BUTTON
            if($server == '127.0.0.1') {
                echo "
                <script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
                <script>
                    jQuery('head').append('<style>#outline {position:fixed;z-index:1000;bottom:50px;right:50px;} .outlines {outline:1px solid rgba(255, 0, 0, 0.3);}</style>');
                    jQuery('body').append('<input id=\"outline\" type=\"button\">');

                    jQuery('#outline').click(function() {
                        jQuery('*').toggleClass('outlines');
                   });
                </script>";
            }
        ?>
</body>
</html>