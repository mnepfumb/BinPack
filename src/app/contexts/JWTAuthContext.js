import React, { createContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'app/api/axios.js';
import { MatxLoading } from 'app/components';

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false
    }

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } else {
        localStorage.removeItem('accessToken')
        delete axios.defaults.headers.common.Authorization
    }
}

// const removeSession = () => {
//         localStorage.removeItem('accessToken')
//         delete axios.defaults.headers.common.Authorization
// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => { },
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async (accessToken, user) => {
        // 
        // ////console.log("login: " + email+ " " + password);
        // // 
        // const response = await axios.post('/auth', {
        //     email,
        //     password,
        // })
        // const { accessToken, user } = response.data

        // 
        // ////console.log("response.data: " + response.data);
        // ////console.log("accessToken: " + accessToken);
        // ////console.log("user: " + user);
        // ////console.log("user: " + response.data.user.email);
        // 

        setSession(accessToken)

        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        })
        return true;
    }

    const register = async (email, username, password) => {
        const response = await axios.post('/users', {
            email,
            password,
            headers: { 
                'Content-Type': 'application/json', 
            },
        })

        const { accessToken, user } = response.data

        setSession(accessToken)

        dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        })
    }

    const logout = async () => {
        setSession(null)
        const response = await axios.post('/auth/logout', {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        console.log("LOGOUT response: " + response);
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        ; (async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken')
                ////console.log("isValidToken-accessToken: " + accessToken);
                
                if (accessToken && isValidToken(accessToken)) {
                    setSession(accessToken)

                    ////console.log("isValidToken-accessToken: " + accessToken);

                    const response = await axios.get('/auth/refresh',{
                        
                        headers: { 
                            'Content-Type': 'application/json',
                            // Authorization: `Bearer ${accessToken}` 
                        },
                        crossDomain: true,
                        Authorization: `Bearer ${accessToken}`,
                        withCredentials: true
                    });
                    
                    // ////console.log("response: " + response.data);

                    const { user } = response.data
                    ////console.log("/refresh: " + user);

                    ////console.log("isValidToken-user: " + user);

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
