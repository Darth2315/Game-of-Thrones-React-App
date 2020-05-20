import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage'; 
import './itemDetails.css';

const Field =({item, field, label}) => {

    const Term = styled.span`
            font-weight: bold;
        `;

    return (
        <li>
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
        // this.foo.bar = 0; // вызываем ошибку
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }
        
        this.setState ({
            loading: true
        })

        getData(itemId)
            .then( (item) => {
                this.setState({item})
            })
            .catch( () => this.onError())
        // this.foo.bar = 0;
    }
    
    onError() {
        this.setState ({
            item: null,
            error: true
        })
    }

    render() {

        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>    
        } else if (!this.state.item) {
            return <span className="select-error">Please, select a character</span>
        }

        const {item} = this.state;
        const {name} = item;
              
        const ItemDetails = styled.div`
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

        // if (this.state.loading) {
        //     return (
        //         <ItemDetails>
        //             <Spinner/>
        //         </ItemDetails>
        //     )
        // }
    
        return (
            <ItemDetails>
                <h4>{name}</h4>
                <ListGroupUl>

                    { 
                      React.Children.map(this.props.children, (child) => {
                         return React.cloneElement(child, {item})
                      })  
                    }
                </ListGroupUl>
            </ItemDetails>
        );
    }
}