import {useState, useEffect} from 'react'

const Component = () => {
    const [value, setValue] = useState(false)

    useEffect(
        // codeToExecute, una función
        () => {
            // como mínimo se ejecutará una vez
            console.log('El código a ejecutar')
        }, listOfDependencies
        // listOfDependencies, es un array opcional
        //  - si no se para un listOfDependencies, el codeToExecute
        //    se ejecutará cada vez que el componente se renderice
        //  - si le pasamos un array vacío [], el codeToExecute sólo 
        //    se ejecutará una vez (cuando se renderiza por primera 
        //    vez el componente)
        //  - si le pasamos [winner], el codeToExecute se ejecutará
        //    cada vez que cambie el winner
    )

}