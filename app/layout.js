"use client";
import "./globals.css";
import React, { createContext, useState, useContext } from "react";
import { Inter, Judson } from "next/font/google";
import Nav from "@/components/Nav";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
import { AppProvider } from "@/components/AppContext";

const MainLayout = ({ children }) => {
  return (
    <AppProvider>
      <html>
        <body>
          <main className="h-screen overflow-x-hidden">
            <div className="w-full h-full radial">
              <Image
                src="/assets/background.svg"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
                className="background"
              />
              <div>
                <Nav />
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </AppProvider>
  );
};

export default MainLayout;
