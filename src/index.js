import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";


import Header from './components/header';
import { Switch, Route } from "react-router-dom";
import MaskDetection from "./components/maskdetection"
class App extends React.Component{
    render(){
        return (<>
        <BrowserRouter>
        {/* <HeaderS /> */}
        <Header />
            {/* <Route path="/" exact={false}  component={MaskDetection} /> */}
            <Switch>
            <Route path="/maskdetection" exact={true} component={MaskDetection} />
            {/* <Route path="/smartContract"component={SmartContract} /> */}
            </Switch>

        </BrowserRouter>
        {/* <Footer/> */}
        </>)
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));