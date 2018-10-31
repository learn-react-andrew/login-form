import * as React from "react";
import {Component} from "react";

import './style.css';

interface IState {
    valueCity?: string
    valueName?: string
    valuePhone?: string
}

export default class Search extends Component<any, IState> {

    public onClick = () => {
        console.log(`
            Filter: \r\n
            Name: ${this.state.valueName}, \r\n
            City: ${this.state.valueCity}, \r\n
            Phone: ${this.state.valuePhone}
        `)
    };

    public onInputName = (e: any) => {this.setState({
        valueName: e.target.value
    })};
    public onInputCity = (e: any) => {this.setState({
        valueCity: e.target.value
    })};
    public onInputPhone = (e: any) => {this.setState({
        valuePhone: e.target.value
    })};

    public render() {
        return (
            <div className={'search'}>
                <input type="text" placeholder={"Введите имя"} onInput={this.onInputName} />
                <input type="text" placeholder={"Введите город"} onInput={this.onInputCity} />
                <input type="text" placeholder={"Введите телефон"} onInput={this.onInputPhone} />
                <button onClick={this.onClick}>Search</button>
            </div>
        );
    }
}