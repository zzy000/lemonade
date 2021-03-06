
# Gráfico de Barra

Um gráfico de barras visa associar atributos categóricos (não numéricos) com barras, cujas alturas/comprimentos são proporcionais aos valores que elas representam. No geral, barras maiores representam valores maiores.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entradas | Uma Visualização |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Atributos para o eixo X** | Atributo com os dados do eixo X |
| **Atributos para o eixo Y** | Atributo com os dados do eixo Y. Para múltiplas séries, basta selecionar dois ou mais atributos |
| **Título** | Título da visualização. É apresentado no gráfico |
| **Título para o eixo X** |  |
| **Título para o eixo Y** |  |
| **Prefixo para o eixo X** | Prefixos são palavras que aparecem na frente de cada rótulo. Por exemplo, se no eixo X estiver um número para cada dia do mês (i.e., 1 – 30), o prefixo poderia ser a palavra “Dia”. |
| **Prefixo para o eixo Y** |  |
| **Sufixo para o eixo X** | Sufixos são palavras que aparecem após cada rótulo. Por exemplo, se no eixo X estiver temperaturas, o sufixo poderia ser a palavra “Graus”. |
| **Sufixo para o eixo Y** |  |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** analisar a distribuição das espécies da Íris.

**Base de Dados:** [Íris][3]
	
![Ler dados](/img/spark/visualizacao_de_dados/grafico_de_barra/image4.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
	
2.   Adicione a operação [Agrupar linhas por função][5] e selecione *“class”* no campo **Selecione o(s) atributos para agrupamento**. Na função de agrupamento, selecione o **Atributo** *“class”*, **Função** *"count”* e preencha *“count_class”* em **Nome Novo**. \
	![Formulário agrupar linhas por função](/img/spark/visualizacao_de_dados/grafico_de_barra/image3.png)
	
3. Na operação **Gŕafico de barra(s)** preencha *“Classes”* no campo **Título**, selecione *“class”* em **Atributos para eixo x**, preencha *“count_class”* **Atributos para eixo y**. \
	![Formulario gáfico de barras](/img/spark/visualizacao_de_dados/grafico_de_barra/image2.png)

4. Execute o fluxo e visualize o resultado. 
	![Gráfico de linhas gerado](/img/spark/visualizacao_de_dados/grafico_de_barra/image1.png)\
		Observe que todas as classes possuem 50 instâncias.

----- 
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/manipulacao-de-dados/linha-agrupar-por-funcao.html