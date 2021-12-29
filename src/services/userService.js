import { storageService } from "./storageService.js"
import { utilService } from "./utilService"
export const userService = {
    getLoggedinUser,
    login,
    signup,
    logout,
    getUsers,
    getEmptyUser,
    getUserById,
    transferCoins,
    getContacts,
    saveUser,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact
}

const demoUsers = [
    {
        _id: "a",
        username: "a",
        password: "a",
        name: "Ochoa Hyde",
        email: "ochoahyde@renovize.com",
        phone: "+1 (968) 593-3824",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a56640269f443a5d64b32ca",
        username: "Ochoa",
        password: "a",
        name: "Ochoa Hyde",
        email: "ochoahyde@renovize.com",
        phone: "+1(968) 593 - 3824",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a5664025f6ae9aa24a99fde",
        username: "Hallie",
        password: "a",
        name: "Hallie Mclean",
        email: "halliemclean @renovize.com",
        phone: "+1(948) 464 - 2888",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a56640252d6acddd183d319",
        username: "Parsons",
        password: "a",
        name: "Parsons Norris",
        email: "parsonsnorris @renovize.com",
        phone: " +1(958) 502 - 3495",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a566402ed1cf349f0b47b4d",
        username: "Rachel",
        password: "a",
        name: "Rachel Lowe",
        email: "rachellowe @renovize.com",
        phone: "+1(911) 475 - 2312",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a566402abce24c6bfe4699d",
        username: "dominique",
        password: "a",
        name: "Dominique Soto",
        email: "dominiquesoto @renovize.com",
        phone: "+1(807) 551 - 3258",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a566402a6499c1d4da9220a",
        username: "sominique",
        password: "a",
        name: "Shana Pope",
        email: "shanapope @renovize.com",
        phone: "+1(970) 527 - 3082",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a566402f90ae30e97f990db",
        username: "faulkner",
        password: "a",
        name: "Faulkner Flores",
        email: "faulknerflores @renovize.com",
        phone: "+1(952) 501 - 2678",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a5664027bae84ef280ffbdf",
        username: "holder",
        password: "a",
        name: "Holder Bean",
        email: "holderbean @renovize.com",
        phone: "+1(989) 503 - 2663",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a566402e3b846c5f6aec652",
        username: "Rosanne",
        password: "a",
        name: "Rosanne Shelton",
        email: "rosanneshelton @renovize.com",
        phone: "+1(968) 454 - 3851",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a56640272c7dcdf59c3d411",
        username: "Pamela",
        password: "a",
        name: "Pamela Nolan",
        email: "pamelanolan @renovize.com",
        phone: "+1(986) 545 - 2166",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a5664029a8dd82a6178b15f",
        username: "Roy",
        password: "a",
        name: "Roy Cantu",
        email: "roycantu @renovize.com",
        phone: "+1(929) 571 - 2295",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a5664028c096d08eeb13a8a",
        username: "Ollie",
        password: "a",
        name: "Ollie Christian",
        email: "olliechristian @renovize.com",
        phone: "+1(977) 419 - 3550",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a5664026c53582bb9ebe9d1",
        username: "Nguyen",
        password: "a",
        name: "Nguyen Walls",
        email: "nguyenwalls @renovize.com",
        phone: "+1(963) 471 - 3181",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a56640298ab77236845b82b",
        username: "Glenna",
        password: "a",
        name: "Glenna Santana",
        email: "glennasantana @renovize.com",
        phone: "+1(860) 467 - 2376",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a56640208fba3e8ecb97305",
        username: "Malone",
        password: "a",
        name: "Malone Clark",
        email: "maloneclark @renovize.com",
        phone: "+1(818) 565 - 2557",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a566402abb3146207bc4ec5",
        username: "Floyd",
        password: "a",
        name: "Floyd Rutledge",
        email: "floydrutledge @renovize.com",
        phone: "+1(807) 597 - 3629",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a56640298500fead8cb1ee5",
        username: "Grace",
        password: "a",
        name: "Grace James",
        email: "gracejames @renovize.com",
        phone: "+1(959) 525 - 2529",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a56640243427b8f8445231e",
        username: "Tanner",
        password: "a",
        name: "Tanner Gates",
        email: "tannergates @renovize.com",
        phone: " +1(978) 591 - 2291",
        coins: 100,
        moves: [],
        contacts: []
    },
    {
        _id: "5a5664025c3abdad6f5e098c",
        username: "Lilly",
        password: "a",
        name: "Lilly Conner",
        email: "lillyconner @renovize.com",
        phone: "+1(842) 587 - 3812",
        coins: 100,
        moves: [],
        contacts: []
    }
];

