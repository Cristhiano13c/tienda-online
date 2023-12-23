import React from "react";

export const Contacto = () => {
    return (
        <div className='formulario'>
            <h1>Contacto</h1>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}