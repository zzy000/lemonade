(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{308:function(a,e,o){"use strict";o.r(e);var r=o(28),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"regressao-logistica"}},[a._v("Regressão Logística")]),a._v(" "),o("p",[a._v("O objetivo da operação Regressão Logística é similar ao da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/aprendizado-de-maquina/regressor-linear.html"}},[a._v("Regressão Linear")]),a._v(", i.e., produzir um modelo linear que permite estimar a probabilidade associada à ocorrência de um dado exemplo pertencer a uma classe (e.g., positiva ou negativa) dado um conjunto de atributos preditivos. Contudo, diferentemente do modelo produzido pela "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/aprendizado-de-maquina/regressor-linear.html"}},[a._v("Regressão Linear")]),a._v(", o modelo logístico possui uma variável resposta (i.e., o atributo classe) categórica - usualmente binária - ao invés de uma variável resposta real.")],1),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tolerância")])]),a._v(" "),o("td",[a._v("Tolerância para critérios de parada.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("C")])]),a._v(" "),o("td",[a._v("Força de regularização inversa. Como no SVM, valores menores especificam uma regularização mais forte.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Semente")])]),a._v(" "),o("td",[a._v("A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Solver")])]),a._v(" "),o("td",[a._v("A convergência rápida de sag e saga é garantida apenas em atributos com aproximadamente a mesma escala.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Número máximo de iterações")])]),a._v(" "),o("td",[a._v("Apenas para solvers: newton-cg, sag e lbfgs.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Penalidade")])]),a._v(" "),o("td",[a._v("Usado para especificar a norma da penalização.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Dual")])]),a._v(" "),o("td",[a._v("Formulação dual ou primal.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Considerar intercepto")])]),a._v(" "),o("td",[a._v("Especificar se uma constante (intecerpto ou viés) deve ser adicionada na função de decisão.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Escala do intercepto")])]),a._v(" "),o("td",[a._v('Usado apenas se o Solver "liblinear" for utilizado com o atributo "Considerar intercepto" habilitado.')])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("[Mutiplas classes]")])]),a._v(" "),o("td",[a._v('Se a opção selecionada é "ovr", então um problema binário é moldado para cada label. Para o atributo "multinomial" a minização de perda é o ajuste de perda multinomial das funções de probabilidade, mesmo com atributos binários.')])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("L1 Ratio")])]),a._v(" "),o("td",[a._v("Parâmetro do Elastic-Net, o valor deve estar entre 0 e 1.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Bootstrap")])]),a._v(" "),o("td",[a._v("Utilizar amostras de um bootstrap para gerar as árvores.")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Out of bag")])]),a._v(" "),o("td",[a._v('Usar amostras "out-of-bag" para estimar a acurácia do generalizador')])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"mutiplas-classes"}},[a._v("Mutiplas classes")]),a._v(" "),o("p",[a._v("Existem as seguintes classes de algoritmos:")]),a._v(" "),o("ol",[o("li",[a._v("Ovr: Usa uma regressão logística binomial para realizar previsões binárias. É válida somente para problemas de classificação binária (i.e., com apenas duas classes).")]),a._v(" "),o("li",[a._v("Multinomial: Usa uma regressão logística multinomial para realizar predições em problemas de classificação multi-classe (i.e., com mais de duas classes).")]),a._v(" "),o("li",[a._v("Automático: A plataforma vai inferir qual das variantes acima será utilizada.")])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo de Regressão Logística para classificar a espécie da planta Íris"),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image2.png",alt:"Formulário - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados Irís por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(", "),o("em",[a._v("String")]),a._v(" como "),o("strong",[a._v("Tipo de indexador")]),a._v(" e "),o("em",[a._v("“class_index”")]),a._v(" como "),o("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1ª parte) e 50% para testar (2ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Regressão Logística")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Além disso, escolha a "),o("strong",[a._v("Família")]),a._v(" "),o("em",[a._v("“Automático”")]),a._v(", para selecionar o tipo de família (binomial ou multinomial) automaticamente. Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image4.png",alt:"Formulário Regressão logística - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image1.png",alt:"Formulário Regressão logística - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image3.png",alt:"Gráfico - resultado"}}),o("br"),a._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image5.png",alt:"Tabela - resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);