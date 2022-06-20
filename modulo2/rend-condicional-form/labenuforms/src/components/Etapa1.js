import React from "react";

function Etapa1() {
    return (
      <div>
        ETAPA 1 - DADOS GERAIS

        <ol>
            <li>
                <p>QUAL SEU NOME?</p>
                <input></input>
            </li>
            <li>
                <p>QUAL SUA IDADE?</p>
                <input></input>
            </li>
            <li>
                <p>QUAL SEU EMAIL?</p>
                <input></input>
            </li>
            <li>
                <p>QUAL SUA ESCOLARIDADE?</p>
                <select> 
                    <option value="Ensino Medio Incompleto">Ensino Médio Incompleto</option> 
                    <option value="Ensino Medio Completo">Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>                    
                </select>
            </li>
        </ol>
  
      </div>
    );
  }
  
  export default Etapa1;
  