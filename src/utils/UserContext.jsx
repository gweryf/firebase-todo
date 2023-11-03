import React, { createContext, useState } from "react";
export const userData = createContext({
  user: false,
});
export default function UserContext({ children }) {
  const [user, setUser] = useState(false);
  return (
    <userData.Provider value={{ user, setUser }}>{children}</userData.Provider>
  );
}
