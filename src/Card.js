import React from 'react';

const Card = ({ name, email, id}) => {   //quicker version of (props) and then const {name, email,id} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?set=set2`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        
    );
}

export default Card;