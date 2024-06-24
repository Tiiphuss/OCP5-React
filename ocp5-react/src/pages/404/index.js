import React from "react"
import '../../styles/404.scss'

function E404() {
    return (
        <main>
            <h1 className="E404">404</h1>
            <p className="texte">Oups! La page que vous demandez n'existe pas.</p> 
            <a className="redirection" href="http://localhost:3000/">Retourner sur la page d’accueil</a>                           
        </main>
    )
}

export default E404