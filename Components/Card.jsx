import React from "react";

export default function Card(props) {
  return (
    <div className="column is-one-quarter">
      <div className="card info-card">
        <div className="card-content">
          {props.image &&
            <figure className="image is-96x96 centered">
              <img src={props.image} alt="image"/>
            </figure>
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