(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{269:function(a,e,o){"use strict";o.r(e);var r=o(0),t=Object(r.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"arvore-de-decisao"}},[a._v("Árvore de Decisão")]),a._v(" "),o("p",[a._v("O objetivo da operação Árvore de Decisão é criar um modelo representado por uma árvore, a qual é composta por nós e folhas. Os nós são utilizados para decidir (de acordo com os atributos de entrada da base de dados) qual caminho tomar para separar os exemplos em classes e as folhas agrupam esses exemplos de acordo com as suas respectivas classes.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Pesos")])]),a._v(" "),o("td",[a._v("Pesos do algoritmo em um ensemble")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Manter identificadores dos nós em cache")])]),a._v(" "),o("td",[a._v("Se selecionado, o algoritmo evita passar o modelo atual para os executores da próxima iteração")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Intervalo para checkpoint (cache)")])]),a._v(" "),o("td",[a._v("Frequência com a qual fazer checkpoints")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#impureza"}},[a._v("Impureza")])])]),a._v(" "),o("td",[a._v("Medida para quantificar a impureza de cada nó")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("No. máximo de bins")])]),a._v(" "),o("td",[a._v("Número de bins utilizados quando discretizando uma variável contínua")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Profundidade máxima")])]),a._v(" "),o("td",[a._v("Maior profundidade permitida da árvore de decisão")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Ganho mínimo de informação")])]),a._v(" "),o("td",[a._v("Mínimo de ganho de informação para que haja a utilização de um atributo na divisão de um nó")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Mínimo de instâncias por nó")])]),a._v(" "),o("td",[a._v("O número mínimo de instâncias (exemplos) que precisam estar em um nó folha de cada árvore. O seu Valor padrão é 1")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),o("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),o("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Usar classificação um-contra-todos (one-vs-rest)")])]),a._v(" "),o("td",[a._v("Se selecionado, o algoritmo realizará classificação um-contra-todos ao invés de classificação tradicional (neste caso, binária ou multi-classe)")])])])]),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"impureza"}},[a._v("Impureza")]),a._v(" "),o("p",[a._v("Tipos de impureza:")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Coeficiente Gini: É uma métrica de desigualdade que varia entre zero e um. O coeficiente Gini dita que se selecionarmos aleatoriamente uma amostra arbitrária da base de dados e essa amostra sempre conter exemplos da mesma classe, isso significa que a amostra de dados é dita como pura, resultando em um coeficiente de Gini igual a um. Caso contrário, a amostra de dados é dita como impura, resultando em um coeficiente de Gini igual a zero.")])]),a._v(" "),o("li",[o("p",[a._v("Entropia: É uma medida de teoria da informação que calcula o grau de desorganização em um sistema. Também é utilizada para caracterizar a (im)pureza de uma amostra de dados. Se a amostra for completamente homogênea/pura (i.e., todos os exemplos estiverem na mesma classe), então a entropia é zero. Se a amostra for dividida em partes iguais (por exemplo, classe positiva com 50% dos exemplos e classe negativa com os 50% restantes dos exemplos), então terá entropia de um, caracterizando uma amostra impura/não-homogênea.")])])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo de Árvore de Decisão para classificar a espécie da planta Íris."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("router-link",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image5.png",alt:"Fluxo de trabalho- Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados Irís por meio da operação "),o("router-link",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("router-link",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(", "),o("em",[a._v("String")]),a._v(" como "),o("strong",[a._v("Tipo de indexador")]),a._v(" e "),o("em",[a._v("“class_index”")]),a._v(" como "),o("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("router-link",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro Percentual, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação Árvore de decisão, selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image1.png",alt:"Formulário Arvore de Decisão - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image2.png",alt:"Formulário Arvore de Decisão - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("router-link",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("router-link",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(". E selecione a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image4.png",alt:"Resultado - Gráfico"}}),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image3.png",alt:"Resultado - Tabela"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=t.exports}}]);