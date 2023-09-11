class Football extends React.Component{
    shoot = () =>{
        alert(this);
        // "prevent this page from creating additional dialogs"
    }
    render() {
        return (
           <button onClick = {this.shoot}>Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById('root'));
