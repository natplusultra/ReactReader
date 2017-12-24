import React from "react";
import "./Card.css";

const Card = props => (
    <div className={props.shadow ? "card" : "card card-no-shadow"}>
        <div className={"card-title" === "Search for Articles" || "Search Results" ? "card-content header-card" : "card-content"}>
            <span className="card-title">{props.cardTitle}</span>
            {props.cardContent}
        </div>
    </div>
)

export default Card;