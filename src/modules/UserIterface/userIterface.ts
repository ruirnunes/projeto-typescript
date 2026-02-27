import { calcularTotais } from "../Transactions/transactions.js";
import { Transacao } from "../../types/Transacao.js"


const listaTransacoes = document.querySelector('.lista-transacoes');

export function renderLista(
   transacoes: Transacao[],
   onRemove: (id: number) => void
): void {
   
   if (!listaTransacoes) return

   listaTransacoes.innerHTML = '';

   transacoes.forEach(t => {

      // linha da transação
      const item = document.createElement('div');
      item.classList.add('item-transacao');

      //coluna: descrição
      const nome = document.createElement('span');
      nome.classList.add('nome-transacao');
      nome.innerText = t.descricao;

      // coluna: tipo de transação
      const tipo = document.createElement('span');
      tipo.classList.add('etiqueta');
      tipo.innerText = t.tipo;

      if (t.tipo === 'receita') {
         tipo.classList.add('etiqueta-receita');
      } else {
         tipo.classList.add('etiqueta-despesa');
      }

      // coluna: data
      const data = document.createElement('span');
      data.classList.add('data-transacao');
      data.innerText = t.date;

      // coluna: valor
      const valor = document.createElement('span');
      valor.classList.add('valor-transacao');
      valor.innerText = `${t.valor} €`;

      if (t.tipo === 'receita') {
         valor.classList.add('positivo');
      } else {
         valor.classList.add('negativo');
      }

      // botão remover
      const btnRemover = document.createElement('button');
      btnRemover.classList.add('btn-remover');
      btnRemover.innerText = 'Remover';

      btnRemover.addEventListener('click',()=>{
         onRemove(t.id)   
      })

      // montar a linha
      item.appendChild(nome)
      item.appendChild(tipo)
      item.appendChild(data);
      item.appendChild(valor);
      item.appendChild(btnRemover)

      // adicionar à lista
      listaTransacoes.appendChild(item);
   });
}

export function atualizarCards(transacoes: Transacao[]): void {
   const totais = calcularTotais(transacoes)

   const valoresCards = document.querySelectorAll<HTMLDivElement>('.card .valor')
   if (valoresCards.length < 3) return
   
   const cardBalanco = valoresCards[0]
   const cardReceita = valoresCards[1]
   const cardDespesa = valoresCards[2]

   if (!cardBalanco || !cardReceita || !cardDespesa) return

   cardBalanco.innerText = `${totais.total} €`
   cardReceita.innerText = `${totais.totalReceita} €`
   cardReceita.classList.add('positivo')
   cardDespesa.innerText = `${totais.totalDespesa} €`
}

