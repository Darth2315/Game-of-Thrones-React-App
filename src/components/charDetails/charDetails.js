import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage'; 
import './charDetails.css';

const Field =({char, field, label}) => {

    const Term = styled.span`
            font-weight: bold;
        `;

    return (
        <li>
            <Term>{label}</Term>
            <span>{char[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
        // this.foo.bar = 0; // вызываем ошибку
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        
        this.setState ({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then( this.onCharDetailsLoaded )
            .catch( () => this.onError())
        // this.foo.bar = 0;
    }
    
    onError() {
        this.setState ({
            char: null,
            error: true
        })
    }

    render() {

        if (!this.state.char && this.state.error) {
            return <ErrorMessage/>    
        } else if (!this.state.char) {
            return <span className="select-error">Please, select a character</span>
        }

        const {char} = this.state;
        const {name} = char;
              
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

        if (this.state.loading) {
            return (
                <CharDetails>
                    <Spinner/>
                </CharDetails>
            )
        }
    
        return (
            <CharDetails>
                <h4>{name}</h4>
                <ListGroupUl>

                    { 
                      React.Children.map(this.props.children, (child) => {
                         return React.cloneElement(child, {char})
                      })  
                    }

                    {/* <li>
                        <Term>Gender</Term>
                        <span>{gender}</span>
                    </li>
                    <li>
                        <Term>Born</Term>
                        <span>{born}</span>
                    </li>
                    <li>
                        <Term>Died</Term>
                        <span>{died}</span>
                    </li>
                    <li>
                        <Term>Culture</Term>
                        <span>{culture}</span>
                    </li> */}
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