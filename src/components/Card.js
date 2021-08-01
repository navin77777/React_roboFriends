import React from 'react';

const card = ({ name, email, id }) => {

    return (
        <div className="tc bg-light-green dib br3 pa3 mr3 mt3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default card;