import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(credentials: SignInProps): Promise<void>;
  signOut(): void;
}

interface SignInProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('@App:user');
    const token = localStorage.getItem('@App:token');

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  const signIn = async ({ email, password }: SignInProps) => {
    const response = await api.post('/auth/login', { email, password });

    setUser(response.data.user);
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
