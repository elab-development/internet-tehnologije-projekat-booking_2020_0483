import React from "react";
import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToastProvider from "@/app/providers/ToastProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import getCurrentUser from "@/app/actions/getCurrentUser";
import RentModal from "@/app/components/modals/RentModal";
import SearchModal from "@/app/components/modals/SearchModal";

const inter = Nunito({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Airbnb",
    description: "Airbnb clone",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
        <body className={inter.className}>
        <ClientOnly>
            <ToastProvider/>
            <RegisterModal/>
            <LoginModal/>
            <RentModal/>
            <SearchModal/>
            <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className='pb-20 pt-28'>
            {children}
        </div>
        </body>
        </html>
    )
}