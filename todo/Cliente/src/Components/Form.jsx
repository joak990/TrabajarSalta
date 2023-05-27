import React, { useState } from 'react';
import { getalljobs, postJobs } from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [form, setForm] = useState({
    Mensaje: '',
    EmailTelefono: ''
  });
  const [errorMensaje, setErrorMensaje] = useState('');
  const [errors, setErrors] = useState('');
  const [caracteresEscritos, setCaracteresEscritos] = useState(0);
  const limiteCaracteres = 450;
  const limiteEmailTelefono = 22;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validarFormulario = () => {
    let isValid = true;

    if (form.Mensaje.trim() === '') {
      setErrorMensaje('El mensaje es requerido');
      isValid = false;
    } else if (form.Mensaje.trim().length > limiteCaracteres) {
      setErrorMensaje('El mensaje no puede superar los 450 caracteres');
      isValid = false;
    } else {
      setErrorMensaje('');
    }

    if (form.EmailTelefono.trim() === '') {
      setErrors('El teléfono o email de contacto es requerido');
      isValid = false;
    } else if (form.EmailTelefono.trim().length > limiteEmailTelefono) {
      setErrors('El teléfono o email de contacto no puede superar los 22 caracteres');
      isValid = false;
    } else {
      setErrors('');
    }

    return isValid;
  };

  const handleMensajeChange = (e) => {
    const mensaje = e.target.value;
    if (mensaje.length <= limiteCaracteres) {
      setForm({ ...form, Mensaje: mensaje });
      setCaracteresEscritos(mensaje.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validarFormulario();

    if (isValid) {
      dispatch(postJobs(form));
      alert('El formulario se ha enviado correctamente.');
      navigate('/');
      dispatch(getalljobs())

    }
    setForm({
      Mensaje: '',
      EmailTelefono: ''
    });
    setCaracteresEscritos(0);
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold text-center mt-8 mb-4">
          ¡Buscas Personal? ¡Completa el formulario ! 💼👨‍💼
        </h1>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="mensaje" className="block font-bold mb-2">
              Mensaje:
            </label>
            <textarea
              name="Mensaje"
              id="mensaje"
              value={form.Mensaje}
              onChange={handleMensajeChange}
              className={`w-full h-32 border rounded-md py-2 px-3 ${errorMensaje && 'border-red-500'}`}
            ></textarea>
            {errorMensaje && <p className="text-red-500">{errorMensaje}</p>}
            <p className="text-sm text-gray-500">
              Caracteres escritos: {caracteresEscritos}/{limiteCaracteres}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block font-bold mb-2">
              Teléfono o email de contacto:
            </label>
            <input
              name="EmailTelefono"
              type="text"
              id="telefono"
              value={form.EmailTelefono}
              onChange={(e) => setForm({ ...form, EmailTelefono: e.target.value })}
              className={`w-full border rounded-md py-2 px-3 ${errors && 'border-red-500'}`}
            />
            {errors && <p className="text-red-500">{errors}</p>}
            <p className="text-sm text-gray-500">
              Caracteres escritos: {form.EmailTelefono.length}/{limiteEmailTelefono}
            </p>
          </div>
          <div className="flex justify-center items-center mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-2xl"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;