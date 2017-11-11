import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import superagent from 'superagent';
import {PublicApp} from "./routes/PublicApp";
import {mixProps, valideEmail} from "./utils/index";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css'
import {ProfilePage} from "./routes/ProfilePage";
import {HomePage} from "./routes/HomePage";
import {LoginPage} from "./routes/LoginPage";
import {websiteUrl} from './utils'
import {AlertIntro} from "./components/AlertIntro";
import {confirm} from './utils';
import {EditProfilePage} from "./routes/EditProfilePage";


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
            locations: {},
            visited: props.visited,
            haveDog: true,
            redirectRegister: false,
            alertIntro: {
                title: '',
                content: '',
                actionShow: false,
                actionText: '',
                actionLink: '/',
                images: []
            },
            loginUser: {
                inputs: {
                    email: '',
                    email_username: ''
                },
                errors: {
                    email_username: '',
                    password: ''
                },
                actions: {
                    submitDisable: false
                }
            },
            registerUser: {

                username: '',
                email: '',
                name: '',
                dogName: '',
                password: '',
                confirmPassword: '',
                year: new Date().getYear(),
                month: new Date().getMonth(),
                day: new Date().getDay(),
                actions: {
                    submitDisable: false,
                    login: true
                },
                errors: {
                    username: '',
                    email: '',
                    name: '',
                    dogName: '',
                    password: '',
                    confirmPassword: '',
                }
            },
            profileEdit: {
                inputs: {
                    personalData: '',
                    origin: '',
                    gender: '',
                    breed: '',
                    dateOfBirth: new Date(),


                }, errors: {}, actions: {}
            },
            authenticated: false,
            user: {},
            sweetAlert: {
                show: false,
                success: true,
                title: 'Error',
                text: ''
            }
        };
        this.bindMe([
            'welcomeAction',
            'checkLoginStatus',
            'handleRegisterInputChange',
            'handleRegisterFormSubmit',
            'validateRegisterForm',
            'hideRegisterAlert',
            'login',
            'logout',
            'showSignupForm',
            'showLoginForm',
            'handleLoginFormChange',
            'handleLoginFormSubmit',
            'handleUserGalleryImageDelete',
            'handleProfileEditChange',
            'handleProfileEditSelectChange',
            'loadLocations',
            'handleProfileEditSubmit',
            'handleProfilePicChange'

        ])
    }

    bindMe(methodNames) {
        methodNames.map(methodName =>
            this[methodName] = this[methodName].bind(this)
        )
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
        this.loadLocations()
    }

    loadLocations() {

        superagent.get(`${websiteUrl}api/location`).then(results => {
            const response = results.body;
            if (response.success) {
                const oldState = this.state;
                const newState = {
                    ...oldState,
                    locations: response.data
                };
                this.setState(newState)
            }
        });
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
        const oldRegisterUser = this.state.registerUser;
        const newState = {
            ...this.state, registerUser: {
                ...oldRegisterUser,
                [name]: value,
                errors: {
                    ...oldRegisterUser.errors,
                    [name]: ''
                }
            }
        };
        this.setState(newState);
    }

    handleLoginFormChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const oldLoginUser = this.state.loginUser;
        this.setState({
            ...this.state, loginUser: {
                ...oldLoginUser,
                inputs: {
                    ...oldLoginUser.inputs,
                    [name]: value,
                },
                errors: {
                    ...oldLoginUser.errors,
                    [name]: ''
                }
            }
        });
    }

    handleProfileEditSelectChange(val, target) {
        const oldProfileEdit = this.state.profileEdit;
        const newState = {
            ...this.state, profileEdit: {
                ...oldProfileEdit,
                inputs: {
                    ...oldProfileEdit.inputs,
                    [target]: val.value,
                },
                errors: {
                    ...oldProfileEdit.errors,
                    [target]: ''
                }
            }
        };
        this.setState(newState);
    }

    handleProfileEditChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const oldProfileEdit = this.state.profileEdit;
        const newState = {
            ...this.state, profileEdit: {
                ...oldProfileEdit,
                inputs: {
                    ...oldProfileEdit.inputs,
                    [name]: value,
                },
                errors: {
                    ...oldProfileEdit.errors,
                    [name]: ''
                }
            }
        };
        this.setState(newState);

    }

    handleProfileEditSubmit() {
        const {profileEdit} = this.state;

        const dateOfBirth = new Date(`${profileEdit.inputs.year}-${profileEdit.inputs.month}-${profileEdit.inputs.day}`);

        const dataToSend = {
            id: profileEdit.inputs._id,
            dogName: profileEdit.inputs.dogName,
            location: profileEdit.inputs.location,
            personalData: profileEdit.inputs.personalData,
            origin: profileEdit.inputs.origin,
            breed: profileEdit.inputs.breed,
            gender: profileEdit.inputs.gender,
            dateOfBirth
        };
        superagent.put(websiteUrl + 'api/user').type('form').send(dataToSend).then(result => {
            const response = result.body;
            console.log(response)
        })
    }

    handleProfilePicChange(event) {
        let file = event.target.files[0];
        let formData = new FormData();

        formData.append('id',this.state.user._id );
        formData.append("profile_image", file);
        superagent
            .post(websiteUrl + "api/user/profile_pic").set('x-access-token', this.state.user.token)
            .send(formData).then(results => {
            console.log(results);
        })
    }

    validateLoginForm() {
        const response = {
            success: true,
            errors: {
                password: '',
                email_username: ''
            }
        };
        const password = this.state.loginUser.inputs.password.replace(/\s/g, '') === '';
        const email_username = this.state.loginUser.inputs.email_username.replace(/\s/g, '') === '';
        if (password || email_username) {
            response.success = false;
            response.errors.password = this.state.loginUser.inputs.password === '' ? 'Password is missing' : '';
            response.errors.email_username = this.state.loginUser.inputs.email_username === '' ? 'Email or Username is missing' : '';
            response.message = password && email_username ? 'Email and password are missing' : ( password ? 'Password is missing ' : 'Email is missing');
        }
        return response;

    }

    handleLoginFormSubmit(event, history) {
        event.preventDefault();
        this.setState({
            ...this.state,
            loginUser: {
                ...this.state.loginUser,
                actions: {
                    ...this.state.loginUser.actions,
                    submitDisable: true,

                }
            }


        });
        const result = this.validateLoginForm();

        if (result.success) {
            superagent.post(websiteUrl + 'api/login').type('form').send({...this.state.loginUser.inputs})
                .then(results => {
                    const {success, message, user, errors} = results.body;
                    if (success) {
                        this.login(user);
                        history.push('/');

                    } else {
                        this.setState({
                            ...this.state,
                            loginUser: {
                                ...this.state.loginUser,
                                errors,
                                actions: {
                                    ...this.state.loginUser.actions,
                                    loginSuccess: false,
                                    message

                                }
                            },
                            sweetAlert: {
                                show: true,
                                success: false,
                                title: 'Error',
                                text: message
                            }
                        });
                    }

                }).catch(error => {
                this.setState({
                    ...this.state,
                    sweetAlert: {
                        show: true,
                        success: false,
                        title: 'Error',
                        text: 'Something went wrong please try again'
                    }
                });
            });
            this.setState({
                ...this.state,
                redirectRegister: true,

            });
        } else {
            this.setState({
                ...this.state,
                loginUser: {
                    ...this.state.loginUser,
                    errors: result.errors,
                    actions: {
                        ...this.state.loginUser.actions,
                        loginSuccess: false,
                        message: result.message

                    }
                },
                sweetAlert: {
                    show: true,
                    success: false,
                    title: 'Error',
                    text: result.message
                }
            });
        }
    }

    validateRegisterForm() {

        const response = {
            success: true,
            errors: {}
        };
        if (this.state.registerUser.password !== this.state.registerUser.confirmPassword) {
            response.success = false;
            response.errors.password = 'Password do not match';
        }

        if (!valideEmail(this.state.registerUser.email)) {
            response.success = false;
            response.errors.email = 'Invalid Email';
        }
        return response;
    }

    handleRegisterFormSubmit(event, history) {
        event.preventDefault();
        const {registerUser} = this.state;
        this.setState({
            ...this.state,
            registerUser: {
                ...registerUser,
                submitDisable: true,
            }
        });
        const result = this.validateRegisterForm();
        // send to server
        if (result.success === true) {
            const dateOfBirth = new Date(`${registerUser.year}-${registerUser.month}-${registerUser.day}`);
            const dataToSend = {...registerUser, dateOfBirth};
            superagent.post(websiteUrl + 'api/user').type('form').send({...dataToSend, dateOfBirth})
                .then(results => {
                    const {success, message, user, errors} = results.body;
                    if (success) {
                        this.login(user);
                        history.push('/');

                    } else {
                        this.setState({
                            ...this.state,
                            sweetAlert: {
                                show: true,
                                success: false,
                                title: 'Error',
                                text: message
                            },
                            registerUser: {
                                ...this.state.registerUser,
                                errors
                            }
                        });
                    }

                }).catch(error => {
                this.setState({
                    ...this.state,
                    sweetAlert: {
                        show: true,
                        success: false,
                        title: 'Error',
                        text: 'Something went wrong please try again'
                    },
                    registerUser: {
                        ...this.state.registerUser,
                        actions: {
                            ...this.state.registerUser.actions,
                            alert: {}
                        }
                    }
                });
            });
            this.setState({
                ...this.state,
                redirectRegister: true,

            });


        } else {
            this.setState({
                ...this.state,
                registerUser: {
                    ...this.state.registerUser,
                    errors: {
                        ...this.state.registerUser.errors,
                        ...result.errors
                    }
                }
            });
        }
    }

    hideRegisterAlert() {
        this.setState({
            ...this.state,
            sweetAlert: {
                ...this.state.sweetAlert,
                show: false,
                success: true
            }
        })
    }

    login(user) {
        this.setState({
            ...this.state,
            authenticated: true,
            user,
            profileEdit: {
                ...this.state.profileEdit,
                inputs: user
            }
        });
    }

    logout() {
        this.setState({
            ...this.state,
            authenticated: false,
            user: {}
        });
    }

    showLoginForm() {
        this.setState({
            ...this.state,
            registerUser: {
                ...this.state.registerUser,
                actions: {
                    ...this.state.registerUser.actions,
                    login: true
                }
            }
        });
    }

    showSignupForm() {
        this.setState({
            ...this.state,
            registerUser: {
                ...this.state.registerUser,
                actions: {
                    ...this.state.registerUser.actions,
                    login: false
                }
            }
        });
    }

    setBrowserCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    handleUserGalleryImageDelete() {
        confirm('Are you sure you want to delete this image?').then(() => {
            alert('deleted')
        }, () => {
            alert('cancel')
        })
        if (1) {
            // Save it!
            alert('yes');
        } else {
            // Do nothing!
            alert('no');

        }
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
        const passedProps = {
            ...this.state, ...this
        };


        const mix = mixProps(passedProps);

        const {user, authenticated} = this.state;

        if (authenticated) {
            return (
                <div>
                    <Switch>
                        <Route path="/u/profile/edit" render={(props) => {
                            return (
                                <PublicApp {...mix(props)} >
                                    <EditProfilePage {...mix(props)}/>
                                </PublicApp>
                            )
                        }
                        }/>
                        <Route exact path={'/u/profile'} render={(props) => {

                            let alertIntro = false;
                            if (!user.completeProfile) {
                                alertIntro = {
                                    title: ' welcome to Doggo',
                                    content: 'Please complete your profile so other dogs can find you',
                                    actionShow: false,
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
                                };
                            }
                            return (
                                <PublicApp {...mix(props)} >
                                    {
                                        alertIntro ? <AlertIntro {...alertIntro} key={1}/> : null
                                    }
                                    <ProfilePage {...mix(props)}/>
                                </PublicApp>
                            )
                        }}/>
                        <Route path="/" render={(props) => {
                            if (!user.completeProfile) {

                                return <Redirect to='/u/profile'/>;
                            }
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
        } else {

        }
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