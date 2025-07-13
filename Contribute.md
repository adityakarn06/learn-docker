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
 - Start postgres
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - Build the image - `docker build -t learn-docker .`
 - Start the image - `docker run -p 3000:3000 learn-docker`


## Docker Compose Installation Steps
 - Install docker
 - Run `docker-compose up`