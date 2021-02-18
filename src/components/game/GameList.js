import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    debugger 

    useEffect(() => {
        getGames()
        // getCategories()
    }, [])

    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    props.history.push({ pathname: "/games/new" })
                }}>Register New Game
            </button>

            <article className="games">
                {
                    games.map(game => {
                        return <section key={`game--${game.id}`} className="game">
                            <div className="game__title">{game.title}</div>
                            <div className="game__description">{game.description}</div>
                            <div className="game__yearReleased">Released in {game.year_released}</div>
                            <div className="game__players">{game.number_of_players} players</div>
                            <div className="game__estimatedTime">Time: {game.estimated_time}</div>
                            <div className="game__ageRecommendation">Age Recommendation: {game.age_recommendation}</div>
                            {/* {
                                categories.map(categoryId => {
                                    foundCategory = allCategories.find(c.id = categoryId)
                                    return <div className="game__category">{foundCategory.label}</div>
                                })
                            } */}
                        </section>
                    })
                }
            </article>
        </>
    )
}