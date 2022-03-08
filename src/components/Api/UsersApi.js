import React, { Component} from "react";

class UsersApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
        //.then( response => response.json())
        .then(data => consecuencia(data))
        .catch(console.error( error => console.log(error)))
    }

    componentDidMount() {
        console.log("Montada!!!")
        this.apiCall("https://s3-parfum-legende.herokuapp.com/api/users", this.mostarUser)       
    }

    mostarUser = (data) => {
        console.log(data);
    }

    componentDidUpdate() {
        console.log("Actualizado");
    }

    render() {
        console.log('Cargando');

        let contenido;

        if (this.state.user) {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <p> {this.state.user} </p>
        }

        return (
            <div>
                <p> {contenido} </p>
            </div>
        );
    }
}

export default UsersApi