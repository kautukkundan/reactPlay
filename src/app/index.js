var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <h1>Helloooooq</h1>
        );
    }
});

var apper = document.getElementById('todos');

ReactDOM.render(<TodoComponent />, apper);
