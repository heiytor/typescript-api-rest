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
![get-200](https://user-images.githubusercontent.com/107213601/197375363-7830ecec-e5a0-415b-852c-7d4dab146e14.png)

### POST | http://localhost:3333/
No método POST é criado um novo usuário. Enviamos por JSON, no body, os campos da tabela, sendo eles: firstName, lastName e email. Sendo lastName opcional, caso o pedido seja aceito, uma requisição HTTP 201 é retornada, caso a sintaxe esteja errada, uma 406 é retornada:
![post-201](https://user-images.githubusercontent.com/107213601/197375348-a23c019d-0e69-4e44-9a25-bdaa720d19f8.png)
![post-406](https://user-images.githubusercontent.com/107213601/197375352-72500417-bea2-4f24-ad35-1bb54476b194.png)

### PUT | http://localhost:3333/:id
No método PUT, enviamos o ID do usuário que desejamos atualizar nos parametros, também por JSON e no body, os campos a serem alterados. Caso o ID seja válido, um código HTTP 200 é retornado, caso não, retorna-se um 404:
![put-200](https://user-images.githubusercontent.com/107213601/197375339-41efb9f4-1099-413e-9508-9d8e8610b319.png)
![put-404](https://user-images.githubusercontent.com/107213601/197375342-d3d340e5-bd7e-41e8-ad03-d9e9762d720b.png)

### DELETE | http://localhost:3333/:id
No método DELETE, enviamos o ID do usuário que desejamos deletar nos paramêtros. Caso o ID seja válido, um código HTTP 202 é retornado, caso não, retorna-se um 404::
![delete-202](https://user-images.githubusercontent.com/107213601/197375332-a7c1e448-f9c2-4412-93b1-d7f2a206ad74.png)
![delete-404](https://user-images.githubusercontent.com/107213601/197375334-08f99c49-069e-4e82-b677-a5f6ffce5835.png)
