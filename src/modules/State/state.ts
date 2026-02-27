import { guardarTransacoes, carregarTransacoes } from "../Storage/storage.js"
import { Transacao } from "../../types/Transacao.js"


let transacoes: Transacao[] = carregarTransacoes() || []

export function adicionarTransacao(transacao: Transacao): void {
   transacoes.push(transacao)
   guardarTransacoes(transacoes)
}

export function getTransacoes(): Transacao[] {
   return [...transacoes]
}

export function removerTransacao(id: number): void {
   transacoes = transacoes.filter(t => t.id !== id);
   guardarTransacoes(transacoes)
}