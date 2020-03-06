# Guess the game - api

This repository hosts the nodejs API sources and docker-compose for the api, the database, and phpmyadmin.

Game prod url: https://guess-the-game.com

## Install

- Create an .env file, which will contain credentials for cloudinary, mailgun, google recapchta, and mariadb

```
cp .env.example .env
```

- Fill in the .env file

- Start the containers

```
docker-compose up -d
```

- Fill the database from backup

```
docker exec -i guessthegame-mariadb sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < /path/to/backup.sql
```

## Contribute

Fell free to contribute in any way you like !

Have fun :-)