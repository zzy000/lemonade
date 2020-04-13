(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{310:function(a,e,o){"use strict";o.r(e);var r=o(28),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"random-forest"}},[a._v("Random Forest")]),a._v(" "),o("p",[a._v("Random Forest (floresta aleatória) é uma generalização da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/aprendizado-de-maquina/classificacao-arvore-de-decisao.html"}},[a._v("Árvore de Decisão")]),a._v(", em que se utiliza um conjunto de árvores de decisão (aleatórias) a fim de minimizar o sobreajuste ("),o("em",[a._v("overfitting")]),a._v(") de cada modelo individual de árvore gerado para os dados de entrada.")],1),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de classificação ções")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição (novo)")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Número de árvores")])]),a._v(" "),o("td",[a._v("Número de árvores na floresta.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Profundidade máxima")])]),a._v(" "),o("td",[a._v("Profundidade máxima na árvore.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nó interno mínimo")])]),a._v(" "),o("td",[a._v("Porcentagem do número mínimo de amostras necessárias para dividir um nó interno.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nó de folha mínima")])]),a._v(" "),o("td",[a._v("Porcentagem do número mínimo de amostras necessárias para estar em um nó folha.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Semente")])]),a._v(" "),o("td",[a._v("A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados.")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#crit%C3%A9rio"}},[a._v("Critério")])])]),a._v(" "),o("td",[a._v("Função utilizada na medição da qualidade do particionamento.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Fração ponderada mínima de folhas")])]),a._v(" "),o("td",[a._v("A fração ponderada mínima da soma total de pesos (de todas as amostras de entrada) necessária para estar em um nó folha.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Quantidade máxima de atributos")])]),a._v(" "),o("td",[a._v("Quantidade máxima de atributos a se considerar no particionamento.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Quantidade máxima de nós folha")])]),a._v(" "),o("td",[a._v("Controle de crescimento da árvore.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Diminuição mínima de impureza")])]),a._v(" "),o("td",[a._v("Um nó será particionado caso isso resulte na diminuição da impureza maior ou igual o valor do atributo.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Parâmetro de complexidade alpha")])]),a._v(" "),o("td",[a._v("Parâmetro de complexidade usado para a poda mínima de complexidade de custo.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Percentual máximo de amostras")])]),a._v(" "),o("td",[a._v('Quando o parâmetro "Bootstrap" estiver habilitado, utilize esse número para obter um conjunto X de treinamento para cada base.')])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"criterio"}},[a._v("Critério")]),a._v(" "),o("p",[a._v("Tipos de critérios:")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Coeficiente Gini: É uma métrica de desigualdade que varia entre zero e um. O coeficiente Gini dita que se selecionarmos aleatoriamente uma amostra arbitrária da base de dados e essa amostra sempre conter exemplos da mesma classe, isso significa que a amostra de dados é dita como pura, resultando em um coeficiente de Gini igual a um. Caso contrário, a amostra de dados é dita como impura, resultando em um coeficiente de Gini igual a zero.")])]),a._v(" "),o("li",[o("p",[a._v("Entropia: É uma medida de teoria da informação que calcula o grau de desorganização em um sistema. Também é utilizada para caracterizar a (im)pureza de uma amostra de dados. Se a amostra for completamente homogênea/pura (i.e., todos os exemplos estiverem na mesma classe), então a entropia é zero. Se a amostra for dividida em partes iguais (por exemplo, classe positiva com 50% dos exemplos e classe negativa com os 50% restantes dos exemplos), então terá entropia de um, caracterizando uma amostra impura/não-homogênea.")])])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Random Forest para classificar a espécie da planta Íris."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image2.png",alt:"Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados Irís por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize “class” no campo "),o("strong",[a._v("Atributos")]),a._v(", "),o("em",[a._v("String")]),a._v(" como "),o("strong",[a._v("Tipo de indexador")]),a._v(" e "),o("em",[a._v("“class_index”")]),a._v(" como "),o("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Random Forest")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image6.png",alt:"Forumlário Random Forest - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image5.png",alt:"Forumlário Random Forest - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image4.png",alt:"Gráfico - resultado"}}),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image3.png",alt:"Tabela - resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);