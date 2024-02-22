import React from 'react';
import './LoginForm.css';


const LoginForm = () => {
    return (
        <div className='wrapper'>
            <h1>bizz</h1>

            <form action=''>

                <h2>iniciar sesión</h2>

                <button className='google-button' type='google'>Con Google</button>

                <h3>O con correo electrónico</h3>

                <div className="input-box">
                    <input type="text" placeholder='Su correo' required />
                </div>

                <div className="input-box">
                    <input type="password" placeholder='contraseña' required />
                </div>
                   
                <button className='submit-button' type='submit'>Entrar</button>
                
               <div className='register-link'>
                <p> <a href='#'>Nuevo bee</a>  Registro</p>

               </div>









            </form>
        </div>

    );
};

export default LoginForm;