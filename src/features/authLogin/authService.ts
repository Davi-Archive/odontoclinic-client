import axios from 'axios'

const API_URL = 'http://localhost:3001/api/user/'


//Register User
const registerService = async (userData: object) => {
    const res = await axios.post(API_URL + 'register', userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    console.log(res.data)
    return res.data
}


// Login User
const loginService = async (userData: object) => {
    const res = await axios.post(API_URL + 'login', userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    console.log(res.data)
}

// Get user Data
const getUserService = async (userId: string) => {
    const res = await axios.post(API_URL + 'me')
}

//logout user
const logoutService = async () => {
    localStorage.removeItem('user')
}

export {
    registerService,
    logoutService,
    loginService,
    getUserService
}