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
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email); // Assuming email has a text attribute
};
const defaultConfirmation = createConfirmation(Confirmation);

export function confirm(confirmation, options = {}) {
    return defaultConfirmation({confirmation, ...options});
}

export const getLocation = () => {
    if (typeof window !== 'undefined') {
        return '2'

    } else {
        return '/'
    }
};
export const scrollToTop = (scrollDuration) => {
    const scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( scrollDuration / 15 ),
        cosParameter = scrollHeight / 2;
    let scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval(function () {
            if (typeof window !== 'undefined') {
                if (window.scrollY !== 0) {
                    scrollCount = scrollCount + 1;
                    scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                    window.scrollTo(0, ( scrollHeight - scrollMargin ));
                } else clearInterval(scrollInterval);
            }

        }, 15);
}