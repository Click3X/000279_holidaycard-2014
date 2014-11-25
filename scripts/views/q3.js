/*global define*/

define([
    'views/qpage',
    'text!/template/q3.php'
], function (QPageTemplate, T) {
    'use strict';

    var Q3 = QPageTemplate.extend({
        template: _.template( T )
    });

    return Q3;
});