import React from 'react'
import Header from '../../components/shared/header/Header.js'
import BoardBoard from '../../components/boardBoard/BoardBoard.js'

export default function Board() {
    return (
        <div className="screen">
            <Header />
            <BoardBoard />
        </div>
    )
}