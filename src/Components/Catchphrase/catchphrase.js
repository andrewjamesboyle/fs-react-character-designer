import React from 'react';

export default function Catchphrase({ handleCatchphrase }) {
    return (
        <div>
            <label>ADD A CATCHPHRASE</label>
            <input value={catchphrase} ></input>
        </div>
    )
}