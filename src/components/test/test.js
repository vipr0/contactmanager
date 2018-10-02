import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        title: '',
        body: ''
    };


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({
                title: json.title,
                body: json.body
            }))
    }

    // componentWillMount() {
    //     console.log('componentWillMount...');
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate...')
    // }

    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps...');
    // }

    render() {
        const {title, body} = this.state;
        return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
        )
    }
}
