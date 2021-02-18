import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from 'react-router-dom'


export const GameForm = () => {
    const history = useHistory()

    const { createGame, getGames } = useContext(GameContext)

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        title: "",
        description: "",
        yearReleased: null,
        numberOfPlayers: null,
        estimatedTime: "",
        ageRecommendation: null,
        // categories: 0
    })

    useEffect(() => {
        // getCategories()
    }, [])


    const changeGameState = (domEvent) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[domEvent.target.name] = domEvent.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="yearReleased">Year Released: </label>
                    <input type="text" name="yearReleased" required className="form-control"
                        value={currentGame.yearReleased}
                        onChange={changeGameState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input type="text" name="numberOfPlayers" required className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={changeGameState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="estimatedTime">Estimated Time: </label>
                    <input type="time" id="estimatedTime" required className="form-control"
                        name="estimatedTime"
                        prototype="estimatedTime"
                        defaultValue={currentGame.estimatedTime}
                        onChange={changeGameState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ageRecommendation">Recommended Age: </label>
                    <input type="text" name="ageRecommendation" required className="form-control"
                        value={currentGame.ageRecommendation}
                        onChange={changeGameState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select name="category" className="form-control"
                        value={currentGame.category}
                        onChange={changeGameState}>
                        <option name="" value="0">Select a Category...</option>
                        {/* {
                            categories.map(c => (
                                <option name={c.id} value={c.id}>{c.label}</option>
                            ))
                        } */}
                    </select>
                </div>

                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()
                        console.log(currentGame)
                        const game = {
                            ageRecommendation: 0,
                            title: currentGame.title,
                            description: currentGame.description,
                            yearReleased: currentGame.yearReleased,
                            estimatedTime: currentGame.estimatedTime,
                            numberOfPlayers: parseInt(currentGame.numberOfPlayers)
                        }

                        createGame(game)
                            .then(() => history.push("/"))
                    }}
                    className="btn btn-2 btn-primary">Create</button>
            </fieldset>
        </form>
    )
}