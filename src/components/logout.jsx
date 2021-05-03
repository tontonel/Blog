import React from 'react'

export default function Logout() {
    function handle () {
        window.location.href = "https://protected-temple-06423.herokuapp.com/api/logout"
    }
    return (
        <div>
            <button onClick = {handle}>Logout</button>
        </div>
    )
}
