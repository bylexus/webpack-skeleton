import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import foo from './foo_module';

class MyApp extends React.Component {
    constructor() {
        super();
        this.btnClick = this.btnClick.bind(this);
    }

    btnClick() {
        alert("Hello from react!");
        foo();
    }

    render() {
        return (
        <div>
            <h2>The React app part</h2>
            Hello, React app!
            <button type="button" onClick={this.btnClick}>Click react!</button>
        </div>
        );
    }
}

ReactDOM.render(<MyApp />,document.getElementById('react-app'));
