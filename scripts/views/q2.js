/*global define*/

define([
    'views/qpage',
    'text!template/q2.php'
], function (QPageTemplate, T) {
    'use strict';

    var Q2 = QPageTemplate.extend({
        template: _.template( T )
    });

    return Q2;
});