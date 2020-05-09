import React, {Component} from 'react';
import styled from 'styled-components';
// import './charDetails.css';

export default class CharDetails extends Component {
    render() {
        
        const CharDetails = styled.div`
            background-color: #fff;
            padding: 25px 25px 15px 25px;
            margin-bottom: 40px;
            border-radius: 0.25rem !important;
            h4 {
                margin-bottom: 20px;
                text-align: center;
            }
        `;

        const ListGroupUl = styled.ul`
            display: flex;
            flex-direction: column;
            padding-left: 0;
            margin-bottom: 0;
            
            li {
                border-right-width: 0 !important;
                border-left-width: 0 !important;
                border-radius: 0 !important;
                position: relative;
                display: block;
                padding: 0.75rem 1.25rem;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.125);
                display: flex !important;
                justify-content: space-between !important;
            }

            li:first-child {
                border-top-width: 0;
                border-bottom-width: 0;
            }

            li:nth-child(2) {
                border-bottom-width: 0;
            }
            
            li:last-child {
                border-bottom-width: 0;
                border-top-width: 0;
            }
        `;

        const Term = styled.span`
            font-weight: bold;
        `;
    
        return (
            <CharDetails>
                <h4>John Snow</h4>
                <ListGroupUl>
                    <li>
                        <Term>Gender</Term>
                        <span>male</span>
                    </li>
                    <li>
                        <Term>Born</Term>
                        <span>1783</span>
                    </li>
                    <li>
                        <Term>Died</Term>
                        <span>1820</span>
                    </li>
                    <li>
                        <Term>Culture</Term>
                        <span>First</span>
                    </li>
                </ListGroupUl>
            </CharDetails>
        );
    }
}


// export default class CharDetails extends Component {

//     render() {
//         return (
//             <div className="char-details rounded">
//                 <h4>John Snow</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Gender</span>
//                         <span>male</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Born</span>
//                         <span>1783</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Died</span>
//                         <span>1820</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Culture</span>
//                         <span>First</span>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }