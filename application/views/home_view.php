<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Holidaycard2014</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<?= base_url();?>styles/css/main.css">
        <script src="<?= base_url(); ?>scripts/vendor/modernizr/modernizr.js"></script>

        <!-- TYPE KIT FONT JS CODE -->
        <script src="//use.typekit.net/ali5dgb.js"></script>
        <script>try{Typekit.load();}catch(e){}</script>

        <!-- TEMP STYLE TAGS TILL I TALK TO JASON ABOUT GRUNT/COMPASS -->
        <style>
            .clearfix:before,
            .clearfix:after {
                content: "";
                display: table;
            } 
            .clearfix:after {
                clear: both;
            }
            .clearfix {
                zoom: 1; /* For IE 6/7 (trigger hasLayout) */
            }

            body {
                /* TEMP BG IMAGE FOR DESIGNING */
                background-repeat: no-repeat;
                background-size: contain;
                background-position:50% 0;
            }
 /*           body.page-home {background-image:url('<?= base_url();?>/images/pages/page-1.jpg');}
            body.page-2 {background-image:url('<?= base_url();?>/images/pages/page-2.jpg');}
            body.page-3 {background-image:url('<?= base_url();?>/images/pages/page-2.jpg');}
            body.page-4 {background-image:url('<?= base_url();?>/images/pages/page-2.jpg');}
            body.page-video {background-image:url('<?= base_url();?>/images/pages/page-3.jpg');}
            body.page-tshirt {background-image:url('<?= base_url();?>/images/pages/page-4.jpg');}
*/
            body { padding-top:0; }

            .bg-img {
                background-repeat: no-repeat;
                background-size: cover;
                background-position:50% 50%;
                width:100%;
            }

            .header-container {
                position: relative;
                width:100%;
                text-align: center;
            }

            .snow {
                background-image:url('<?= base_url();?>/images/header/snow.png');                
                padding-bottom: 63.75%;
                background-size: contain;
                background-position:0 0;
                background-repeat:repeat-x;
            }

            .happy-holidays {
                background-image:url('<?= base_url();?>/images/header/happy-dog-cat.png');
                padding-bottom: 63.75%;
                background-size: contain;
                margin:0 auto;
                padding-bottom: 53.75%;
                width: 89.21875%;
                max-width: 571px;

                position: absolute;
                top: 1px; left: -5px; right: 0;
            }

            .just-logos {
                background-image:url('<?= base_url();?>/images/header/happy-logos.png');
                width:86.25%;
                max-width: 552px;
                padding-bottom: 18.125%;
                margin: auto;
                position: absolute;
                top: 65.7%; left: -7px; right: 0;
            }

/*            .page-video .just-logos,
            .page-home .just-logos { display: block; }*/

            @media(min-width: 640px) {
                .snow { padding-bottom:408px; }
                .happy-holidays { 
                    padding-bottom:195px;
                    top:76px;
                }
                .just-logos { 
                    padding-bottom: 116px;
                    top: 268px; left: -13px;
                }
            }
        </style>

    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div id="header-container" class="header-container clearfix">
            <div class="bg-img snow"></div>
            <div class="bg-img happy-holidays"></div>
            <div class="bg-img just-logos"></div>
        </div>

        <script type="text/javascript">
            var router;
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
            // CHARLES DEV - OUTLINE DEBUG TOOL
            // CONDITIONALLY LOAD OUTLINE SCRIPT
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