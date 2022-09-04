export async function createChatRoom(receiver, message) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/messages/createChatRoom`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({message: message, receiver: receiver})
    })).json();
}

export async function getUserConversations() {
    return (await fetch(`https://nexnotesapp.herokuapp.com/messages/getUserConversations`, { credentials: 'include' })).json();
}

export async function sendMessage(chatId, message) {
    return (await fetch(`https://nexnotesapp.herokuapp.com/messages/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({chatId, message})
    })).json();
}
