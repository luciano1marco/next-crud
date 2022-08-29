import { useEffect, useState } from "react"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import Cliente from "../pages/core/Cliente"
import ClienteRepositorio from "../pages/core/ClienteRepositorio"
import useTabelaouForm from "./useTabelaouForm"

//------------------------------------------------------------------------------------
export default function useClientes(){
    
  const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, exibirFormulario, exibirTabela} = useTabelaouForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([]) 
  //------------------------------------------------------------------
  useEffect(obterTodos, [])

  //-------------------------------------------------------
  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  //-----------------------------------------------------
  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
    setCliente(cliente)
    exibirFormulario()
  }
  //-----------------------------------------------------
  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }
  //-----------------------------------------------------
  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }  
   //-----------------------------------------------------
  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
  } 
  //------------------------------------------------------
  return {
    
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
    tabelaVisivel,
    exibirTabela,
    obterTodos,
    cliente,
    clientes
  }

  

}