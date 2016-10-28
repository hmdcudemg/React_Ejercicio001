import React from 'react';
import ReactDOM from 'react-dom';

var HolaMundo=React.createClass({
	render: function(){
		return <h1>React funciona!</h1>
	}
});

ReactDOM.render(<HolaMundo />, document.getElementById('app'));
