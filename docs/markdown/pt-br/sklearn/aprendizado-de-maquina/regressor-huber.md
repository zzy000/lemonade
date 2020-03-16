# Regressor Huber
A operação Regressor Huber tem como objetivo criar um modelo, que é robusto para [outliers]. O HuberRegressor é diferente
 porque aplica uma perda linear a amostras classificadas como [outliers]. Uma amostra é classificada como inlier 
 se o erro absoluto dessa amostra for menor que um determinado limite. Além disso, não ignora o efeito dos [outliers], 
 mas atribui um peso menor a eles.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e modelo do algoritmo de regressão |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo que será usado para treinamento |
| **Atributo com o rótulo** | Atributo a ser predito |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| **Tolerância** | Tolerância para critérios de parada |
| **Epsilon** | O parâmetro epsilon controla o número de amostras que devem ser classificadas como outliers. Quanto menor o epsilon, mais robusto é para outliers |
| **Número máximo de iterações** | Número máximo de iterações |
| **Alpha** | Parâmetro de Regularização |
| **Fit interceptação** | Se deve ou não caber na interceptação. Isso pode ser definido como False se os dados já estiverem centralizados em torno da origem |

[Aba Aparência][1]

[Aba Resultados][2] 

## Definições
### Outliers
Os outliers são dados que se diferem drasticamente de todos os outros. Em outras palavras,
 um outlier é um valor que foge da normalidade.

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo construído pela operação Regressor Huber para predizer a qualidade de um vinho.\
**Base de Dados:** Qualidade da Variante Vermelha do Vinho Verde Português - [Wine Red Quality][3]

![Fluxo - Ler dados](/img/sklearn/aprendizado_de_maquina/regressor_huber/image3.png)

1. Leia a base de dados por meio da operação [Ler dados][4].

2. Utilize a operação [Divisão percentual][5] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na Operação **Regressor Huber**, selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)**. Selecione *“quality”* no campo  **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Preencha 100 no campo **Iterações máximas**, 0.35 no campo **Regularização** e 0.8 no campo **Mix. para ElasticNet**. Deixe os demais parâmetros inalterados.\
	![Tabela - Regressor huber 1](/img/sklearn/aprendizado_de_maquina/regressor_huber/image4.png)
	![Tabela - Regressor huber 2](/img/sklearn/aprendizado_de_maquina/regressor_huber/image2.png)

4. Na operação [Aplicar Modelo][6], selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][7], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“quality”* no campo **Atributo usado como label** e a métrica *“Raiz do erro quadrático médio”* como **Métrica para avaliação**.

6. Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio **(Root Mean Square Error ou RMSE)**:
	![Resultado](/img/sklearn/aprendizado_de_maquina/regressor_linear/image1.png)




---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[outliers]: #outliers
[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#wine
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[6]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html