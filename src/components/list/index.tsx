import * as React from "react";
import { Component } from "react";

import './style.css';

interface IList {
    list: IClient[];
}

interface IClient {
    name: string;
    city: string;
    phone: string;
}

export default class List extends Component<IList, any> {
    public render() {
        const { list } = this.props;
        const resultList = Object(list).map((value: IClient, index: number) =>
            (
                <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.city}</td>
                    <td>{value.phone}</td>
                </tr>
            )
        );
        return (
            <div className={'list'}>
                <table>
                    <tbody>
                        {resultList}
                    </tbody>
                </table>
            </div>
        );
    }
}