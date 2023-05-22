import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(savedUser !== null ? savedUser : null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};