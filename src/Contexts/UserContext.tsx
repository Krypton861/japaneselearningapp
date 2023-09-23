//#region HOW TO USE THIS CONTEXT DATA
/* DOCUMENTATION:

// Accessing Data //
import { useUserContext } from './Contexts/UserContext';

function MyComponent() {
  const { userData } = useUserContext();
  return <div>{`Hello, ${userData.userName}`}</div>;
}

// Setting Data //
import { useUserContext } from './Contexts/UserContext';

function MyComponent() {
  const { setUserData } = useUserContext();

  const newUserData = {
    userId: '123',
    email: 'john@example.com'
    userName: 'John',
  };

  setUserData(newUserData);
}

// Updating Data //
import { useUserContext } from './path/to/UserContext';

function MyComponent() {
  const { userData, setUserData } = useUserContext();

  const updateEmail = (newEmail) => {
    setUserData({
      ...userData,
      email: newEmail,
    });
  };
}

//If NO USER - Set to Initial Data:
setUserData({
      userId: null,
      email: null,
      userName: null,
    });

*/
//#endregion HOW TO USE THIS CONTEXT DATA

import React, { createContext, useContext, useState } from 'react';

interface UserData {
  userId: string | null;
  email: string | null;
  userName: string | null;
  // ... other fields
}

interface UserContextProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const initialUserData: UserData = {
  userId: null,
  userName: null,
  email: null,
  // ... other fields initialized
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext  = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(initialUserData);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
