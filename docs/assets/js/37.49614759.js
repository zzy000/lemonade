(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{323:function(e,a,r){"use strict";r.r(a);var o=r(28),t=Object(o.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"regressao-linear-generalizada"}},[e._v("Regressão Linear Generalizada")]),e._v(" "),r("p",[e._v("Regressão linear generalizada, é uma versão generalizada do modelo de regressão linear que estima uma função linear que minimiza a distância entre os pontos do modelo à função usando uma distribuição para a função de perda genérica, não assumindo uma distribuição normal assim como na regressão linear.")]),e._v(" "),r("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Entrada")]),e._v(" "),r("th",[e._v("Saída")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),r("td",[e._v("Dados de saída e Modelo do algoritmo de regressão")])])])]),e._v(" "),r("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),r("p",[e._v("Nome da Tarefa")]),e._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parâmetro")]),e._v(" "),r("th",[e._v("Detalhe")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),r("td",[e._v("Atributo que será usado para treinamento")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),r("td",[e._v("Atributo a ser predito")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributos com a predição")])]),e._v(" "),r("td",[e._v("Atributo contendo a predição do modelo")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Interceptar")])]),e._v(" "),r("td",[e._v("Se deve calcular a interceptação para este modelo.")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Normalizar")])]),e._v(" "),r("td",[e._v("Usado para normalizar os regressores antes da regressão.")])])])]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[e._v("Aba Aparência")])],1),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[e._v("Aba Resultados")])],1),e._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[e._v("Exemplo de Utilização")]),e._v(" "),r("p",[r("strong",[e._v("Objetivo:")]),e._v(" utilizar os dados "),r("em",[e._v("horsepower")]),e._v(" (cavalos de potência de cada carro) e o "),r("em",[e._v("price")]),e._v(" (preço do carro) para estimar o preço a partir da potência do veículo."),r("br"),e._v(" "),r("strong",[e._v("Base de Dados:")]),e._v(" "),r("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#mtcars-com"}},[e._v("mtcars")])],1),e._v(" "),r("p",[r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image5.png",alt:"Fluxo de trabalho - Ler Dados"}})]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Adicione uma base de dados por meio da operação "),r("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v("."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image2.png",alt:"Tabela Ler Dados"}})],1)]),e._v(" "),r("li",[r("p",[e._v("Usando a operação "),r("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[e._v("Divisão Percentual")]),e._v(" divida a base de dados em treino e teste utilizando uma distribuição de 70% para treino e 30% para teste."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image1.png",alt:"Dividir percentual"}})],1)]),e._v(" "),r("li",[r("p",[e._v("Na operação "),r("strong",[e._v("Regressão Linear Generalizado")]),e._v(" coloque o número de "),r("em",[e._v("Iterações Máximas")]),e._v(" como 100, preencha 10 no campo "),r("em",[e._v("Profundidade Máxima")]),e._v(", deixe o valor de "),r("em",[e._v("Solver")]),e._v(" como "),r("em",[e._v("Auto")]),e._v(" e o parâmetro de regularização como 0.35. Use a função Gaussiana no campo "),r("em",[e._v("Family")]),e._v(" como probabilidade de distribuição e a função de identidade no campo "),r("em",[e._v("Link Prediction")]),e._v("."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image9.png",alt:"Operação Regressão Linear"}}),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image4.png",alt:"Operação Regressão Linear"}})])]),e._v(" "),r("li",[r("p",[e._v("Na operação "),r("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[e._v("Aplicar Modelo")]),e._v(", selecione *"),r("em",[e._v("“Horse_Power”")]),e._v(" no campo "),r("strong",[e._v("Atributos com features")]),e._v(" e preencha "),r("em",[e._v("“prediction”")]),e._v(" no campo "),r("strong",[e._v("Nome do novo atributo")]),e._v("."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image3.png",alt:"Operação Aplicar Modelo"}})],1)]),e._v(" "),r("li",[r("p",[e._v("Na operação "),r("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),r("em",[e._v("“Price”")]),e._v(" no campo *"),r("em",[e._v("Atributo usado para predição")]),e._v(". Selecione "),r("em",[e._v("“prediction”")]),e._v(" no campo "),r("strong",[e._v("Atributo usado como label")]),e._v(". E selecione a métrica "),r("em",[e._v("“Root Mean Square Error”")]),e._v(" como "),r("strong",[e._v("métrica para avaliação")]),e._v("."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image8.png",alt:"Operação Avaliar Modelo"}})],1)]),e._v(" "),r("li",[r("p",[e._v("Execute o Fluxo e visualize o resultado."),r("br"),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image7.png",alt:"Resultado"}}),r("br"),e._v(" "),r("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image6.png",alt:"Resultado Gráfico"}}),r("br"),e._v("\nO valor predito é de 5238.423. No primeiro gráfico residual da predição que investiga o uso da do modelo de predição, podemos ver que a distribuição apresentada se adequa às suposições para o uso da regressão linear generalizada. No segundo gráfico vemos a distribuição dos dados reais que era desejado prever e a reta vermelha que representa a predição feita pelo modelo, podemos ver que a regressão encaixa bem nos dados desejados.")])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);a.default=t.exports}}]);