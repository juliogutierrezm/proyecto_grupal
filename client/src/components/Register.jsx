import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { nombre, contraseña, correo } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (nombre !== "" && contraseña !== "" && correo !== "") {
      const Usuario = {
        nombre,
        correo,
        contraseña,
      };
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:8080/register",
          Usuario
        );
        const { data } = response;
        setMensaje(data.mensaje);
        setInputs({ nombre: "", contraseña: "", correo: "" });
        if (data.mensaje.includes("successfully")) {
          setTimeout(() => {
            setMensaje("");
            navigate("/");
          }, 1500);
        } else {
          setLoading(false); // Evitar la redirección en caso de registro fallido
        }
      } catch (error) {
        console.error(error);
        setMensaje("Hubo un error");
        setTimeout(() => {
          setMensaje("");
        }, 1500);
        setLoading(false);
      }
    }
  };
  const messageClasses = mensaje
    ? mensaje.includes("successfully")
      ? "text-success !text-green-500"
      : "text-danger !text-red-500"
    : "";


  return (
    <section className="h-full ">
      <div className="container h-full ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Columna Izquierda */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div>
                      <h4 className="mb-12 mt-1 pb-1 text-xl text-black font-semibold">
                        Dojo Music App
                      </h4>
                    </div>
                    <form onSubmit={onSubmit}>
                      <p className="mb-4 text-black">
                        Please register your account
                      </p>
                      <input
                        type="text"
                        placeholder="Name"
                        className="mb-4 p-2 border  text-black border-gray-300 rounded w-full"
                        onChange={(e) => HandleChange(e)}
                        value={nombre}
                        name="nombre"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="mb-4 p-2 border text-black border-gray-300 rounded w-full"
                        onChange={(e) => HandleChange(e)}
                        value={correo}
                        name="correo"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="mb-4 p-2 border text-black border-gray-300 rounded w-full"
                        onChange={(e) => HandleChange(e)}
                        value={contraseña}
                        name="contraseña"
                      />
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <div className="w-full">
                          <div className={`mb-2 ${messageClasses}`}>
                            {mensaje}
                          </div>
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #05A9E1 0%, #041E40 100%)",
                            }}
                          >
                            Register
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6 mt-5">
                          <p className="mb-0 mr-2  text-black">
                            Do you already have an account?
                          </p>
                          <div>
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              style={{
                                background:
                                  "linear-gradient(to right, #191624, #17153E, #161452)",
                              }}
                              onClick={() => navigate("/login")}
                            >
                              Login here!
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Columna Derecha con fondo y descripción */}
                <div
                  className="flex items-center  justify-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #191624, #17153E, #161452)",
                  }}
                >
                  <div className="px-4 py-6  md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                    Unlock hidden talent, tune into discovery.
                    </h4>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
