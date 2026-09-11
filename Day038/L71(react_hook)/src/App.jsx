import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
   const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input {...register('firstName',
          {
            required: true,
            minLength: {value: 3, message: "min length atleast 3"},
            maxLength: 6
          }
        )}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Middle Name: </label>
        <input {...register('middleName')}/>
      </div>
      <div>
        <label>Last Name: </label>
        <input {...register('lastName')}/>
      </div>

      <input type="submit" />
    </form>
  )
}

export default App
