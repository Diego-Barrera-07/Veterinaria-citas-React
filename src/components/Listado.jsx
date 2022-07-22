import Paciente from "./Paciente";

const Listado = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length !== 0 ? (
        <>
          <h2 className="text-2xl text-center font-bold">Listado pacientes</h2>
          <p className="text-xl text-center">
            Administra tus{" "}
            <span className="text-red-500 font-bold">Pacientes y citas</span>
          </p>
          <div className="h-screen overflow-y-scroll">
            {pacientes.map((paciente, idx) => (
              <Paciente
                key={idx}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl text-center font-bold">
            No hay pacientes registrados
          </h2>
          <p className="text-xl text-center">
            Comienza agregando tus{" "}
            <span className="text-red-500 font-bold">Pacientes y citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Listado;
