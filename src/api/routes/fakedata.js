import superagent from 'superagent'
import User from '../model/user';
import userData from '../../../fakeData.json'

export const fakeUser = (req, res) => {
    const users = [];
    const rowLen = userData.length;
    userData.map((userFake, index) => {

        superagent.get('https://dog.ceo/api/breeds/image/random').then(results => {
            const {status, message} = results.body;
            if (status) {

                const date = new Date(userFake.dateOfBirths.$date);
                userFake.year = date.getFullYear();
                userFake.month = date.getMonth() + 1;
                userFake.day = date.getDate();
                userFake.profileImage = message;
                const user = Object.assign(new User(), {...userFake});

                user.save((err, result) => {
                    if (err) {
                        // res.send({
                        //     err,
                        //     body: req.body
                        // });
                    }
                    else {
                        users[index] = result;
                        if (rowLen === index + 1) {
                            // last one
                            res.json({
                                success: true,
                                users
                            });
                            return users;
                        }
                    }
                });
            }
        }).catch(err => {
            console.log('err ==>>', err)
        });
        return null;

    })

};
export const fakeDataUsertest = (req, res) => {
    const userFake = {
        "email": "mlerr@dropbox.com",
        "password": "mMirQa3dFBTk",
        "username": "mlerr",
        "name": "Madeline Le Noir",
        "dogName": "Striped skunk",
        "location": "5a07fdc5d1c1b1105437a54c",
        "personalData": "ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing",
        "gender": "Male",
        "origin": "GREENLAND",
        "breed": "AUSTRIAN PINSCHER",
        "dateOfBirth": {
            "$date": "2011-03-12"
        },
        "profileImage": "http://dummyimage.com/535x330.jpg/dddddd/000000"
    };
    const date = new Date(userFake.dateOfBirth.$date);
    res.send({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    })
    // superagent.get('https://dog.ceo/api/breeds/image/random').then(results => {
    //     const {status, message} = results.body;
    //     if (status) {
    //         // const user = Object.assign(new User(), {...req.body});
    //         const imageUrl = message;
    //
    //     }
    // })
};