import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario
        console.log('Datos del formulario:', formData);
        // Puedes agregar lógica adicional, como enviar los datos a un servidor o realizar otras acciones necesarias.
    };

    return (
        <div className='formulario'>
            <Container>
                <h2>Contacto</h2>
                <Form onSubmit={handleSubmit} className='formulario'>
                    <p>Envíanos tus comentarios</p>
                    <Form.Group className="mb-3 label" controlId="formNombre">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className='input'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 label" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='input'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 label" controlId="formMensaje">
                        <Form.Label>Mensaje:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Escribe tu mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className='input'
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='btn'> 
                        Enviar
                    </Button>
                </Form>
            </Container>
        </div>

    );
};

export default Contacto;
