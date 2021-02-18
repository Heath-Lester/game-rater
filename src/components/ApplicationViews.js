import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider.js"
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm.js"

export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games">
                    <GameList {...props} />
                </Route>
            </GameProvider>

            <GameProvider>
                <Route exact path="/games/new">
                    <GameForm {...props} />
                </Route>
            </GameProvider>
        </main>
    </>
}
