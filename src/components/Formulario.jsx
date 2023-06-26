const Formulario = () =>{
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Registra paciente</h2>
      
      <p className="text-center mt-5 text-lg mb-10">Añade pacientes y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form className="bg-white shadow-md mx-auto rounded-lg py-10 px-5">
        <div>
          <label htmlFor="mascota" className="block text-gray-800 font-bold" >Nombre de la mascota</label>
          <input id="mascota"className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md" type="text" placeholder="Escribe el nombre"/>
        </div>
      </form>
      
    </div>
  )
}

export default Formulario
