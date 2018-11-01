import * as React from "react";
import ClientForm from "./ClientForm";
import Login from "./Login";

import { getList } from "../api/clients";

interface IState {
    isLogged: boolean;
}

export class App extends React.Component<{}, IState> {

    public state: IState = {
        isLogged: false
    };

    public isLogged = (value: boolean) => {
        this.setState({
            isLogged: value
        })
    };

    public getComponent = () => {
        if (!this.state.isLogged) {
            return <Login isLogged={ this.isLogged }/>
        } else {
            return <ClientForm list={ getList() } isLogged={ this.isLogged }/>
        }

    };

    public render() {
        return (
            <div>
                { this.getComponent() }
            </div>
        );
    }
}