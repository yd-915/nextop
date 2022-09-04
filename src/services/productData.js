export async function getAll(page, category, query) {
    if (query !== "" && query !== undefined) {
        return (await fetch(`https://nexnotesapp.herokuapp.com/products?page=${page}&search=${query}`, { credentials: 'include' })).json();
    } else if (category && category !== 'all') {
        return (await fetch(`https://nexnotesapp.herokuapp.com/products/${category}?page=${page}`, { credentials: 'include' })).json();
    } else {
        return (await fetch(`https://nexnotesapp.herokuapp.com/products?page=${page}`, { credentials: 'include' })).json();
    }
}

export async function getSpecific(id) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/specific/${id}`, { credentials: 'include' })).json();
}

export async function createProduct(product) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(product)
    })).json();
}

export async function editProduct(id, product) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/edit/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(product)
    })).json();
}


export async function activateSell(id) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/enable/${id}`)).json()
}

export async function archiveSell(id) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/archive/${id}`)).json()
}

export async function wishProduct(id) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/products/wish/${id}`, { credentials: 'include' })).json();
}


