import React, {Component} from 'react';
// import './randomChar.css';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }
    
    // // новый синтаксис пропсов по умолчанию
    // static defaultProps = {
    //     interval: 7500
    // }

    componentDidMount() {
        this.updateChar();
        // this.timerId = setInterval(this.updateChar, 7500);
        this.timerId = setInterval(this.updateChar, this.props.interval);
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

// Пропсы по умолчанию
RandomChar.defaultProps = {
    interval: 7500
}

// Короткая запись. Проверка типа данных
RandomChar.propTypes = {
    interval: PropTypes.number
}

// // Функция проверки типа данных
// RandomChar.propTypes = {
//     interval: (props, propName, componentName) => { // props - список всех пропсов, propName - конкретный пропс, componentName - имя компонента (RandomChar)
//         const value = props[propName];

//         if (typeof value === 'number' && !isNaN(value)) {
//                 return null
//         }
//         return new TypeError(`${componentName}: ${propName} must be a number`)
//     }
// }

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