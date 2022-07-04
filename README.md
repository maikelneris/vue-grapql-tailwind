# Ignite Lab da RocketSeat em VUEJS

Esta é uma implementação do projeto ensinado pela RocketSeat no Ignite Lab 2022. Mas feito em VUEJS!

Trata-se de uma plataforma para exibição de vídeos após cadastro de email. Os vídeos e os assinantes são armazenados no graphcms.com e acessados através da API em graphql.

O projeto conta com:
- Apollo Vue para gerenciar as requisições de graphql;
- Graphcms.com - sistema gerenciador de conteúdo que disponibiliza os dados em uma API graphql.

ATENÇÃO: todos os direitos desse projeto sobre o visual são da ROCKETSEAT!!! Eles criaram o visual do projeto e também deram as aulas de como fazer a implementação em ReactJS - esse repositório é uma releitura do Ignite Lab 2022 replicando o projeto em VUE JS

### Instalando as dependências
```
npm install
```

### Projeto no Graphcms
Você pode clonar o database no graphcms usado nesse projeto clicando no link abaixo:
[![Clone project](https://graphcms.com/button)](https://app.graphcms.com/clone/41983f56bff6490d9ad8ad51382e5c55?name=Ignite%20Lab%20Rocketseat%20in%20VUE)

### Configuração das variáveis
Crie um arquivo .env.local na raiz do projeto e defina as seguintes variáveis:
```
VUE_APP_GRAPH_CMS_URI="" //a url de acesso ao conteúdo da API
VUE_APP_GRAPH_CMS_TOKEN="" //o token secreto de acesso
```

### Próximas etapas
O projeto ficou bem "cru" porque o Ignite Lab é apenas para dar um gostinho de como Javascript pode ser poderoso para criar interfaces e sistemas serverless. Algumas ideias que quero implementar:

- redirecionamento do usuário na página inicial caso ele já tenha cadastrado o email;
- verificar no graphcms se o email já existe e direcionar para as aulas;
- página inicial da aula com a última aula liberada;
- criação dos componentes de desafios das aulas.
