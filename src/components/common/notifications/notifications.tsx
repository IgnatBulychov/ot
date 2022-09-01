import { useState } from "react";

import { createContext, useContext } from "react";

export type NotificationType = {
  type: "error" | "success";
  text: string;
};

type notificationsFunctions = {
  notify: (notification: NotificationType) => void;
};
const NotificationsContext = createContext({} as notificationsFunctions);

type Props = {
  children: JSX.Element;
};

export const NotificationsProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState(
    [] as Array<NotificationType>
  );

  const notify = (notification: NotificationType): void => {
    setNotifications((prevNotifications) => {
      return [notification, ...prevNotifications];
    });
  };

  const remove = (key: number): void => {
    setNotifications(
      notifications.filter((_notification, index) => index !== key)
    );
  };

  return (
    <NotificationsContext.Provider value={{ notify }}>
      <div className="fixed w-auto right-4 top-4 z-10">
        {notifications.map((notification, i) => {
          return (
            <div
              onClick={() => remove(i)}
              className={`${
                notification.type === "error" ? "bg-red-500" : "bg-green-500"
              } text-gray-50 p-3 rounded mb-2 cursor-pointer`}
              key={i}
            >
              {notification.text}
            </div>
          );
        })}
      </div>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