function getLoggedinUser() {
    let loggedinUser = JSON.parse(sessionStorage.getItem('loggedinUser'))
    if (!loggedinUser) {
        loggedinUser = getUsers()[0]
        if (!loggedinUser.contacts.length) loggedinUser.contacts = _getContacts(loggedinUser)
        sessionStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))
    }
    return loggedinUser
}

function getUsers() {
    let users = storageService.load('users')
    if (!users) {
        users = demoUsers
        storageService.store('users', users)
    }
    return users
}

function signup(user) {
    user._id = utilService.makeId()
    if (!user.contacts.length) user.contacts = _getContacts(user)
    let users = storageService.load('users')
    if (!users) users = []
    users.push(user)
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    storageService.store('users', users)
    users.push(user)
}

function login(user) {
    const users = storageService.load('users')
    if (users) {
        const storedUser = users.find(currUser => currUser.username === user.username && currUser.password === user.password)
        if (!storedUser.contacts.length) storedUser.contacts = _getContacts(user)
        if (storedUser) {
            sessionStorage.setItem('loggedinUser', JSON.stringify(storedUser))
            return true
        }
    }
    return false
}

function logout() {
    return sessionStorage.removeItem('loggedinUser')
}

function transferCoins(amount, toContactId) {
    const user = getLoggedinUser()
    amount = parseInt(amount)
    user.coins -= amount
    if (user.coins < 0) {
        user.coins += amount
        return Promise.reject()
    }
    user.moves.push({
        toId: toContactId,
        at: Date.now(),
        amount
    })
    let toUser = getUserById(toContactId)
    if (toUser) {
        toUser.coins += amount
        saveUser(toUser)
    }
    saveUser(user)
    return Promise.resolve(user)
}

function saveUser(user) {
    console.log(user)
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    let users = getUsers()
    const idx = users.findIndex(currUser => currUser._id === user._id)
    users.splice(idx, 1, user)
    storageService.store('users', users)
}

function getEmptyUser() {
    return {
        name: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        coins: 100
    }
}

function getUserById(id) {
    const users = getUsers()
    let user = users.find(user => user._id === id)
    user.coins = +user.coins
    return user
}


//------------CONTACTS-------------//
function getContacts(filterBy = null) {
    return new Promise((resolve, reject) => {
        const loggedinUser = getLoggedinUser()
        var contactsToReturn = loggedinUser.contacts;
        if (filterBy && filterBy.name) {
            contactsToReturn = filter(filterBy.name)
        }
        resolve(sort(contactsToReturn))
    })
}

function getContactById(id) {
    return new Promise((resolve, reject) => {
        const loggedinUser = getLoggedinUser()
        const contact = loggedinUser.contacts.find(contact => contact._id === id)
        contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
    let loggedinUser = getLoggedinUser()
    return new Promise((resolve, reject) => {
        const index = loggedinUser.contacts.findIndex(contact => contact._id === id)
        if (index !== -1) {
            loggedinUser.contacts.splice(index, 1)
        }
        saveUser(loggedinUser)
        resolve(loggedinUser)
    })
}

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

function _updateContact(contact) {
    let loggedinUser = getLoggedinUser()
    return new Promise((resolve, reject) => {
        const index = loggedinUser.contacts.findIndex(c => contact._id === c._id)
        if (index !== -1) {
            loggedinUser.contacts[index] = contact
        }
        saveUser(loggedinUser)
        resolve(loggedinUser)
    })
}

function _addContact(contact) {
    let loggedinUser = getLoggedinUser()
    return new Promise((resolve, reject) => {
        contact._id = utilService.makeId()
        console.log(contact._id)
        loggedinUser.contacts.unshift(contact)
        saveUser(loggedinUser)
        resolve(loggedinUser)
    })
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

function filter(name) {
    name = name.toLocaleLowerCase()
    return getLoggedinUser().contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(name) ||
            contact.phone.toLocaleLowerCase().includes(name) ||
            contact.email.toLocaleLowerCase().includes(name)
    })
}

function _getContacts(user) {
    console.log(demoUsers)
    const contacts = demoUsers.map(currUser => {
        return { _id: currUser._id, username: currUser.username, name: currUser.name, phone: currUser.phone, email: currUser.email }
    })
    return contacts.filter(contact => contact._id !== user._id)
}