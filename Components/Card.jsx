import React from "react";

export default function Card(props) {
    return (
        <div className="column is-one-quarter">
            <div className="card info-card">
                <div className="card-content">
                    {props.image &&
                        <div className="columns is-centered">
                            <figure class="image is-128x128">
                                <img src={props.image} alt="image"/>
                            </figure>
                        </div>
                    }
                    <p className="title is-4 has-text-centered">
                        {props.title}
                    </p>
                    <hr/>
                    <div className="content has-text-centered">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}