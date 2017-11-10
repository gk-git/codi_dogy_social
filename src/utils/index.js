import Confirmation from '../components/Confirmation';
import {createConfirmation} from 'react-confirm';

export const websiteUrl = 'http://localhost:3000/';
export const rootPath = '/Users/gabykaram/Desktop-2/codi/b-westProject/b-west';
export const mixProps = (passed_props) => (props) => ({...passed_props, ...props});
export const isEmpty = function (objectTest) {
    for (let key in objectTest) {
        if (this.hasOwnProperty(key))
            return false;
    }
    return true;
};
export const parseCookies = request => {
    const list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function (cookie) {
        const parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
};
export const valideEmail = (email) => {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email); // Assuming email has a text attribute
};
const defaultConfirmation = createConfirmation(Confirmation);
export function confirm(confirmation, options = {}) {
    return defaultConfirmation({confirmation, ...options});
}