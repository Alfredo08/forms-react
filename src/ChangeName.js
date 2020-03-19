import React from 'react';

function ChangeName( props ){

    return (
        <div>
            <form onSubmit={( event ) => props.changeName(event)}>
            <label htmlFor="changeName">
                Change the name :
            </label>
            <input type="text" id="changeName" name="newName" />
            <button type="submit">
                Change
            </button>
            </form>
            <div>
                {props.name}
            </div>
        </div>
    )
}


export default ChangeName;