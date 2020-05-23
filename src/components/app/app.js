import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {BooksPage, HousesPage, CharacterPage, BooksItem} from '../pages';
import gotService from '../../services/gotService';
import './app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false   
    } 

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render () {
        
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                            </Col>
                        </Row>
                        <Button color="primary" size="lg" 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}
                                >Toggle Random Character</Button>
                        <Route path='/' exact component={() => <h1>Welcome to GOT DB</h1>} />
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage} />      
                        <Route path='/books' exact component={BooksPage} /> 
                        <Route path='/books/:id' render={
                            ({match, location, history}) => {
                                // console.log(match);
                                // console.log(location);
                                // console.log(history);
                                // console.log(match.path);
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>
                            }
                        }/>                 
                    </Container>
                </div>
            </Router>
        );
    }
    
};