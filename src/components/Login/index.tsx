import * as React from "react";

import { login } from "../../api/login";

interface IState {
    login: string;
    password: string;
}

interface IProps {
    isLogged: any;
}

export default class Login extends React.Component<IProps, IState> {
    public state: IState = {
        login: '',
        password: ''
    };

    public onClick = () => {
        if (this.state.login === login.login && this.state.password === login.password) {
            this.props.isLogged(true);
        } else {
            alert("Введены неверные данные!");
        }
    };

    public onChangeInput = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;

        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };

    public render() {
        return (
            <div>
                <div>
                    <input type="text" name="login" placeholder='login' onChange={this.onChangeInput}/>
                </div>
                <div>
                    <input type="text" name="password" placeholder='password' onChange={this.onChangeInput}/>
                </div>
                <button onClick={this.onClick}>Login</button>
            </div>
        );
    }
}