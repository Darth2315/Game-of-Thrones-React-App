import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';
import styled from 'styled-components';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {

        const WrapperBook = styled.div`
            width: 50%;
            display: block;
            margin: 0 auto;
            font-size: 18px;
            h4{
                font-size: 32px;
                text-transform: uppercase;
            }
        `
        return(
            <WrapperBook>
                <ItemDetails
                    itemId = {this.props.bookId}
                    getData = {this.gotService.getBook} >
                        <Field field='numberOfPages' label='Number of pages' />
                        <Field field='publisher' label='Publisher' />
                        <Field field='released' label='Released' />
                </ItemDetails>
            </WrapperBook>
        )
    }
}