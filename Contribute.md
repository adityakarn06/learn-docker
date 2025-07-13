## Manual Installation
 - Install nodejs locally
 - Clone the repo
 - Install dependencies (npm install)
 - Start the db locally
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - go to neon.tech and get a db
 - change .env file and update credentials (DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres")
 - npx prisma migrate dev
 - npx primsa generate
 - npm run build
 - npm run start

## Docker Installaton
 - Install Docker
 - Create a network - `docker network create learn_network`
 - Start postgres
    - docker run --network learn_network --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - Build the image - `docker build --network=host -t learn-docker .`
 - Start the image - `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network learn_network -p 3000:3000 learn-docker`


## Docker Compose Installation Steps
 - Install docker, docker-compose
 - Run `docker-compose up`