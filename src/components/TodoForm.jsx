import { useState } from "react";
import { useTarefaStore } from "../store/useTarefaStore";


export default function TodoForm() {
  const [titulo, setTitulo] = useState('')
  const [enviando, setEnviando] = useState(false)
  const adicionarTarefa = useTarefaStore((estado) => estado.adicionarTarefas)

  async function aoEnviar(evento) {
    evento.preventDefault()

    if (!titulo.trim() || enviando) return

    setEnviando(true)
    await adicionarTarefa(titulo)
    setTitulo('')
    setEnviando(false)
    
  }
return (

    <form className="formulario-tarefa" onSubmit={aoEnviar}>
        <input 
        type="text"
        className="formulario_tarefa__input"
        placeholder="O que voce precisa fazer?"
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
        aria-label="Titulo da nova tarefa"/>

        <button
        type="submit"
        className="formulario_tarefa__botao"
        disabled= {!titulo.trim() || enviando}>
            {enviando ? 'Adicionando...' : 'Adicionar'}
            
        </button>
    </form>
    
)
}