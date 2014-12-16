<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Happy Holidays from Click 3X</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />
        <link rel="stylesheet" href="<?= base_url();?>styles/css/main.css">
        
        <link rel="icon" type="image/png" href="favicon.png">

        <!-- TYPE KIT FONT JS CODE -->
        <script src="//use.typekit.net/ali5dgb.js"></script>
        <script>try{Typekit.load();}catch(e){console.log(e);}</script>

        <script type="text/javascript">
            var router;
            var base_url = "<?=base_url(); ?>";
            var root_dir = "<?= $this->config->item('root_directory'); ?>";
            var endcoder_url = "<?= $this->config->item('encoder_url'); ?>";
            var default_twitter_status = 'Check out my Holiday Video from @Click3x and make your own here: holidays.click3x.com/2014! #Clickthehalls';
        </script>

        <script src="<?= base_url();?>scripts/vendor/modernizr/modernizr.min.js"></script>
    </head>
        <body>

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
                <div class="new-header bg"></div>
                <?php $this->load->view("header_svg_view"); ?>
            </div>
        </div>

        <!-- PAGE CONTAINER -->
        <div id="page-container"></div>

        <!-- FOOTER -->
        <div id="footer" class="footer clearfix">
            <div class="footer-inner">
                <hr>
                <div class="gift-icon"></div>
                <p>If you have a gift code<br><span class="red">enter it here</span></p>
                <form id="giftcode" class="gift-code-form">
                    <div class="txt-holder clearfix">
                        <label for="code" class="form-txt"></label>
                        <input name="code" id="gift-code" type="text" placeholder="Gift code" />
                        <span class="error"></span>
                        <input type="submit" class="form-btn" value="submit" />
                    </div>
                </form>
                <div class="credits"><a href="http://ablebaker-nyc.com" target="_blank"><p>original music by</p><img class="logo" src="<?= base_url(); ?>images/ui/ablebaker_logo.jpg" width="200" /></a></div>
            </div>
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

        <script src="<?= base_url();?>scripts/master.js"></script>
        <script data-main="<?= base_url();?>scripts/main" src="<?= base_url();?>scripts/vendor/require/require.min.js"></script>
</body>
</html>