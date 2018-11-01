import * as React from "react";

import './style.css';

interface IState {
    city?: string
    name?: string
    phone?: string
}

interface IProps {
    updateData: any;
}

export default class Search extends React.Component<IProps, IState> {
    public state: IState = {
        city: '',
        name: '',
        phone: ''
    };

    public onClick = () => {
        this.props.updateData(this.state);
    };

    public onChangeFilter = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;

        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    public render() {
        return (
            <div className='search'>
                <input type="text" name="name" placeholder="Введите имя" onChange={this.onChangeFilter} />
                <input type="text" name="city" placeholder="Введите город" onChange={this.onChangeFilter} />
                <input type="text" name="phone" placeholder="Введите телефон" onChange={this.onChangeFilter} />
                <button onClick={this.onClick}>Search</button>
            </div>
        );
    }
}