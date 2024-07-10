## TO-DO 
 - [x] build navbar
 - [x] setup example cron and successfully execute
 - [ ] build cron job for importing F1 schedule from gcal
 - [ ] build unit tests for server-side work
 - [ ] replicate for additional schedules
 - [ ] setup mongodb data import
 - [ ] create models for retrieving data
 - [ ] build homepage schedule component
 - [ ] build schedule selection page
 - [ ] build login page
 - [ ] build signup page
 - [ ] build each sport page?
 - [ ] stylize and clean up navbar
 - [ ] build cron job page
   * add to admin page

## data gathering (google docs)
 - [ ] motorsport
   - [x] F1 (2024)
      - [x] drivers
      - [x] teams
      - [x] schedule
   - [ ] F2 (2024)
      - [x] drivers
      - [x] teams
      - [ ] schedule
   - [ ] F3 (2024)
      - [x] drivers
      - [ ] teams
      - [ ] schedule
   - [ ] F1 Academy (2024)
   - [ ] Indycar
      - [x] drivers
      - [ ] teams
      - [ ] schedule
   - [ ] IndyNXT
      - [x] drivers
      - [ ] teams
      - [ ] schedule
   - [ ] IMSA/WEC
   - [ ] GT World Challenge
   - [ ] NASCAR
      - [x] drivers
      - [ ] teams
      - [ ] schedule
 - [ ] basketball
   - [ ] NBA
      - [ ] players
      - [x] teams
      - [ ] schedule
   - [ ] NCAAB
   - [ ] NCAAW
   - [ ] WNBA
   - [ ] G-League
   - [ ] Euro?
 - [ ] american football
   - [ ] NFL
      - [ ] players
      - [x] teams
      - [ ] schedule
   - [ ] NCAAF
   - [ ] CFL
   - [ ] UFL
 - [ ] soccer (european football)
   - [ ] Premier League
   - [ ] Champion League
   - [ ] League 1
   - [ ] League 2
   - [ ] National League
 - [ ] golf
   - [ ] PGA
   - [ ] NCAAG
   - [ ] LIV
 - [ ] baseball
   - [ ] MLB
   - [ ] NCAA
   - [ ] Minor League
 - [ ] hockey
   - [ ] NHL
   - [ ] NCAAH
   - [ ] Minor League?
 - [ ] combat
   - [ ] UFC
   - [ ] Boxing
   - [ ] Wrestling
 - [ ] xtreme
   - [ ] x games
   - [ ] nitrocross

## MERN-Docker - Starter for building MERN Apps using Docker

![MERN DOCKER diagram](https://github.com/sujaykundu777/mern-docker/blob/master/3-tier-diagram.png?raw=true)
### Prerequisites:

You must have Docker Installed in your System !

### How to run the App :

Article - ![Tutorial](https://dev.to/sujaykundu777/utilizing-the-power-of-docker-while-building-mern-apps-using-mern-docker-4olb)

##### In Development Mode :

First copy the content of **docker-compose-dev.yml** to **docker-compose.yml**

and also copy the content of **server/src/index.dev.js** to **server/src/index.js**

Run the app using :

`$ docker-compose up --build --remove-orphans`

or

`$ docker-compose up -d`

Above command will start the services on (-d) detach mode (similar like running the app in background)

Then you can check the status of the containers by running:

`$ docker ps`

The App should be App :

visit client : http://localhost:3000

visit server : http://localhost:8080

To check the status of the running containers :

`docker-compose ps`

##### In Production Mode :

First copy the content of **docker-compose-prod.yml** to **docker-compose.yml**

and also copy the content of **server/src/index.prod.js** to **server/src/index.js**

Run the app using :

` $ docker-compose up --build -remove-orphans`

The App should be up at http://localhost:8080

### Build the image for server :
docker build -t myapp-server:1 .
docker images
docker run --name "myapp-server" -p 80:8080 myapp-server:1
docker ps