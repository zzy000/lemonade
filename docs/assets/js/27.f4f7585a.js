(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{278:function(a,o,e){"use strict";e.r(o);var r=e(0),t=Object(r.a)({},function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"regressao-logistica"}},[a._v("Regressão Logística")]),a._v(" "),e("p",[a._v("O objetivo da operação Regressão Logística é similar ao da operação "),e("router-link",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/regressor-linear.html"}},[a._v("Regressão Linear")]),a._v(", i.e., produzir um modelo linear que permite estimar a probabilidade associada à ocorrência de um dado exemplo pertencer a uma classe (e.g., positiva ou negativa) dado um conjunto de atributos preditivos. Contudo, diferentemente do modelo produzido pela "),e("router-link",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/regressor-linear.html"}},[a._v("Regressão Linear")]),a._v(", o modelo logístico possui uma variável resposta (i.e., o atributo classe) categórica - usualmente binária - ao invés de uma variável resposta real.")],1),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),e("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),e("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),e("td",[a._v("Atributo a ser classificado")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributos com a predição")])]),a._v(" "),e("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Pesos")])]),a._v(" "),e("td",[a._v("Pesos do algoritmo em um "),e("em",[a._v("ensemble")])])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Profundidade de agregação")])]),a._v(" "),e("td",[a._v("Define o valor de profundidade para a agregação por árvore do algoritmo. Deve ser maior ou igual a 2. O valor padrão deste parâmetro é igual a 2")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Parâmetro para Elastic Net")])]),a._v(" "),e("td",[a._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O valor padrão deste parâmetro é 0")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Interseção ajustada")])]),a._v(" "),e("td",[a._v("Define se o modelo deve incluir o "),e("em",[a._v("intercept")])])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Limiar para classificação binária")])]),a._v(" "),e("td",[a._v("Limiar usado na definição da classe que será escolhida")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Limiar para classificação multiclasse")])]),a._v(" "),e("td",[a._v("Limiares usados no ajuste da probabilidade de cada uma das classes")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com os pesos")])]),a._v(" "),e("td",[a._v("Atributos passados ao modelo que terão um peso diferenciado")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Interações máximas")])]),a._v(" "),e("td",[a._v("Define o número máximo de iterações para a convergência do algoritmo. O valor padrão deste parâmetro é 100")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Tolerância")])]),a._v(" "),e("td",[a._v("Tolerância de convergência para algoritmos iterativos (>=0.0)")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#familia"}},[a._v("Família")])]),a._v(" "),e("td",[a._v("Família do algoritmo que será usado na criação do modelo. Pode assumir os seguintes valores: “Binomial”, “Multinomial” ou “Automática”")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Parâmetro para regularização")])]),a._v(" "),e("td",[a._v("Valor para regularizar o fitting da função de perda do algoritmo, esse parâmetro é usado para evitar overfitting. O valor deste parâmetro é 0.0")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),e("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),e("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Usar classificação um-contra-todos (one-vs-rest)")])]),a._v(" "),e("td",[a._v("Se selecionado, o algoritmo realizará classificação um-contra-todos ao invés de classificação tradicional (neste caso, binária ou multi-classe)")])])])]),a._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),e("h3",{attrs:{id:"familia"}},[a._v("Família")]),a._v(" "),e("p",[a._v("Existem as seguintes famílias de algoritmos:")]),a._v(" "),e("ol",[e("li",[a._v("Binomial: Usa uma regressão logística binomial para realizar previsões binárias. É válida somente para problemas de classificação binária (i.e., com apenas duas classes).")]),a._v(" "),e("li",[a._v("Multinomial: Usa uma regressão logística multinomial para realizar predições em problemas de classificação multi-classe (i.e., com mais de duas classes).")]),a._v(" "),e("li",[a._v("Automático: A plataforma vai inferir qual das variantes acima será utilizada.")])]),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo de Regressão Logística para classificar a espécie da planta Íris"),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("router-link",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_regressao_logistica/image2.png",alt:"Formulário - Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Leia a base de dados Irís por meio da operação "),e("router-link",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Utilize a operação "),e("router-link",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),e("em",[a._v("“class”")]),a._v(" no campo "),e("strong",[a._v("Atributos")]),a._v(", "),e("em",[a._v("String")]),a._v(" como "),e("strong",[a._v("Tipo de indexador")]),a._v(" e "),e("em",[a._v("“class_index”")]),a._v(" como "),e("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Utilize a operação "),e("router-link",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),e("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1ª parte) e 50% para testar (2ª parte).")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Regressão Logística")]),a._v(", selecione "),e("em",[a._v("“petal_length”")]),a._v(", "),e("em",[a._v("“petal_width”")]),a._v(", "),e("em",[a._v("“sepal_length”")]),a._v(" e "),e("em",[a._v("“sepal_width”")]),a._v(" no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),e("em",[a._v("“class_index”")]),a._v(" no campo "),e("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Além disso, escolha a "),e("strong",[a._v("Família")]),a._v(" "),e("em",[a._v("“Automático”")]),a._v(", para selecionar o tipo de família (binomial ou multinomial) automaticamente. Deixe os demais parâmetros inalterados."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_regressao_logistica/image4.png",alt:"Formulário Regressão logística - parte 1"}}),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_regressao_logistica/image1.png",alt:"Formulário Regressão logística - parte 2"}})])]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("router-link",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),e("em",[a._v("“petal_length”")]),a._v(", "),e("em",[a._v("“petal_width”")]),a._v(", "),e("em",[a._v("“sepal_length”")]),a._v(" e "),e("em",[a._v("“sepal_width”")]),a._v(" no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("router-link",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),e("em",[a._v("“class_index”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),e("em",[a._v("“F1”")]),a._v(" como "),e("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_regressao_logistica/image3.png",alt:"Gráfico - resultado"}}),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_regressao_logistica/image5.png",alt:"Tabela - resultado"}})])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);o.default=t.exports}}]);