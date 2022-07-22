const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente
    return ( 
        <div className="mx-3 mt-2 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {' '}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-8">
            <button type="button"
                className="py-2 px-10 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 cursor-pointer"
                onClick={() => setPaciente(paciente)}
            >
                Editar
            </button>
            <button type="button"
                className="py-2 px-10 text-white bg-red-600 rounded-lg hover:bg-red-500 cursor-pointer"
                onClick={() => eliminarPaciente(id)}
            >
                Elimnar
            </button>
        </div>
    </div>
    )
}
 
export default Paciente;