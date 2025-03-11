import React from 'react';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = React.useState(() => {
        const storedToken = localStorage.getItem("token");
        return storedToken ? storedToken : null;
    });

    const login = (token) => {
        setUserToken(token);
        localStorage.setItem("token", JSON.stringify(token));
    };

    const logout = () => {
        setUserToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ userToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
