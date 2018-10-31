import * as React from "react";
import { Component } from "react";

interface IState {
    isLogin: boolean;
    login?: string;
    password?: string;
}

export default class User extends Component<any, IState> {

    public onClick = () => {
        console.log(`Login: ${this.state.login}; Pass: ${this.state.password}`);
    };

    public onChangeLogin = (e: any) => { this.setState({
        login: e.target.value
    })};

    public onChangePassword = (e: any) => { this.setState({
        password: e.target.value
    })};

    public render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder={'login'} onChange={this.onChangeLogin}/>
                </div>
                <div>
                    <input type="text" placeholder={'password'} onChange={this.onChangePassword}/>
                </div>
                <button onClick={this.onClick}>Login</button>
            </div>
        );
    }
}