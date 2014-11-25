/*global define*/

define([
    'views/qpage',
    'text!/template/q4.php'
], function (QPageTemplate, T) {
    'use strict';

    var Q4 = QPageTemplate.extend({
        template: _.template( T )
    });

    return Q4;
});

