import * as React from "react";

import List from "./List";
import Search from "./Search";

interface IState {
    city?: string;
    name?: string;
    phone?: string;
}

interface IProps {
    isLogged: any;
}

export default class ClientForm extends React.Component<IList & IProps, IState> {
    public state: IState = {
        city: '',
        name: '',
        phone: ''
    };

    public onClick = () => {
        this.props.isLogged(false)
    };

    public updateData = (value: IState) => {
        this.setState({
            city: value.city,
            name: value.name,
            phone: value.phone
        });
    };

    public render() {
        return (
            <div>
                <h2>Client form</h2>
                <button onClick={ this.onClick }>Log out</button>
                <Search updateData={ this.updateData }/>
                <List list={ this.props.list } search={ this.state }/>
            </div>
        );
    }
}
