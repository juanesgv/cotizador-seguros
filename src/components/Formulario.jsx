import React, { Fragment} from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {

  const { datos,handleChangeDatos, error,setError } = useCotizador() 

  const handleSubmit = e =>{
    e.preventDefault()

    if(Object.values(datos).includes('')){
      setError('Todos los campos son obligatorios')
      return;
    }

    setError('')
  }

  return (
    <>
      {error && <Error/>}
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Marca
          </label>
          <select name='marca' className='w-full p-3 bg-white border border-gray-200' value={datos.marca} onChange={e => handleChangeDatos(e)}>
            <option value="">--Selecciona una marca--</option>
            {MARCAS.map(m => (
              <option key={m.id} value={m.id}>
                {m.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Año
          </label>
          <select name='year' className='w-full p-3 bg-white border border-gray-200' value={datos.year} onChange={e => handleChangeDatos(e)}>
            <option value="">--Selecciona un año--</option>
            {YEARS.map(y => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Elige un plan
          </label>
          <div className='flex gap-3 items-center'>
            {PLANES.map(p => (
              <Fragment key={p.id}>
                <label>{p.nombre}</label>
                <input
                  type='radio'
                  onChange={e => handleChangeDatos(e)}
                  name='plan'
                  value={p.id}
                />
              </Fragment>
            ))}

          </div>
        </div>
        <input
          type='submit'
          className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-bold'
          value='Cotizar'
        />
      </form>
    </>
  )
}

export default Formulario
