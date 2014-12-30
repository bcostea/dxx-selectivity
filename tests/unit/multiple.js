'use strict';

var DomUtil = require('../dom-util');

exports.testInitialData = DomUtil.createDomTest(
    ['base', 'multiple', 'templates'],
    function(test, $input) {
        $input.select3({
            data: [
                { id: 1, text: 'Amsterdam' },
                { id: 2, text: 'Antwerp' }
            ],
            items: [
                { id: 1, text: 'Amsterdam' },
                { id: 2, text: 'Antwerp' },
                { id: 3, text: 'Athens' }
            ],
            multiple: true,
        });

        test.deepEqual($input.select3('data'), [
            { id: 1, text: 'Amsterdam' },
            { id: 2, text: 'Antwerp' }
        ]);

        test.deepEqual($input.select3('value'), [1, 2]);
    }
);

exports.testInitialValue = DomUtil.createDomTest(
    ['base', 'multiple', 'templates'],
    function(test, $input) {
        $input.select3({
            items: [ 'Amsterdam', 'Antwerp', 'Athens' ],
            multiple: true,
            value: ['Amsterdam', 'Antwerp']
        });

        test.deepEqual($input.select3('data'), [
            { id: 'Amsterdam', text: 'Amsterdam' },
            { id: 'Antwerp', text: 'Antwerp' }
        ]);

        test.deepEqual($input.select3('value'), ['Amsterdam', 'Antwerp']);
    }
);

exports.testNoData = DomUtil.createDomTest(
    ['base', 'multiple', 'templates'],
    function(test, $input) {
        $input.select3({
            items: [
                { id: 1, text: 'Amsterdam' },
                { id: 2, text: 'Antwerp' },
                { id: 3, text: 'Athens' }
            ],
            multiple: true,
        });

        test.deepEqual($input.select3('data'), []);

        test.deepEqual($input.select3('value'), []);
    }
);