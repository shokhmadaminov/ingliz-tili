import React, { useState } from 'react'
import { MdGTranslate } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Menu() {

    return (
        <div className="container h-[100vh] flex items-center">
            <ul className="menu bg-base-200 text-2xl w-full">
                <li>
                    <Link to="todo">
                        <MdGTranslate />
                        Lug'atingizni yarating
                    </Link>
                </li>
                <li>
                    <Link to="game">
                        <IoGameController />
                        So'z o'yini
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu