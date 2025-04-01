"use client";

import React from "react";
import Link from "next/link";
import "@/public/styles/header.css"

export default function Header() {
    return (
        <header>
            <h1 className="logo">
                <Link href="#">
                Sangjun
                </Link>
            </h1>
            <nav className="gnb">
                <ul>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Works</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
