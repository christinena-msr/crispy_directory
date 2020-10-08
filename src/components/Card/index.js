import React from "react";

function Card(props) {
    return (
        <div className="box">
            <figure className="card-image is-1by1">
                <img alt={props.character.name} src={props.character.url} />
            </figure>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.character.name}
                    </li>
                    <li>
                        <strong>Position:</strong> {props.character.position}
                    </li>
                    <li>
                        <strong>Number:</strong> {props.character.number}
                    </li>
                    <li>
                        <strong>Height:</strong> {props.character.height} cm
                    </li>
                    <li>
                        <strong>School:</strong> {props.character.school}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;