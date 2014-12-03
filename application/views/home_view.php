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

        <script src="<?= base_url(); ?>scripts/vendor/modernizr/modernizr.js"></script>

        <!-- TYPE KIT FONT JS CODE -->
        <script src="//use.typekit.net/ali5dgb.js"></script>
        <script>try{Typekit.load();}catch(e){}</script>

    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- HEADER CONTAINER -->
        <div id="header-container" class="header-container clearfix">
            <!-- ANIMATED SNOW TRY 2 -->
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
                <div class="happy-all bg"></div>
            </div>

            <!--  OLD SNOW NO ANIMATION -->
            <!-- <div class="bg-img snow"></div>  -->
            <!-- <div class="bg-img happy-holidays"></div> -->
            <div class="bg-img just-logos"></div>
        </div>

        <!-- HOME PAGE DIRECTIONS - shows only on home page via body-class -->
        <div class="directions clearfix">
            <!-- <p>Answer each question to create a custom Holiday Video, then share your story with others!</p> -->
            <p class="cta">Create &amp; share your holiday video today!</p>
            <div id="get-started" class="get-started">Get Started</div>
        </div>

        <script type="text/javascript">
            var router;
            var base_url = "<?=base_url(); ?>";
            var root_dir = "<?= $this->config->item('root_directory'); ?>";
        </script>

        <div id="main-nav-container">
            <ul class="nav nav-pills">
              <li data-id="home" role="presentation"><a data-navigate-to="home">Home</a></li>
              <li data-id="2" role="presentation"><a data-navigate-to="2">Q2</a></li>
              <li data-id="3" role="presentation"><a data-navigate-to="3">Q3</a></li>
              <li data-id="4" role="presentation"><a data-navigate-to="4">Q4</a></li>
              <li data-id="video" role="presentation"><a data-navigate-to="video">Video</a></li>
              <li data-id="tshirt" role="presentation"><a data-navigate-to="tshirt">T-Shirt</a></li>
            </ul>
        </div>
        <div id="page-container"></div>


        <!-- FOOTER -->
        <div id="footer" class="footer clearfix">
            <div class="gift-icon"></div>
            <p>If you have a gift code<br><a class="red" data-navigate-to="tshirt">enter it here</a><br><span class="serif-italic">or</span><br><a class="red">register here</a><br>for the give away</p>
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