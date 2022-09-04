export async function registerUser(userData) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    })).json();
}

export async function loginUser(userData) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    })).json();
}

export async function getUser() {
    return await (await fetch('https://nexnotesapp.herokuapp.com/auth/getUser', {credentials: 'include'})).json()
}

export async function getUserActiveSells(id) {
    return (await fetch(`https://nexnotesapp.herokuapp.com//products/sells/active/${id}`, {credentials: 'include'})).json();
}

export async function getUserArchivedSells() {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/sells/archived`, {credentials: 'include'})).json();
}

export async function getUserWishlist() {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/wishlist/getWishlist`, {credentials: 'include'})).json();
}

export async function editUserProfile(id, data) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/user/edit-profile/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })).json();
}

export async function getUserById(id) {
    return await (await fetch(`https://nexnotesapp.herokuapp.com/user/getUserById/${id}`, {credentials: 'include'})).json()
}
