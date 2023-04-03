import { createContext, useContext, useState } from "react";

export const DiasProgrammerContext = createContext('');
DiasProgrammerContext.displayName = 'Dias de programador';

export function DiasProgrammerProvider ({ children }){
    const [ diaComeco, setDiaComeco ] = useState('2022-11-15');

    const diaPadrao = CalculoDias();
    const [ diasProgrammer, setDiasProgrammer ] = useState(diaPadrao);
    
    function CalculoDias() {    
        const diaComecoDate = new Date(diaComeco);    
        const agr = new Date();

        const tempoUmDia = 1000 * 60 * 60 * 24;
        const diff = Math.abs(agr - diaComecoDate);
        const dias = Math.round(diff / tempoUmDia);
    
        return dias
    }
    return(
        <DiasProgrammerContext.Provider value={{ diaComeco, setDiaComeco, diasProgrammer, setDiasProgrammer, CalculoDias }}>
            {children}
        </DiasProgrammerContext.Provider>
    )
}


