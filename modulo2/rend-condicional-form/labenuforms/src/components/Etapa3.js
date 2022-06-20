import React from "react";

function Etapa3() {
    return (
      <div>
        ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO

        <ol>
            <li>
                <p>POR QUE VOCÊ NÃO TERMINOU UM CURSO DE GRADUAÇÃO?</p>
                <input></input>
            </li>
            <li>
                <p>VOCÊ FEZ ALGUM CURSO COMPLEMENTAR?</p>
                <select> 
                    <option value="Nenhum">Nenhum</option>           
                    <option value="Curso técnico">Curso Técnico</option> 
                    <option value="Curso de Inglês">Curso de Inglês</option>
                </select>
            </li>
        </ol>
  
      </div>
    );
  }
  
  export default Etapa3;