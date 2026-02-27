import { Transacao } from "../../types/Transacao.js"
import { Totais } from "../../types/Totais.js"

export function calcularTotais(transacoes: Transacao[]): Totais{
   const totais = transacoes.reduce((acc,transacao)=>{
      if (transacao.tipo === 'receita'){
         acc.receita += transacao.valor
      } else if (transacao.tipo === 'despesa'){
         acc.despesa += transacao.valor
      }
      return acc
   },{ receita:0, despesa:0 }) 

   let saldo = totais.receita - totais.despesa

   return {
      total: saldo, 
      totalReceita: totais.receita, 
      totalDespesa: totais.despesa
   }
}