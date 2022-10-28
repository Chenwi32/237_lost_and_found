# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## Packages

--> Typescript
       $ npm i -D typescript
    - To configure node to run with typescript
       $ npx tsc --init
        We uncomented experimentalDecorators and emitDecoratorMetadata for this project in the tscofig file

--> TSnode
       $ npm i ts-node

--> NodeMon
       $ npm i nodemon

--> Express
       $ npm i express
    - Dev dependency
       $ npm i -D @types/express    

--> CORS
       $ npm i cors
    - Dev dependency
       $ npm i -D @types/cors

--> Typeorm to map to database
       $ npm i typeorm --save
    - We need to install reflect-metadata   
       $ npm i reflect-metadata --save
    - We need to install node typing
       $ npm install @types/node --save-dev   
    - Mysql 
       $ npm install mysql --save