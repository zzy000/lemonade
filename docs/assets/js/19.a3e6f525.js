(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{268:function(a,e,o){"use strict";o.r(e);var t=o(0),r=Object(t.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"mineracao-de-itemsets-frequentes"}},[a._v("Mineração de itemsets frequentes")]),a._v(" "),o("p",[a._v("O objetivo da operação Mineração de Itemsets Frequentes é encontrar todos os conjuntos de itens (itemsets) em uma transação, em que o suporte é maior ou igual a um suporte mínimo previamente estabelecido.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados de transações")]),a._v(" "),o("td",[a._v("Conjunto de itemsets frequentes, regras de associação com métricas de interesse (suporte, confiança, lift, etc.)")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Suporte mínimo")])]),a._v(" "),o("td",[a._v("É a proporção de transações em que x e y ocorrem conjuntamente na base de dados. Varia entre 0 e 1")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com transações")])]),a._v(" "),o("td",[a._v("Atributo contendo as transações da base de dados")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Confiança")])]),a._v(" "),o("td",[a._v("É a frequência de itens em x que aparece nas transações que contêm y, variando entre 0 e 1. A confiança da regra x => y é calculada como a probabilidade de y aparecer na transação dado que x ocorreu, isto é: confiança(x => y) = suporte (x U y)/suporte(x)")])])])]),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Retornar conjuntos de itens frequentes de uma cesta de produtos de uma loja varejo Belga."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("router-link",{attrs:{to:"/pt-br/spark/base-de-dados/#belgium-retail"}},[a._v("Belguium retail")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_itemsets_frequentes/image1.png",alt:"Fluxo de trabalho - Ler dados"}})]),a._v(" "),o("ol",[o("li",[a._v("Adicione a base de dados por meio da operação "),o("router-link",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[a._v("Utilize a operação "),o("strong",[a._v("Transformar valores por função")]),a._v(" para tratar a base de dados. Nesta o.eração, clique em "),o("strong",[a._v("Editar valor")]),a._v(" da expressão para adicionar a expressão. Clique em adicionar e, em seguida preencha o campo da "),o("strong",[a._v("Expressão")]),a._v(" com "),o("em",[a._v("“split(trim(value), ' ')”")]),a._v(" e o campo do "),o("strong",[a._v("Alias")]),a._v(" com "),o("em",[a._v("“trata_transacao”")]),a._v(". Por fim, clique em OK. Isso aplicará a expressão "),o("em",[a._v("“trata_transacao = split(trim(value), ' ') ”")]),a._v(" nos dados de entrada.")])]),a._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Mineração de itemsets frequentes")]),a._v(", preencha "),o("em",[a._v("0,2")]),a._v(" no campo "),o("strong",[a._v("Suporte mínimo")]),a._v(", selecione "),o("em",[a._v("“trata_transacoes”")]),a._v(" no campo "),o("strong",[a._v("Atributo com transações (vazio = primeiro atributo)")]),a._v(", e preencha "),o("em",[a._v("0,6")]),a._v(" no campo "),o("strong",[a._v("Confiança mínima (para a geração das regras)")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_itemsets_frequentes/image3.png",alt:"Formulário Mineração de itemsets frequentes"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("router-link",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/associacao-regras-de-associacao.html"}},[a._v("Regras de associação")]),a._v(", preencha "),o("em",[a._v("0,6")]),a._v(" no campo Confiança mínima e "),o("em",[a._v("200")]),a._v(" no campo Quantidade de regras a serem geradas. Por fim, selecione "),o("em",[a._v("“items”")]),a._v(" no campo Atributo com transações (vazio = primeiro atributo).")],1)]),a._v(" "),o("li",[o("p",[a._v("Para visualizar os resultados, adicione a operação "),o("router-link",{attrs:{to:"/pt-br/spark/visualizacao-de-dados/tabela.html"}},[a._v("Tabela")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado na aba Visualizações. A única regra encontrada para os parâmetros especificados foi aquela com o antecedente 48 e o consequente 39, que possui uma confiança de aproximadamente 0,692:"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_itemsets_frequentes/image2.png",alt:"Resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=r.exports}}]);