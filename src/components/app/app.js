import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services/gotService';
// import styled from 'styled-components';
import './app.css';
// import Grid from 'styled-components-grid';


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
            <> 
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
                    <CharacterPage/>
                    
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected={this.onItemSelected}
                                getData = {this.gotService.getAllBooks}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData = {this.gotService.getAllHouses}
                            renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
    
};


// исходник
// import React from 'react';
// import {Col, Row, Container} from 'reactstrap';
// import Header from '../header';
// import RandomChar from '../randomChar';
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';
// // import styled from 'styled-components';
// // import Grid from 'styled-components-grid';


// const App = () => {
//     return (
//         <> 
//             <Container>
//                 <Header />
//             </Container>
//             <Container>
//                 <Row>
//                     <Col lg={{size: 5, offset: 0}}>
//                         <RandomChar/>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md='6'>
//                         <ItemList />
//                     </Col>
//                     <Col md='6'>
//                         <CharDetails />
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// };

// export default App;