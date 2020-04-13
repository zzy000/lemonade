(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{336:function(a,e,o){"use strict";o.r(e);var s=o(28),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"importacao-de-bases-de-dados"}},[a._v("Importação de bases de dados")]),a._v(" "),o("p",[a._v("Após a criação do usuário e reconhecimento do layout básico da plataforma, você poderá prosseguir para a importação de bases de dados, que podem ser utilizadas como entrada em processos de fluxos de trabalhos. Para iniciar a importação de uma base, clique na primeira aba na parte superior da página, chamada "),o("strong",[a._v("Base de dados")]),a._v(":\n"),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image51.png",alt:"Bases de Dados"}}),o("br"),a._v("\nA tela de importação de bases de dados aparecerá, e é nela que será feito o gerenciamento das bases de dados que você escolher utilizar. Para carregar uma base de dados clique no botão "),o("strong",[a._v("Adicionar")]),a._v(":"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image41.png",alt:"Tabela - Bases de Dados"}}),o("br"),a._v("\nA seguir, clique em "),o("strong",[a._v("Escolha")]),a._v(" na seção chamada “Sistema de arquivos distribuído (HDFS)”:"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image37.png",alt:"Sistema de arquivos distribuídos"}}),o("br"),a._v("\nVocê poderá arrastar o arquivo do seu gerenciador de arquivos ou selecioná-lo manualmente:"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image72.png",alt:"Importar - Sistema de arquivos distribuídos"}}),o("br"),a._v("\nPara este tutorial, utilizaremos a "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("base de dados Iris")]),a._v(", uma das mais reconhecidas na literatura de reconhecimento de padrões.  Faça o "),o("a",{attrs:{href:"https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",target:"_blank",rel:"noopener noreferrer"}},[a._v("download dessa base de dados"),o("OutboundLink")],1),a._v(" para seu computador para um arquivo chamado “iris.csv”. Uma outra opção é criar um arquivo no seu computador chamado “iris.csv” e copiar manualmente os dados presentes no "),o("a",{attrs:{href:"https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data",target:"_blank",rel:"noopener noreferrer"}},[a._v("link indicado"),o("OutboundLink")],1),a._v(" para o esse arquivo. A seguir, selecione ou arraste esse arquivo para a plataforma Lemonade e, a sua base de dados estará disponível quando você clicar novamente na aba "),o("strong",[a._v("Base de dados")]),a._v(" na parte superior da página."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image67.png",alt:"Tabela - Bases de Dados"}}),o("br"),a._v("\nCom o arquivo carregado, a base de dados aparece na tela com algumas opções de gerenciamento e informações básicas, como seu ID de identificação na plataforma, nome, descrição, formato, data de criação, o nome do usuário responsável pelo carregamento e suas tags. Além disso, outras opções de gerenciamento são:"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image29.png",alt:"Lixeira - Excluir"}}),a._v(": Exclui a base de dados da plataforma."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image31.png",alt:"Seta - Baixar"}}),a._v(": Efetua o download da base de dados que foi carregada para a plataforma.")],1),a._v(" "),o("p",[a._v("Ao clicar no nome nome da base de dados, prosseguimos para a aba de "),o("strong",[a._v("Informações básicas")]),a._v(". Informações como nome da base de dados e descrição da mesma podem ser alteradas nessa aba."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image61.png",alt:"Informações da Base de Dados"}})]),a._v(" "),o("ul",[o("li",[o("p",[a._v("Na tela de edição, alguns campos de destaque são:\nFormato: Explicita o formato em que o arquivo da base de dados está. No exemplo, a base está no formato CSV.")]),a._v(" "),o("ul",[o("li",[o("strong",[a._v("Tags")]),a._v(": Define rótulos pré-existentes para essa base dados. Por exemplo, “Base de classificação”, “Base de regressão”, “Base do experimento X”, etc.")]),a._v(" "),o("li",[o("strong",[a._v("Armazenamento")]),a._v(": Indica onde a base de dados está armazenada e qual sistema de arquivos está sendo utilizado para armazená-la. Essa opção não pode ser modificada.")]),a._v(" "),o("li",[o("strong",[a._v("Tratar esses valores como valores nulos (opcional)")]),a._v(": Define um valor (ou uma expressão) a ser tratado como nulo ou ausente na base de dados. Caso esse valor apareça, o mesmo será convertido para "),o("strong",[a._v("null")]),a._v(" na plataforma Lemonade. Exemplos de possíveis opções:  “n/a”, “none”, “NA” ou “?”.")]),a._v(" "),o("li",[o("strong",[a._v("Usar a primeira linha como cabeçalho")]),a._v(": Se marcado, define que a primeira linha da base de dados como cabeçalho.")]),a._v(" "),o("li",[a._v("Multilinhas (atributo com quebra de linha): Se marcado, define que existirá um atributo explícito indicando a quebra de linha.")]),a._v(" "),o("li",[o("strong",[a._v("Delimitador de atributos (apenas CSV)")]),a._v(": Indica o delimitador de atributos (ou variáveis) utilizado pela plataforma para arquivos no formato CSV. Possíveis opções: “,” (vírgula), “;” (ponto-e-vírgula), “.” (ponto), “{tab}”, “{new_line \\n}” ou “{new_line \\r\\n}”.")]),a._v(" "),o("li",[o("strong",[a._v("Delimitador de registro (apenas CSV)")]),a._v(": Indica o delimitador de registros (exemplos ou instâncias) utilizado pela plataforma para arquivos no formato CSV. Possíveis opções: “,” (vírgula), “;” (ponto-e-vírgula), “.” (ponto), “{tab}”, “{new_line \\n}” ou “{new_line \\r\\n}”.")]),a._v(" "),o("li",[o("strong",[a._v("Delimitador de texto (apenas CSV)")]),a._v(": Indica o delimitador de texto (String) utilizado pela plataforma para arquivos no formato CSV. Possíveis opções:  “ '' ” (aspas duplas) ou “ ‘  ” (aspas simples).")]),a._v(" "),o("li",[o("strong",[a._v("Codificação (opcional)")]),a._v(": Indica o tratamento de codificação de caracteres a ser usado na base de dados. Possíveis opções: “ISO-8859-1”, “UTF-8” ou “UTF-16”.")])])]),a._v(" "),o("li",[o("p",[a._v("Em relação às opções de botões, têm-se:")]),a._v(" "),o("ul",[o("li",[o("strong",[a._v("Salvar")]),a._v(": Salva a base de dados com as modificações realizadas pelo usuário.")]),a._v(" "),o("li",[o("strong",[a._v("Cancelar")]),a._v(": Cancela a edição da base e volta para a aba de bases de dados.")]),a._v(" "),o("li",[o("strong",[a._v("Inferir")]),a._v(" esquema: Infere o esquema de atributos da base de dados, sem necessitar da adição manual. Para isso, é obrigatoriamente necessário especificar o delimitador de texto no caso do CSV. Caso a base tenha cabeçalho, o usuário deverá a marcar a opção Usar a primeira linha como cabeçalho. No caso da base Iris, o delimitador de texto é a o caractere de vírgula (“ , “)  e a mesma não possui cabeçalho predefinido.")]),a._v(" "),o("li",[o("strong",[a._v("Pré-visualização")]),a._v(": Pré-visualiza a base de dados no formato atualmente definido, seja ele o formato padrão da plataforma ou no formato alterado pelo usuário.")])]),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image83.png",alt:"Pré Visualização"}})])])]),a._v(" "),o("p",[a._v("Para editar os atributos da base de dados, clique na aba "),o("strong",[a._v("Atributos")]),a._v(" dentro da seção "),o("strong",[a._v("Base de dados")]),a._v(". É possível editar os nomes dos atributos (mesmo quando existe cabeçalho predefinido), alterar o tipo desses atributos (decimal, data, caractere, texto, etc), alterar o seu formato e sua representação em relação a dados ausentes ou nulos (por exemplo,  “n/a”, “none”, “NA” ou “?”) . Neste tutorial, apenas iremos renomear os nomes dos atributos inferidos da base Iris para os seus "),o("a",{attrs:{href:"http://archive.ics.uci.edu/ml/datasets/Iris?ref=datanews.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("verdadeiros nomes"),o("OutboundLink")],1),a._v(" ("),o("em",[a._v("sepal length")]),a._v(", "),o("em",[a._v("sepal width")]),a._v(", "),o("em",[a._v("petal length")]),a._v(", "),o("em",[a._v("petal width")]),a._v(" e "),o("em",[a._v("class")]),a._v("),  Portanto, o esquema da base de dados Iris ficará da seguinte forma:"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image110.png",alt:"Editar atributos"}})]),a._v(" "),o("p",[a._v("Para salvar as mudanças feitas nos atributos, clique em "),o("strong",[a._v("Salvar")]),a._v(", e para pré-visualizar a base formatada, clique em "),o("strong",[a._v("Pré-visualização")]),a._v(". A imagem a seguir será mostrada para o usuário, como pré-visualização da base editada."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/documentacao-geral/utilizacao-basica-da-plataforma-lemonade/image78.png",alt:"Pré Visualização"}})]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=r.exports}}]);