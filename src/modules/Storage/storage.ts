import { Transacao } from "../../types/Transacao.js"

export function guardarTransacoes(transacoes: Transacao[]): void {
   localStorage.setItem('transacoes',JSON.stringify(transacoes))
}

export function carregarTransacoes(): Transacao[] {
   const dados = localStorage.getItem('transacoes')

   if (!dados){
      return []
   } 
   
   try {
      return JSON.parse(dados) as Transacao[]
   } catch {
      return []
   }
}