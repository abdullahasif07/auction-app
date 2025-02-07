import React from 'react';

type UserContextType = {
  username: string | null;
  setUsername: (value: string | null) => void;
};

const UserContext = React.createContext<UserContextType>({
  username: null,
  setUsername: () => {},
});

export default UserContext;