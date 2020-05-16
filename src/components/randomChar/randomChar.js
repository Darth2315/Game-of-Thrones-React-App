import React, {Component} from 'react';
// import './randomChar.css';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        // const id = 565656565656;
        const id = Math.floor(Math.random()*140 + 25); // Диапазон с 25 по 140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        console.log('render');
        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        const RandomBlock = styled.div`
            background-color: #fff;
            padding: 25px 25px 15px 25px;
            margin-bottom: 40px;
            border-radius: 0.25rem !important;
            h4 {
                margin-bottom: 20px;
                text-align: center;
            }
            img {
                width: 100%;
            }
        `

        return (
            <RandomBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

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
        <>
            <h4>Random Character: {name}</h4>
                <ListGroupUl>
                    <li>
                        <Term>Gender </Term>
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
                    </li>
                </ListGroupUl>
        </>
    )
}

// // Исходный код
// export default class RandomChar extends Component {

//     render() {

//         return (
//             <div className="random-block rounded">
//                 <h4>Random Character: John</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Gender </span>
//                         <span>male</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Born </span>
//                         <span>11.03.1039</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Died </span>
//                         <span>13.09.1089</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between">
//                         <span className="term">Culture </span>
//                         <span>Anarchy</span>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }
