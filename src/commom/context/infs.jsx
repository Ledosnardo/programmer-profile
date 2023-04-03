import { createContext, useState } from "react";
import { DiasProgrammerProvider } from "./diasDeProgramador";
import conquistasJson from '../../json/conquistas.json';
import { ConquistasProvider } from "./conquistas";


export const InformacoesContext = createContext();
InformacoesContext.displayName = 'Infomações Usuario';

export function InformacoesProvider ({ children }){

    const [ nome, setNome ] = useState('Leonardo Atanasio Rodrigues');
    const [ descricao, setDescricao ] = useState('Sou um programador Full Stack Junior á procura do seu primeiro emprego.');
    const [ fotoPerfil, setFotoPerfil ] = useState('https://github.com/Ledosnardo.png');

    return(
        <InformacoesContext.Provider value={{ nome, setNome, descricao, setDescricao, fotoPerfil, setFotoPerfil }}>
            <DiasProgrammerProvider>
                <ConquistasProvider>
                    {children}
                </ConquistasProvider>
            </DiasProgrammerProvider>
        </InformacoesContext.Provider>
    )
}