 <h1 align="center">API NodeJS</h1>

Escrito com NodeJS, em typescript com o express, usa o prisma e o SQLite pra simular um CRUD. Como pedido na atividade, 4 requisições são feitas (podem ser encontradas tanto no arquivo `'./src/routes/home.ts'`quanto no `'./src/controllers/homeControllers/IHome.ts'`).

<h2 align="center">Como rodar o código</h2>

Para começar, é necessário clonar o repositório com o seguinte comando:
```
git clone (placeholder)
```
Após isso, instale as depências com:
```
npm i
```
Também é necessário iniciar o banco de dados, para cria-lo, rode:
```
npx prisma migrate dev --name init
```
*Caso a seed não ocorra automaticamente, preencha o banco de dados com o seguinte comando: `npx prisma db seed`*

Com isso, todo o projeto estará configurado e pronto para funcionar! A seed se encontra no diretório `./prisma/seed.ts`, um arquivo .db (sqlite) se encontra em `./prisma/dev.db`, no arquivo `./prisma/schema.prisma` está as configurações do prisma, bem como a tabela criada. 
O express é configurado no arquivo `./src/app.ts`, onde a classe já o configura e exporta apenas o app para o `./server.ts`, ali está o método .listen. As rotas se encontram em `./src/routes` e os controllers em `./src/controllers`

Portanto, o servidor já está funcionando normalmente. Para inicia-lo rode o comando `npm run dev`. A partir disso, o servidor irá escutar, por padrão, na porta 3333, é alterável por meio de uma variável no arquivo server.ts.

Pode então, se criar as rotas dentro do insominia, cada uma com os métodos e urls citados abaixo:

### GET | http://localhost:3333/
No método GET retorna todos dados da tabela e um código HTTP 200:

### POST | http://localhost:3333/
No método POST é criado um novo usuário. Enviamos por JSON, no body, os campos da tabela, sendo eles: firstName, lastName e email. Sendo lastName opcional, caso o pedido seja aceito, uma requisição HTTP 201 é retornada, caso a sintaxe esteja errada, uma 406 é retornada:


### PUT| http://localhost:3333/:id
No método PUT, enviamos o ID do usuário que desejamos atualizar nos parametros, também por JSON e no body, os campos a serem alterados. Caso o ID seja válido, um código HTTP 200 é retornado, caso não, retorna-se um 404:

### DELETE | http://localhost:3333/:id
No método DELETE, enviamos o ID do usuário que desejamos deletar nos paramêtros. Caso o ID seja válido, um código HTTP 202 é retornado, caso não, retorna-se um 404::
