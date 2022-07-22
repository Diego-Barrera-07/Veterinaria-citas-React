import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    // Se activa al cargar todos los datos del paciente
    useEffect(() => {
        if ( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        } 
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const date =  Date.now().toString(26)

        return random + date
    }

    // Agregar paciente

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return;
        } 
        
        setError(false)

        const objetoPaciente = {nombre, propietario, email, fecha, sintomas}


        if(paciente.id){
            objetoPaciente.id = paciente.id
           
            // Con map creamos un nuevo array de esta manera hacemos los ajustes en el paciente
            // que tenga un id igual al paciente que vamos a editar
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                 paciente.id ? objetoPaciente : pacienteState)
               
            setPacientes(pacientesActualizados)
            setPaciente({})
                 

        } else {
        // Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])

        }

        // Reiniciar form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }


    return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="text-2xl text-center font-bold">Formulario</h2>
        <p className="text-xl text-center">Añade pacientes y{' '}<span className="text-red-500 font-bold">Administralos</span></p>
        <form action="" 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg mt-2 mb-8 py-10 px-5">
            {error && <Error>Todos los campos son obligatorios</Error>}
            <div>
                <label htmlFor="petName" className="block font-semibold text-gray-700 uppercase">Nombre de mascota</label>
                <input type="text" 
                id="petName"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg
                focus:outline-none"
                placeholder="Escribe el nombre de la mascota"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                <label htmlFor="ownerName" className="block font-semibold text-gray-700 uppercase">Nombre del propietario</label>
                <input type="text" 
                id="ownerName"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg
                focus:outline-none"
                placeholder="Escribe el nombre del propietario"
                value={propietario}
                onChange={(e) => setPropietario(e.target.value)}
                />
                <label htmlFor="ownerEmail" className="block font-semibold text-gray-700 uppercase">Email</label>
                <input type="email" 
                id="ownerEmail"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg
                focus:outline-none"
                placeholder="Escribe la dirección de correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="alta" className="block font-semibold text-gray-700 uppercase">Alta</label>
                <input type="date" 
                name=""
                id="alta"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg
                focus:outline-none"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                />
                <label htmlFor="ownerEmail" className="block font-semibold text-gray-700 uppercase">Síntomas</label>
                <textarea 
                name="" 
                id="" 
                className="border-2 w-full h-30 p-2 mt-2 placeholder-gray-400 rounded-lg resize-none
                focus:outline-none"
                placeholder="Describe los sintomas de la mascota"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                />
                <input type="submit" 
                className="w-full text-xl p-3 bg-red-600 text-white text-center rounded-lg mt-5 font-semibold
                hover:bg-red-400 cursor-pointer" 
                value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                />

            </div>
         </form>
    </div>
    )
}

export default Formulario