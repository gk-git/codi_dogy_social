import React, {Component} from 'react';
import {withAuth} from '@okta/okta-react';
import '../styles/PublicApp.css';
import {SideBar} from "../components/SideBar";
import {TopNavBar} from "../components/TopNavBar";
import {Header} from "../components/Header";

export default withAuth(class PublicApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            authenticated: null
        };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    async checkAuthentication() {

        if (typeof window !== 'undefined') {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({authenticated});
            }
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            ...nextProps
        })
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    render() {
        const {children, alertIntro, visited} = this.state;
        if (this.state.authenticated === null) return null;
        if (!visited) {
            return (<Header {...this.state}/>)
        }
        return (
            <div>
                <div className={'header'}>
                    <TopNavBar {...this.state}/>
                </div>
                <div className="fixed-cont">
                    <SideBar {...this.state}/>
                </div>
                <div id="wrapper">

                    <div className="full-column">
                        {children}
                    </div>
                    <div className={'clear-both'}/>
                </div>


            </div>
        )
    }

    // render() {
    //     if (this.state.authenticated === null) return null;
    //     return this.state.authenticated ?
    //         <button onClick={this.props.auth.logout}>Logout</button> :
    //         <button onClick={this.props.auth.login}>Login</button>;
    // }
});
const PublicApps = (props) => {

    const {children, alertIntro, visited} = props;
    if (!visited) {
        return (<Header {...props}/>)
    }
    return (
        <div>
            <div className={'header'}>
                <TopNavBar {...props}/>
            </div>
            <div className="fixed-cont">
                <SideBar {...props}/>
            </div>
            <div id="wrapper">

                <div className="full-column">
                    {children}
                </div>
                <div className={'clear-both'}/>
            </div>


        </div>
    )
};

const C = ({children}) => <div>
    <div className={'header'}>
        <TopNavBar/>
    </div>
    <div className="fixed-cont">
        <SideBar/>
    </div>
    <div id="wrapper">

        <div className="full-column">
            {children}
        </div>
        <div className={'clear-both'}/>
    </div>

</div>


export {PublicApps};