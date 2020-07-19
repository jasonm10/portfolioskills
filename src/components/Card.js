import React from 'react';

const Card = ({ name, criteria, id }) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='random' src={`https://picsum.photos/id/${id}/200`} />
            <div>
                <h2>{name}</h2>
                <p>Length: {criteria}</p>
            </div>
        </div >

    );
}

export default Card;