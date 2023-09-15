import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const { correo, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/login",
          Usuario
        );
        const { data } = response;
        setMensaje(data.mensaje);
        setTimeout(() => {
          setMensaje("");
          if (data?.usuario?.token) {
            localStorage.setItem("token", data.usuario.token);
            navigate(`/`);
          }
        }, 1500);
      } catch (error) {
        console.error(error);
        setMensaje("Incorrect password");
        setTimeout(() => {
          setMensaje("");
        }, 1500);
      }
    }
  };

  const messageClasses = mensaje
    ? mensaje.includes("Incorrect ")
      ? "text-danger !text-red-500"
      : "text-success !text-green-500"
    : "";

  return (
    <section className="h-full ">
      <div className="container h-full ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Columna Izquierda */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div>
                      <h4 className="mb-12 mt-1 pb-1 text-xl  text-black font-semibold">
                       Dojo Music App
                      </h4>
                    </div>
                    {/* <!--Form-> */}
                    <form onSubmit={onSubmit}>
                      <p className="mb-4  text-black">
                        Please login to your account
                      </p>
                      {/* Input de Usuario */}
                      <input
                        type="text"
                        placeholder="Email"
                        className="mb-4 p-2 border  text-black border-gray-300 rounded  w-full"
                        name="correo"
                        value={correo}
                        onChange={HandleChange}
                      />

                      {/* Input de Contraseña */}
                      <input
                        type="password"
                        placeholder="Password"
                        className="mb-4 p-2 border  text-black border-gray-300 rounded  w-full"
                        name="contraseña"
                        value={contraseña}
                        onChange={HandleChange}
                      ></input>

                      {/* Botón de Inicio de Sesión */}
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
                            Log in
                          </button>
                        </div>
                      </div>
                      {/* Botón de Registro */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2  text-black">
                          Dont have an account?
                        </p>
                        <div>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            style={{
                              background:
                                "linear-gradient(to right, #191624, #17153E, #161452)",
                            }}
                            onClick={() => navigate("/register")}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Columna Derecha con fondo y descripción */}
                <div
                  className="flex items-center rounded-b-lg  justify-center lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #191624, #17153E, #161452)",
                  }}
                >
                  <div className="px-4 py-6 text-light md:mx-6 md:p-12">
                    <h3 className="mb-6 text-xl font-semibold">
                      We are more than just a music App
                    </h3>
                    <p>
                    Discover with us new sounds and support rising stars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
