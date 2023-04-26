import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase/config';
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import './Productos.css';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'productos'));
        //Creamos una consulta de la collección "productos". 

        //onSnapshot es una función que escucha los cambios en la consulta.     
        //en onSnapShot se le pasa una función que se ejecuta cuando hay cambios, en este caso se recibe un querySnapShot que es un objeto con info.
        const unsubscribe = onSnapshot(q, function (querySnapshot) {
            const docs = [];
            querySnapshot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setProductos(docs);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleComprar = (id, stock) => {
        if (stock > 0) {
            const productoRef = doc(db, 'productos', id);
            updateDoc(productoRef, {
                stock: stock - 1,
            })
            //updateDoc me actualiza el documento. 
                .then(() => {
                    console.log("El stock del producto ha sido actualizado exitosamente.");
                })
                .catch((error) => {
                    console.error("Error al actualizar el stock del producto:", error);
                });
        }
    };

    return (
        <div className="productos">
            {productos.map((producto) => (
                <div key={producto.id} className="producto">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>Stock: {producto.stock}</p>
                    <button onClick={() => handleComprar(producto.id, producto.stock)}>Comprar</button>
                </div>
            ))}
        </div>
    );
};

export default Productos;