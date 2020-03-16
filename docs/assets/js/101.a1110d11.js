(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{332:function(a,e,t){"use strict";t.r(e);var r=t(0),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mistura-de-gaussianas"}},[a._v("Mistura de Gaussianas")]),a._v(" "),t("p",[a._v("Método de clusterização probabilístico de mistura de gaussianas.")]),a._v(" "),t("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Entrada")]),a._v(" "),t("th",[a._v("Saída")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),t("td",[a._v("Dados de saída e Modelo do algoritmo de agrupamento")])])])]),a._v(" "),t("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),t("p",[a._v("Nome da Tarefa")]),a._v(" "),t("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Parâmetro")]),a._v(" "),t("th",[a._v("Detalhe")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),t("td",[a._v("Atributo que será usado para treinamento")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Atributo com a Predição (novo)")])]),a._v(" "),t("td")]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Número de agrupamentos (k)")])]),a._v(" "),t("td",[a._v("Quantidade de componentes da mistura")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Tolerância")])]),a._v(" "),t("td",[a._v("Tolerância relativa para declarar convergência do algoritmo")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Número máximo de iterações")])]),a._v(" "),t("td",[a._v("Quantidade máxima de iterações do algoritmo")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),t("td")]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),t("td")])])]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),t("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),t("p",[t("strong",[a._v("Objetivo:")]),a._v(" utilizar o modelo mistura de gaussianas para agrupar as espécies da Íris."),t("br"),a._v(" "),t("strong",[a._v("Base de Dados:")]),a._v(" "),t("a",{attrs:{href:"/pt-br/spark/base-de-dados#iris"}},[a._v("Íris")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/agrupamento_mistura_de_gaussianas/image1.png",alt:"Fluxo de trabalho - Ler Dados"}})]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Adicione uma base de dados por meio da operação "),t("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v("."),t("br"),a._v(" "),t("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/agrupamento_mistura_de_gaussianas/image4.png",alt:"Formulário - Ler Dados"}})],1)]),a._v(" "),t("li",[t("p",[a._v("Na operação "),t("strong",[a._v("Mistura de Gaussianas")]),a._v(", selecione "),t("em",[a._v("“petallength”")]),a._v(", "),t("em",[a._v("“petalwidth”")]),a._v(", "),t("em",[a._v("“sepallength”")]),a._v(" e "),t("em",[a._v("“sepalwidth”")]),a._v(" no campo "),t("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),t("em",[a._v("“cluster”")]),a._v(" no campo "),t("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Preencha 3 no campo "),t("strong",[a._v("Número de agrupamentos (k)")]),a._v(", 0.01 no campo "),t("strong",[a._v("Tolerância")]),a._v(", 20 no campo "),t("strong",[a._v("Número max. de interações")]),a._v(" e "),t("em",[a._v('“Não executar a validação cruzada"')]),a._v(" no campo "),t("strong",[a._v("Métrica para validação cruzada")]),a._v("."),t("br"),a._v(" "),t("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/agrupamento_mistura_de_gaussianas/image2.png",alt:"Formulário - Mistura de Gaussianas"}})])]),a._v(" "),t("li",[t("p",[a._v("Na operação Visualizar em tabela, não preencha nada.")])]),a._v(" "),t("li",[t("p",[a._v("Execute o fluxo e visualize o resultado."),t("br"),a._v(" "),t("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/agrupamento_mistura_de_gaussianas/image3.png",alt:"Resultado"}}),t("br"),a._v("\nCom a execução do modelo a probabilidade de cada amostra pertencer a cada componente pode ser visualizada pela tabela de visualização.")])])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=o.exports}}]);