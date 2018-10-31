import * as React from "react";
import { Component } from "react";

import List from "../list";
import Search from "../search";

import { getList } from "../../data/clients";

export default class ClientForm extends Component<any, any> {
    public render() {
        return (
            <div>
                <h2>Client form</h2>
                <Search/>
                <List list={ getList() }/>
            </div>
        );
    }
}
