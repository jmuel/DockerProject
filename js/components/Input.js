'use strict';
var React = require('react');
var PrettyJSON = require('./PrettyJSON');

var Input = React.createClass({
    getInitialState: function() {
        return {val: 'blah'};
    },
    handleChange: function(event) {
        this.setState({val: event.target.value});
    },
    render: function() {
        return (
            <div>
                <input type="text" value={this.state.val} onChange={this.handleChange} />
                <input type="text" value={this.state.val} onChange={this.handleChange} />
                <PrettyJSON value={this.state} />
            </div>
        );
    }

});

module.exports = Input;