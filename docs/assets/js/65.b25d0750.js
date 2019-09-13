(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{207:function(a,e,o){"use strict";o.r(e);var r=o(0),t=Object(r.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"avaliar-modelo"}},[a._v("Avaliar Modelo")]),a._v(" "),o("p",[a._v("Avalia resultado da aplicação de um modelo em dados de teste.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados a serem avaliados e modelo de aprendizado.")]),a._v(" "),o("td",[a._v("Não tem")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo usado para predição")])]),a._v(" "),o("td",[a._v("Nome dado durante a aplicação do modelo ao atributo usado para avaliar a predição")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo usado como label")])]),a._v(" "),o("td",[a._v("Rótulo do atributo que contém a classe real")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Métrica usada para avaliação")])]),a._v(" "),o("td",[a._v("Nome da métrica de avaliação que será usada")])])])]),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"metricas-usadas-para-avaliacao"}},[a._v("Métricas usadas para avaliação")]),a._v(" "),o("p",[a._v("Existem as seguintes métricas para realização a avaliação do modelo:")]),a._v(" "),o("ul",[o("li",[a._v("Area under ROC")]),a._v(" "),o("li",[a._v("Area under PR")]),a._v(" "),o("li",[a._v("F1")]),a._v(" "),o("li",[a._v("Weighted Precision")]),a._v(" "),o("li",[a._v("Weighted Recall")]),a._v(" "),o("li",[a._v("Accuracy")]),a._v(" "),o("li",[a._v("Root Mean Squared Error")]),a._v(" "),o("li",[a._v("Mean Squared Error")]),a._v(" "),o("li",[a._v("Mean Absolute Error")])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Classificar o tipo de íris da planta dado os atributos de pétala e sépala.")]),a._v(" "),o("p",[o("strong",[a._v("Base de Dados:")]),a._v(" "),o("router-link",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image3.png",alt:"Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("router-link",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image8.png",alt:"Formulário Ler Dados"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("router-link",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(", selecione "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(". Preencha "),o("em",[a._v("“class_label”")]),a._v(" no campo "),o("strong",[a._v("Nome para novos atributos indexados")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image7.png",alt:"Formulário Converter Categórico"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("router-link",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão Percentual")]),a._v(", selecione 30%-70%. "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image2.png",alt:"Formulário Divisão Percentual"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("router-link",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/classificacao-naive-bayes.html"}},[a._v("Naive Bayes")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e “"),o("em",[a._v("sepal_width”")]),a._v(" no atributo "),o("strong",[a._v("Atributo com features")]),a._v(" e "),o("em",[a._v("“class_label”")]),a._v(" no "),o("strong",[a._v("Atributo com rótulo")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image9.png",alt:"Formulário Naive Bayes"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("strong",[a._v("Aplicar modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributos com as features")]),a._v(" e preencha "),o("em",[a._v("“prediction”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image6.png",alt:"Formulário Aplicar Modelo"}}),o("br"),a._v("\nA ferramenta "),o("router-link",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar modelo")]),a._v(" tem como objetivo retornar o resultado da aplicação de um modelo (neste exemplo, um modelo de classificação) em um conjunto. Este resultado é representado por predições feitas em um conjunto de dados de teste.")],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a operação "),o("strong",[a._v("Avaliar Modelo")]),a._v(" selecione "),o("em",[a._v("“prediction”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(", "),o("em",[a._v("“class_label”")]),a._v(" no "),o("strong",[a._v("Atributo usado como label")]),a._v(", "),o("em",[a._v("“acurácia”")]),a._v(" em "),o("strong",[a._v("Métrica usada para avaliação")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image1.png",alt:"Formulário Avaliar Modelo"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o modelo e observe os resultados. "),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image5.png",alt:"Gráfico esultado da avaliação"}}),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/modelo_e_avaliacao/avaliar_modelo/image4.png",alt:"Tabela resultado da avaliação"}}),o("br"),a._v("\nOs resultados são satisfatórios para este tipo de classificador, uma vez que no conjunto de dados temos classes que não são linearmente separáveis. O foco, no entanto é exemplificar a aplicação de um determinado modelo em um conjunto de dados de teste.")])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=t.exports}}]);