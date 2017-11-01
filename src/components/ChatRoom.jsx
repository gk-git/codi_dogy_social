import React from "react";
import ReactDOM from "react-dom";
import "../styles/ChatRoom.css";

import Message from "./Message.js";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [
                {
                    username: "Kevin Hsu",
                    content: <p>Hello World!</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Alice Chen",
                    content: <p>Love it! :heart: dsasd sad sd sad sad</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Alice Chen",
                    content: <p>Love it! :heart:</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Alice Chen",
                    content: <p>Love it! :heart:</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Alice Chen",
                    content: <p>Love it! :heart:</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Alice Chen",
                    content: <p>Love it! :heart sa ds adsa da dsdassda sd sads ad sad sadsadsad sad sadsdasad s ad
                        sad:</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Kevin Hsu",
                    content: <p>Check out my Github at https://github.com/WigoHunter</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Kevin Hsu",
                    content: <p>So</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Kevin Hsu",
                    content: (
                        <p>
                            Chilltime is going to be an app for you to view videos with
                            friends
                        </p>
                    ),
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Kevin Hsu",
                    content: <p>You can sign-up now to try out our private beta!</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                },
                {
                    username: "Alice Chen",
                    content: <p>Definitely! Sounds great!</p>,
                    img: "http://i.imgur.com/Tj5DGiO.jpg"
                }
            ]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(
            this.refs.chats
        ).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState(
            {
                chats: this.state.chats.concat([
                    {
                        username: "Kevin Hsu",
                        content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                        img: "http://i.imgur.com/Tj5DGiO.jpg"
                    }
                ])
            },
            () => {
                ReactDOM.findDOMNode(this.refs.msg).value = "";
            }
        );
    }

    render() {
        const username = "Kevin Hsu";
        const {chats} = this.state;

        return (
            <div className="chatroom">
                <h3>Chat Room</h3>
                <div className=" chat-left">

                    <button className="chat active">
                       <div className="img-block">
                           <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                           <span className={'message-count'}>2</span>
                       </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                            <span className={'message-count'}>2</span>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                            <span className={'message-count'}>2</span>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                            <span className={'message-count'}>2</span>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                            <span className={'message-count'}>2</span>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                    <button className="chat">
                        <div className="img-block">
                            <img src="http://i.imgur.com/Tj5DGiO.jpg" className={'profile-image'} alt=""/>
                        </div>


                        <span className={'dog-name'}>hellllweasadsaddsad</span>
                    </button>

                </div>
                <ul className="chats" ref="chats">


                        {chats.map(chat => <Message chat={chat} user={username}/>)}

                </ul>
                <form className="input" onSubmit={e => this.submitMessage(e)}>
                    <div className="input-block">
                        <input type="text" ref="msg"/>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default ChatRoom;
