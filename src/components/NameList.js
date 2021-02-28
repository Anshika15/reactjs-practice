import React from 'react'

function NameList(){
    const names = ['Anshika', 'Anshul', 'Palak', 'Shashank']

    const namelist = names.map((name, index) => <h2>{index} {name}</h2>)
    return(
        <div>
            { namelist }
        </div>
    )
}

export default NameList
