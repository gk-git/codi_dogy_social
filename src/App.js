import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {PublicApp} from "./routes/PublicApp";
import {mixProps} from "./utils/index";
import './styles/App.css'

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
                        return (<h2>jjj</h2>)
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
