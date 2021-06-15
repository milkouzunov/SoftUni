export const settings = {
    host: ''
};

async function request(url, options) {

    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err){
            return response;
        }

    } catch (err) {
        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('userToken');
    if (token != null) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    
    return options;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}

export async function login (username, password) {
    const result = await post (settings.host + '/auth/login', {username, password});

    sessionStorage.setItem('userToken', result.token);
    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result.userId);

    return result;
}

export async function register (username, email, password, gender) {
    const result = await post (settings.host + '/auth/register', {username, email, password, gender});

    return result;
}

export async function logout () {
    //const result = await get (settings.host + '/auth/logout');
    
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userId');

    //return result;
}
