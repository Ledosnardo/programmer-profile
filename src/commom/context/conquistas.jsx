import { createContext, useContext, useState } from "react";
import conquistasJson from '../../json/conquistas.json';


export const ConquistasContext = createContext();
ConquistasContext.displayName = 'Conquistas';

export function ConquistasProvider ({ children }){
    const [ conquistas, setConquistas ] = useState(conquistasJson)

    function atualizatConquistas( conquista ){    
        const conquistaAlterada = conquistas.find(conq => conq.nome === conquista.nome);
        const indexConquistaAlterada = conquistas.indexOf(conquistaAlterada);
        const inicioConquistas = conquistas.slice(0, indexConquistaAlterada);
        const finalConquistas = conquistas.slice(indexConquistaAlterada + 1)
    
        
        conquista.On = !conquista.On;
        setConquistas([...inicioConquistas, conquista, ...finalConquistas])
    }

    return(
        <ConquistasContext.Provider value={{ conquistas, setConquistas, atualizatConquistas }}>
            {children}
        </ConquistasContext.Provider>
    )
}

