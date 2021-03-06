import React, {useState, useEffect} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
// import './itemList.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gotService from '../../services/gotService';


function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect( () => {
        getData()
        .then( (data) => {
            updateList(data)
            })
        }, [])
    
    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);

            return (
                <li
                    key = {id}
                    onClick={ () => onItemSelected(id)}
                    >
                    {label}                
                </li>
            )
        })
    }

        if (!itemList) {
            return <Spinner/>
        }

        const items = renderItems(itemList);

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
                {items}
            </ListGroupItem>
        );
}

export default ItemList;


// ItemList.defaultProps = {
//     onItemSelected: () => {}
// }

// ItemList.propTypes = {
//     onItemSelected: PropTypes.func
//     // getData: PropTypes.arrayOf(PropTypes.object) // В getData должен быть массив, который будет состоять из объектов
// }


// // КОД ДО ИСПОЛЬЗОВАНИЯ ХУКОВ

// export default class ItemList extends Component {

//     state = {
//         itemList: null,
//         error: false
//     }

//     componentDidMount() {
//         const {getData} = this.props;

//         getData()
//             .then( (itemList) => {
//                 this.setState({
//                     itemList,
//                     error: false
//                 })
//             })
//             .catch( () => {this.onError()});
//     }

//     componentDidCatch() {
//         this.setState({
//             itemList: null,
//             error: true
//         })
//     }

//     onError = (status) => {
//         this.setState ({
//             itemList: null,
//             error: true
//         })
//     }
    
//     renderItems(arr) {
//         return arr.map((item) => {
//             const {id} = item;
//             const label = this.props.renderItem(item);

//             return (
//                 <li
//                     key = {id}
//                     onClick={ () => this.props.onItemSelected(id)}
//                     >
//                     {label}                
//                 </li>
//             )
//         })
//     }

//     render() {
//         const {itemList, error} = this.state;

//         if (error) {
//             return <ErrorMessage/>
//         }

//         if (!itemList) {
//             return <Spinner/>
//         }

//         const items = this.renderItems(itemList);

//         const ListGroupItem = styled.ul`
//             cursor: pointer;
//             display: flex;
//             flex-direction: column;
//             padding-left: 0;
//             margin-bottom: 0;
//             li {
//                 position: relative;
//                 display: block;
//                 padding: 0.75rem 1.25rem;
//                 background-color: #fff;
//                 border: 1px solid rgba(0, 0, 0, 0.125);
//             }

//             li:first-child {
//                 border-top-left-radius: 0.25rem;
//                 border-top-right-radius: 0.25rem;
//                 border-bottom-width: 0;
//             }

//             li:last-child {
//                 border-bottom-left-radius: 0.25rem;
//                 border-bottom-right-radius: 0.25rem;
//                 border-top-width: 0;
//             }
//         `
//         return (
//             <ListGroupItem>
//                 {items}
//             </ListGroupItem>
//         );
//     }
// }

// ItemList.defaultProps = {
//     onItemSelected: () => {}
// }

// ItemList.propTypes = {
//     onItemSelected: PropTypes.func
//     // getData: PropTypes.arrayOf(PropTypes.object) // В getData должен быть массив, который будет состоять из объектов
// }

















// const withData = (View, getData) => {
//     return class extends Component {

//         state = {
//             data: null,
//             error: false
//         }
        
    
//         componentDidMount() {
    
//             getData()
//                 .then( (data) => {
//                     this.setState({
//                         data,
//                         error: false
//                     })
//                     // this.foo.bar = 0; // вызываем ошибку
//                 })
//                 .catch( () => {this.onError()});
//         }

//         render () {
//             const {data, error} = this.state;

//         if (error) {
//             return <ErrorMessage/>
//         }

//         if (!data) {
//             return <Spinner/>
//         }
//             return <View {...this.props} data={data}/>
//         }
//     }
// }
// const {getAllCharacters} = new gotService;
// export default withData(ItemList, getAllCharacters);