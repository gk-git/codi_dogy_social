import React from 'react';
import {Switch, Route} from 'react-router-dom';
import superagent from 'superagent';
import {PublicApp} from "./routes/PublicApp";
import {mixProps} from "./utils/index";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css'
import {ProfilePage} from "./routes/ProfilePage";
import {HomePage} from "./routes/HomePage";
import {LoginPage} from "./routes/LoginPage";


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        const data = props.appData;

        if (!props.visited && typeof document !== 'undefined') {
            this.setBrowserCookie('visited', 'true', 10000)
        }
        this.state = {
            ...data,
            status: 2,
            counter: 0,
            visited: props.visited,
            haveDog: true,
            alertIntro: {
                title: '',
                content: '',
                actionShow: false,
                actionText: '',
                actionLink: '/',
                images: []
            },
            registerUser: {
                username: {
                    value: '',
                    error: ''
                },
                email: {
                    value: '',
                    error: ''
                },
                name: {
                    value: '',
                    error: ''
                },
                dogName: {
                    value: '',
                    error: ''
                },
                password: {
                    value: '',
                    error: ''
                },
                confirmPassword: {
                    value: '',
                    error: ''
                }
            },
            authenticated: false
        };
        this.welcomeAction = this.welcomeAction.bind(this);
        this.checkLoginStatus = this.checkLoginStatus.bind(this);
        this.handleRegisterInputChange = this.handleRegisterInputChange.bind(this);
    }

    componentDidMount() {
        const oldState = this.state;
        this.setState({
            ...oldState
            , alertIntro: {
                title: 'The Number One websites',
                content: 'F2ind your perfect stud dog, bitch or puppy today, FREE to advertise, FREE to join and browse.',
                actionShow: true,
                actionText: 'Play like-me game 2!',
                actionLink: '/',
                images: [
                    {
                        src: 'https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg',
                        alt: 'user-x profile '
                    },
                    {
                        src: 'https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg',
                        alt: 'user-x profile '
                    },
                    {
                        src: 'https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg',
                        alt: 'user-x profile '
                    }
                ]
            }
        })
    }

    checkLoginStatus(nextState, replace) {
        if (!this.state.authenticated) {
            replace({pathname: '/'});
        }
    }

    handleRegisterInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            ...this.state, registerUser: {
                ...this.state.registerUser,
                [name]: {
                    ...this.state.registerUser[name],
                    value
                }
            }
        });
    }

    validateRegisterForm() {

        return {
            success: true
        }
    }

    handleRegisterFormSubmit(event) {
        event.preventDefault();

    }

    setBrowserCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getBrowserCookie(cname) {
        const name = cname + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    welcomeAction(status) {
        const oldState = this.state;
        this.setBrowserCookie('have-dog', status, 10000);

        this.setState({...oldState, haveDog: status, visited: true});
    }


    render() {
        const {welcomeAction, handleRegisterInputChange} = this;
        const passedProps = {...this.state, welcomeAction, handleRegisterInputChange};


        const mix = mixProps(passedProps);


        return (
            <div>
                <Switch>
                    <Route path="/login" render={(props) => {
                        return (
                            <PublicApp {...mix(props)} noBackground={true}>
                                <LoginPage  {...mix(props)}/>
                            </PublicApp>

                        )
                    }
                    }/>
                    <Route path="/u" render={(props) => {

                        return (
                            <PublicApp {...mix(props)} >
                                <ProfilePage {...mix(props)} />
                            </PublicApp>
                        )


                    }
                    }/>
                    <Route path="/" render={(props) => {

                        return (
                            <PublicApp {...mix(props)} >
                                <HomePage {...mix(props)} />
                            </PublicApp>
                        )


                    }
                    }/>
                </Switch>

            </div>
        )
    }
}

export default App;
