# Mineração de Sequências

O objetivo da operação Mineração de Sequências é encontrar padrões frequentes na forma de sequências em dados transacionais. Para isso, essa operação usa o algoritmo [PrefixSpan][1].

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de transações | Padrões de sequências cujas quantidades estão acima de um determinado limiar |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Suporte mínimo** | É a proporção de transações em que x e y ocorrem conjuntamente na base de dados. Varia entre 0 e 1 |
| **Tamanho máximo da sequência** | Tamanho máximo da sequência a ser encontrada pelo algoritmo |
| **Atributo com transações** | Atributo contendo as transações da base de dados |

[Aba Aparência][2]

[Aba Resultados][3] 

## Exemplo de Utilização
**Objetivo:** Retornar sequências de visitas de usuários no site <http://msnbc.com> em 28 de setembro de 1999\
**Base de Dados:** [msnbc.com][4]

![Fluxo de Trabalho - Ler dados](/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image4.png)

1. Adicione a base de dados por meio da operação [Ler dados][5].

2. Utilize a operação **Transformar valores por função** para tratar a base de dados. Nesta operação, clique em **Editar valor** da expressão para adicionar a expressão. Clique em adicionar e, em seguida, preencha o campo da **Expressão** com *“cast(split(trim(value), ' '), 'array<int\>')”* e o campo do **Alias** com *“sequencias”*. Por fim, clique em **OK**. Isso aplicará a expressão *“sequences = cast(split(trim(value), ' '), 'array<int\>') ”* nos dados de entrada.

3. Na operação **Mineração de sequências**, preencha *0.01* no campo **Suporte mínimo**, selecione *“sequencias”* no campo **Atributo com transações (vazio = primeiro atributo)**, e preencha *6* no campo **Tamanho máx. da sequência**.\
![Tabela Mineração de sequẽncias](/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image1.png)

4. Execute o fluxo e visualize o resultado (i.e., as sequências com suas respectivas frequências):
![Tabela Resultado - parte 1](/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image2.png)
![Tabela Resultado - parte 2](/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image3.png)


---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: http://dx.doi.org/10.1109%2FTKDE.2004.77
[2]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[3]: /pt-br/spark/documentacao-geral/aba-resultados.html
[4]: /pt-br/spark/base-de-dados/#msnbc-com
[5]: /pt-br/spark/entrada-e-saida/ler-dados.html