import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {

    const [ games, setGames ] = useState([])

    const [ game, setGame ] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }

    const getGame = (gameId) => {
        return fetch(`http://localhost:8000/games/${gameId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setGame)
    }

    const createGame = (game) => {
        return fetch("http://localhost:8000/games", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(game)
        })
            .then(response => response.json())
            .then(getGames)
    }
    

    return (
        <GameContext.Provider value={{ games, getGames, game, getGame, createGame }} >
            { props.children }
        </GameContext.Provider>
    )
}