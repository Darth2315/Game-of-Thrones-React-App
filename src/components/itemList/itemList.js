import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';


export default class ItemList extends Component {

    render() {

        const ListGroupItem = styled.ul`
            cursor: pointer;
            display: flex;
            flex-direction: column;
            padding-left: 0;
            margin-bottom: 0;
            li {
                position: relative;
                display: block;
                padding: 0.75rem 1.25rem;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.125);
            }

            li:first-child {
                border-top-left-radius: 0.25rem;
                border-top-right-radius: 0.25rem;
                border-bottom-width: 0;
            }

            li:last-child {
                border-bottom-left-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
                border-top-width: 0;
            }
        `
        return (
            <ListGroupItem>
                <li>
                    John Snow
                </li>
                <li>
                    Brandon Stark
                </li>
                <li>
                    Geremy
                </li>
            </ListGroupItem>
        );
    }
}

// // Исходный код, до рефакторинга
// export default class ItemList extends Component {

//     render() {
//         return (
//             <ul className="item-list list-group">
//                 <li className="list-group-item">
//                     John Snow
//                 </li>
//                 <li className="list-group-item">
//                     Brandon Stark
//                 </li>
//                 <li className="list-group-item">
//                     Geremy
//                 </li>
//             </ul>
//         );
//     }
// }