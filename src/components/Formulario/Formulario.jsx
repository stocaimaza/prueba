import React, { useState } from 'react';
import { db } from '../../services/firebase/config';
import { collection, addDoc } from "firebase/firestore";
import './Formulario.css'

//1) Importamos los archivos necesarios y la referencia a nuestra base de datos en firestore "db".



const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    //2)Creamos los 3 estados para trabajar con los valores del formulario. 

    //3) Creamos la función manejadora del formulario. 
    const handleSubmit = (event) => {
        event.preventDefault();

        addDoc(collection(db, 'usuarios'), {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
        })

        //AddDoc es una función que me permite agregar un documento nuevo en mi collección. 
        //collection es una función 
           
        setNombre('');
        setApellido('');
        setTelefono('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                />
            </label>
            <label>
                Apellido:
                <input
                    type="text"
                    value={apellido}
                    onChange={(event) => setApellido(event.target.value)}
                />
            </label>
            <label>
                Teléfono:
                <input
                    type="text"
                    value={telefono}
                    onChange={(event) => setTelefono(event.target.value)}
                />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;