import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';
import PublicApp from "./routes/PublicApp";
import {mixProps} from "./utils/index";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css'
import {Header} from "./components/Header";
import {EditProfilePage} from "./routes/EditProfilePage";
import {ProfilePage} from "./routes/ProfilePage";
import {HomePage} from "./routes/HomePage";
import {config} from "./auth-okta";


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
            }
        };
        this.welcomeAction = this.welcomeAction.bind(this);

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
        const {welcomeAction} = this;
        const passedProps = {...this.state, welcomeAction};

        const mix = mixProps(passedProps);


        return (
            <div>
                <Security issuer={config.issuer}
                          client_id={config.clientId}
                          redirect_uri={config.redirectUri}>

                    <Switch>

                        <Route path="/s" render={(props) => {
                            return (
                                <Header  {...mix(props)}/>
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
                        <Route path='/implicit/callback' component={ImplicitCallback}/>
                        <Route path="/" render={(props) => {

                            return (
                                <PublicApp {...mix(props)} >
                                    <HomePage {...mix(props)} />
                                </PublicApp>
                            )


                        }
                        }/>
                    </Switch>
                </Security>
            </div>
        )
    }
}

export default App;
