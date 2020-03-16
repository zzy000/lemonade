(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{293:function(a,e,o){"use strict";o.r(e);var r=o(0),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"regressao-linear"}},[a._v("Regressão Linear")]),a._v(" "),o("p",[a._v("A operação Regressão Linear tem como objetivo criar um modelo, que é basicamente uma função linear. A ideia desta operação é criar uma linha reta irá minimizar a soma dos quadrados dos "),o("a",{attrs:{href:"#residuos"}},[a._v("resíduos")]),a._v(" entre as respostas observadas na base de dados e as respostas preditas pela aproximação linear. O modelo produzido pela operação Regressão Linear assume que os resíduos seguem uma distribuição Gaussiana.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de regressão")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo que será usado para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser predito")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Iterações máximas")])]),a._v(" "),o("td",[a._v("Define o número máximo de iterações para a convergência do algoritmo. O seu valor padrão é 100")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Regularização")])]),a._v(" "),o("td",[a._v("Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Mix. para ElasticNet (entre 0 e 1)")])]),a._v(" "),o("td",[a._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Solucionador (Solver)")])]),a._v(" "),o("td",[a._v("Define o algoritmo para gerar a solução da otimização do problema de regressão. O seu valor padrão é ‘auto’, significando que isso será feito automaticamente pelo algoritmo de regressão linear")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),o("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),o("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"residuos"}},[a._v("Resíduos")]),a._v(" "),o("p",[a._v("É a diferença entre os valores observados na base de dados e as respostas preditas pelo modelo. Por exemplo, se queremos saber/predizer a receita de uma loja em um dia considerando como atributo a temperatura máxima daquele dia, os resíduos seriam:")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Temperatura (Celsius)")]),a._v(" "),o("th",[a._v("Receita (Observado)")]),a._v(" "),o("th",[a._v("Receita (Predito)")]),a._v(" "),o("th",[a._v("Resíduo (Observado - Predito)")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("28.2°C")]),a._v(" "),o("td",[a._v("R$44,00")]),a._v(" "),o("td",[a._v("R$41,00")]),a._v(" "),o("td",[a._v("R$3,00")])]),a._v(" "),o("tr",[o("td",[a._v("21,4°C")]),a._v(" "),o("td",[a._v("R$23,00")]),a._v(" "),o("td",[a._v("R$23,00")]),a._v(" "),o("td",[a._v("R$0,00")])]),a._v(" "),o("tr",[o("td",[a._v("32,9°C")]),a._v(" "),o("td",[a._v("R$43,00")]),a._v(" "),o("td",[a._v("R$54,00")]),a._v(" "),o("td",[a._v("-R$11,00")])]),a._v(" "),o("tr",[o("td",[a._v("24,0°C")]),a._v(" "),o("td",[a._v("R$30,00")]),a._v(" "),o("td",[a._v("R$29,00")]),a._v(" "),o("td",[a._v("R$1,00")])])])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo construído pela operação Regressão Linear para predizer a qualidade de um vinho."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" Qualidade da Variante Vermelha do Vinho Verde Português - "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#wine"}},[a._v("Wine Red Quality")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image3.png",alt:"Fluxo - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na Operação "),o("strong",[a._v("Regressão Linear")]),a._v(", selecione "),o("em",[a._v("“alcohol”")]),a._v(", "),o("em",[a._v("“chlorides”")]),a._v(", "),o("em",[a._v("“citric_acid”")]),a._v(", "),o("em",[a._v("“density”")]),a._v(", "),o("em",[a._v("“fixed_acidity”")]),a._v(", "),o("em",[a._v("“free_sulfur_dioxide”")]),a._v(", "),o("em",[a._v("“pH”")]),a._v(", "),o("em",[a._v("“residual_sugar”")]),a._v(", "),o("em",[a._v("“sulphates”")]),a._v(", "),o("em",[a._v("“total_sulfur_dioxide”")]),a._v(" e "),o("em",[a._v("“volatile_acidity”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“quality”")]),a._v(" no campo  "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Preencha 100 no campo "),o("strong",[a._v("Iterações máximas")]),a._v(", 0.35 no campo "),o("strong",[a._v("Regularização")]),a._v(" e 0.8 no campo "),o("strong",[a._v("Mix. para ElasticNet")]),a._v(". Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image4.png",alt:"Tabela - Regressão linear 1"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image2.png",alt:"Tabela - Regressão linear 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“alcohol”")]),a._v(", "),o("em",[a._v("“chlorides”")]),a._v(", "),o("em",[a._v("“citric_acid”")]),a._v(", "),o("em",[a._v("“density”")]),a._v(", "),o("em",[a._v("“fixed_acidity”")]),a._v(", "),o("em",[a._v("“free_sulfur_dioxide”")]),a._v(", "),o("em",[a._v("“pH”")]),a._v(", "),o("em",[a._v("“residual_sugar”")]),a._v(", "),o("em",[a._v("“sulphates”")]),a._v(", "),o("em",[a._v("“total_sulfur_dioxide”")]),a._v(" e "),o("em",[a._v("“volatile_acidity”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“quality”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“Raiz do erro quadrático médio”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio "),o("strong",[a._v("(Root Mean Square Error ou RMSE)")]),a._v(":\n"),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressor_linear/image1.png",alt:"Resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);