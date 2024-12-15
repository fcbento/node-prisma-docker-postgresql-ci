# Find a friend

A project created to practice Docker, Node.js, TypeScript, Prisma, PostgreSQL, Fastify and Vitest. JWT for authentication and authorization. Also CI using Github actions for running both unit tests and e2e tests. Basically an application for animal adoption, using some of the SOLID principles. This was actually a challenge that I had to create for a Node.js course I'm currenly taking.

## Prerequisites

Requirements for running the app locally
- [Docker](https://www.docker.com/)
- [Node](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)


## How to use

```bash
# Clone this repository
$ git clone https://github.com/fcbento/node-prisma-docker-postgresql-ci.git

# Go into the repository
$ cd node-prisma-docker-postgresql-ci

# Install dependencies
$ npm install

# Start container
$ docker compose up --detach
$ docker container ls

# Create migrations
$ prisma migrate dev

# Run the app
$ npm run start:dev

# Unit tests
$ npm run test

# E2e tests
$ npm run test:e2e
```

## Key Features

### Application Rules

- [x] It must be possible to register a pet  
- [ ] It must be possible to list all pets available for adoption in a city  
- [ ] It must be possible to filter pets by their characteristics  
- [ ] It must be possible to view details of a pet available for adoption  
- [x] It must be possible to register as an ORG  
- [x] It must be possible to log in as an ORG  

### Business Rules

- [ ] To list the pets, it is mandatory to provide the city  
- [x] An ORG must have an address and a WhatsApp number  
- [x] A pet must be linked to an ORG  
- [ ] The user who wants to adopt will contact the ORG via WhatsApp  
- [ ] All filters, except for the city, are optional  
- [x] For an ORG to access the application as an admin, it must be logged in  

### DB Schema

[![DB]](schema_db.png)

## Built With

This was created with the following tech stack. I intend to create a front end using Angular with Nx.

[![My Skills](https://skillicons.dev/icons?i=nodejs,typescript,docker,prisma,postgres,vscode,githubactions&perline=3)](https://skillicons.dev)

#### To come
[![My Skills](https://skillicons.dev/icons?i=angular,rxjs,firebase&perline=3)](https://skillicons.dev)

## Top contributors

<a href="https://github.com/fcbento/node-prisma-docker-postgresql-ci/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fcbento/node-prisma-docker-postgresql-ci" alt="contrib.rocks image"/>
</a>

## Contact

[![linkedin](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/felipe-bento)
[![discord](https://skillicons.dev/icons?i=discord)](https://discordapp.com/users/413141379074490369)
[![gmail](https://skillicons.dev/icons?i=gmail)](mailto:felipe.16costa@gmail.com)