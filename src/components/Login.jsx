import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { heroBackground } from "../assets"; // Assuming the heroBackground image is imported correctly
import { loginUi } from '../assets';
import { SelectifyLogo } from "../assets"

function Login({ setToken }) {
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm();
  const [error, setError] = useState('');

  // Hardcoded login validation
  const login = async (data) => {
    console.log('data', data);
    setError('');

    // Hardcode username and password
    const hardcodedEmail = 'deekshadinesh@gmail.com';
    const hardcodedPassword = 'password';

    // Compare input data with hardcoded credentials
    if (data.email === hardcodedEmail && data.password === hardcodedPassword) {
      console.log('Login successful!');
      // After successful login, navigate to the home page
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="h-screen w-screen">
      <div
        className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
        style={{
          background: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -1,
        }}
      ></div>

      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-2/3 bg-black bg-opacity-60 sm:mx-0" style={{ height: '500px' }}>
          <div className="flex flex-col w-full md:w-2/3 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="mx-auto">
                <img src={SelectifyLogo} width={190} height={40} alt="Selectify" />
              </h1>
              
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="w-full mt-4">
                <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleSubmit(login)}>
                  <div className="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      placeholder="Email"
                      {...register('email', {
                        required: 'Email is required',
                        validate: {
                          matchPattern: (value) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email address must be a valid address',
                        },
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      placeholder="Password"
                      {...register('password', {
                        required: 'Password is required',
                      })}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-2"
                      {...register('rememberMe')}
                    />
                    <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      style={{ backgroundColor: '#BE71D3' }}
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a className="no-underline hover:underline text-blue-dark text-xs" href="#">
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side background image */}
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg"
            style={{
              background: `url(${loginUi})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
