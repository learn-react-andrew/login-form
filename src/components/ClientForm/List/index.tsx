import * as React from "react";

import './style.css';

interface ISearch {
    search: {
        city?: string;
        name?: string;
        phone?: string;
    };
}

export default class List extends React.Component<IList & ISearch> {
    public render() {
        const { list, search } = this.props;
        const { city, name, phone } = search;
        let newList = list;

        if (name !== '') {
            newList = list.filter(l => l.name === name);
        }
        if (city !== '') {
            newList = list.filter(l => l.city === city);
        }
        if (phone !== '') {
            newList = list.filter(l => l.phone === phone);
        }
        if (name !== '' && city !== '') {
            newList = list.filter(l => l.name === name && l.city === city);
        }
        if (name !== '' && phone !== '') {
            newList = list.filter(l => l.name === name && l.phone === phone);
        }
        if (city !== '' && phone !== '') {
            newList = list.filter(l => l.city === city && l.phone === phone);
        }
        if (name !== '' && city !== '' && phone !== '') {
            newList = list.filter(l => l.name === name && l.city === city && l.phone === phone);
        }

        const resultList = newList.map((value: IClient, index: number) =>
            (
                <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.city}</td>
                    <td>{value.phone}</td>
                </tr>
            )
        );
        return (
            <div className='list'>
                <table>
                    <tbody>
                        {resultList}
                    </tbody>
                </table>
            </div>
        );
    }
}