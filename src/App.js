import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {PublicApp} from "./routes/PublicApp";
import {mixProps} from "./utils/index";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css'
import {Header} from "./components/Header";


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        const data = props.appData;

        this.state = {
            ...data,
            status: 2,
            counter: 0
        };

    }


    render() {
        const passedProps = {...this.state};
        const mix = mixProps(passedProps);

        return (
            <div>
                <Switch>
                    <Route path="/s" render={(props) => {
                        return (<Header/>)
                    }
                    }/> <Route path="/" render={(props) => {
                        return (<PublicApp {...mix(props)}/>)
                    }
                    }/>
                </Switch>

            </div>
        )
    }
}

export default App;
