import React from 'react';
import {Route, Switch} from "react-router-dom";
import App from "./App";
import {mixProps} from "./utils/index";

class Apps extends React.Component {

    render() {
        const mix = mixProps({...this.props});
        return (
            <div>
                <Switch>
                    <Route path={'/:path1?/:path2?/:path3?'} render={props => {
                        return <App {...mix(props)}/>
                    }}/>
                </Switch>
            </div>
        )
    }
}

export default Apps;