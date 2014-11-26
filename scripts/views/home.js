/*global define*/

define([
    'views/qpage',
    'text!template/home.php'
], function (QPageTemplate, T) {
    'use strict';

    var HomeView = QPageTemplate.extend({
        template: _.template( T )
    });

    return HomeView;
});
