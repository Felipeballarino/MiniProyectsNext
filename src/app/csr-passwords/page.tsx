/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import SliderBar from "@/components/passwords/SliderBar";
import SwitchInput from "@/components/passwords/SwitchInput";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PasswordsPage = () => {

    const [password, setPassword] = useState<string>("")
    const [longitudPass, setLongitudPass] = useState<number>(20)

    //switcher
    const [mayusculas, setMayusculas] = useState<boolean>(true)
    const [minusculas, setMinusculas] = useState<boolean>(false)
    const [numeros, setNumeros] = useState<boolean>(true)
    const [simbolos, setSimbolos] = useState<boolean>(true)


    const [showMessage, setShowMessage] = useState(false)


    useEffect(() => {
        generatPassword()
    }, [longitudPass, mayusculas, minusculas, numeros, simbolos])


    const generatPassword = () => {
        let character = ""

        if (mayusculas) {
            character += "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
        }
        if (minusculas) {
            character += "abcdefghijklmnñopqrstuvwxyz"
        }
        if (numeros) {
            character += "123456789"
        }

        if (simbolos) {
            character += "!#$%&/()=?@"
        }


        let pass = ""

        for (let index = 0; index < longitudPass; index++) {
            pass += character.charAt(Math.floor(Math.random() * character.length))
        }



        setPassword(pass)

    }

    const copyPassword = () => {
        navigator.clipboard.writeText(password)
        setShowMessage(true)
    }



    return (
        <div className="flex items-center justify-center bg-slate-200 w-full h-screen">
            <div className="border rounded p-5 bg-white">
                <h2>Password Generate</h2>
                <hr />
                <div className="flex">
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New Password"
                        className="rounded p-2 my-2 border"
                    />
                    <button
                        onClick={copyPassword}
                        className="flex items-center text-center text-2xl justify-center p-2 w-20 cursor-pointer text-gray-400 hover:text-gray-600"><FaRegCopy /></button>
                </div>
                <SliderBar value={longitudPass} changeValue={setLongitudPass} />

                <div className="flex justify-between pb-3">
                    <SwitchInput title="Mayusculas" value={mayusculas} changeValue={setMayusculas} />
                    <SwitchInput title="Minusculas" value={minusculas} changeValue={setMinusculas} />
                </div>
                <div className="flex justify-between pb-3">
                    <SwitchInput title="Numeros" value={numeros} changeValue={setNumeros} />
                    <SwitchInput title="Simbolos" value={simbolos} changeValue={setSimbolos} />
                </div>
                <button
                    onClick={generatPassword}
                    className="w-full bg-blue-600 text-white font-medium rounded p-1">
                    Generar
                </button>
                <div className="absolute bottom-5 right-5">
                    {
                        showMessage &&
                        <p 
                        className="bg-green-500 text-white rounded w-full mt-5 mr-10 p-3 text-center flex justify-between items-center ">
                            <span>Contraseña copiada</span>
                            <button
                                onClick={() => setShowMessage(false)}
                                className=" cursor-pointer">
                                <IoMdCloseCircleOutline color="white" size={25} />
                            </button>
                        </p>
                    }
                </div>

            </div>
        </div>
    );
};

export default PasswordsPage;