"use client";

import React from "react";
import TextHover from "./TextHover";
import Link from "next/link";
import "@/public/styles/header.css"

export default function Header() {
    return (
        <header>
            <h1 className="logo">
                <Link href="#">
                    <TextHover text="LEESANGJUN"/>
                </Link>
            </h1>
            <nav className="gnb">
                <ul>
                    <li>
                        <Link href="#">
                            <TextHover text="About"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <TextHover text="Works"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <TextHover text="Contact"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
