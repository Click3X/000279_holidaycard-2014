<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Holidaycard2014</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
        <link rel="stylesheet" href="<?= base_url();?>styles/css/main.css">
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
            
            <!-- <div class="bg-img snow"></div> -->
            <div class="bg-img happy-holidays"></div>
            <div class="bg-img just-logos"></div>
        </div>

        <!-- HOME PAGE DIRECTIONS - shows only on home page via body-class -->
        <div class="directions clearfix">
            <p>Answer each question to create a custom Holiday Video, then share your story with others!</p>
            <div id="get-started" class="get-started">Get Started</div>
        </div>

        <script type="text/javascript">
            var router;
            var base_url = "<?=base_url(); ?>";
            var root_dir = "<?= $this->config->item('root_directory'); ?>";
        </script>

        <div id="main-nav-container">
            <ul class="nav nav-pills">
              <li role="presentation" data-id="home"><a>Home</a></li>
              <li role="presentation" data-id="2"><a>Q2</a></li>
              <li role="presentation" data-id="3"><a>Q3</a></li>
              <li role="presentation" data-id="4"><a>Q4</a></li>
              <li role="presentation" data-id="video"><a>Video</a></li>
              <li role="presentation" data-id="tshirt"><a>T-Shirt</a></li>
            </ul>
        </div>
        <div id="page-container"></div>


        <!-- FOOTER -->
        <div id="footer" class="footer clearfix">
            <div class="gift-icon"></div>
            <p>If you have a <span class="red">gift code</span> enter it here for your free gift<br><span class="serif-italic">or</span><br>enter <span class="red">the give away</span> here</p>
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