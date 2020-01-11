import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Zook from './pages/Zook'
import Zooks from './pages/Zooks'
import Home from './pages/Home'
import Container from "react-bootstrap/Container";

export default function App() {
    return (
        <Container>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/zook">Zooks</Link>
                            </li>
                            <li>
                                <Link to="/leagues">Leagues</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/" exact children={<Home/>}/>
                        <Route path="/zook/:id" component={Zook}/>
                        <Route path="/zook" component={Zooks}/>
                        <Route path="/leagues" children={<Leagues/>}/>
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

function Leagues() {
    let {path, url} = useRouteMatch();

    return (
        <div>
            <h2>Leagues</h2>
            <ul>
                <li>
                    <Link to={`${url}/sprint`}>Sprint</Link>
                </li>
                <li>
                    <Link to={`${url}/blockpush`}>Blockpush</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Leagues</h3>
                </Route>
                <Route path={`${path}/sprint`}>
                    <Sprint/>
                </Route>
                <Route path={`${path}/blockpush`}>
                    <BlockPush/>
                </Route>
                {/*TODO implement league pages*/}
            </Switch>
        </div>
    );
}


function Sprint() {
    return <h2>Sprint</h2>;
}

function BlockPush() {
    return <h2>BlockPush</h2>;
}

// export default App;
