import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card-img-top">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="card-body">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Position:</strong> {props.position}
                    </li>
                    <li>
                        <strong>Number:</strong> {props.number}
                    </li>
                    <li>
                        <strong>Height:</strong> {props.height} cm
                    </li>
                    <li>
                        <strong>School:</strong> {props.school}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;