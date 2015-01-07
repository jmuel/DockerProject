'use strict';
var React = require('react');

var PrettyJSON = React.createClass({
    render: function() {
        return (
            <pre>{JSON.stringify(this.props.value, undefined, 2)}</pre>
        );
    }
})

module.exports = PrettyJSON;