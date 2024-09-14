import React, { useEffect, useState } from "react";
import GoogleLogin from "../googleLogin/GoogleLogin";
import "./style.css";
import { authStateListener } from "../googleLogin/loginService";

export const Header: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = authStateListener((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="/home" className="link-header">
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="link-header">
                DashBoard
              </a>
            </li>
            <li>
              <a href="/about" className="link-header">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li>
              {user ? (
                <GoogleLogin />
              ) : (
                <a href="/logger" className="link-header">
                  Login
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
