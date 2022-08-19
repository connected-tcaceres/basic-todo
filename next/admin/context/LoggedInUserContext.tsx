import { createContext, useState } from "react";

export const LoggedInUserContext = createContext<{
  user: null | number;
  updateUserId: (userId: number) => void;
}>({
  user: null,
  updateUserId: () => {},
});

export const LoggedInUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loggedInUser, setLoggedInUser] = useState<null | number>(null);
  const updateUserId = (userId: number) => setLoggedInUser(userId);

  const value = {
    user: loggedInUser,
    updateUserId,
  };

  return (
    <LoggedInUserContext.Provider value={value}>
      {children}
    </LoggedInUserContext.Provider>
  );
};
