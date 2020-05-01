
## Dino Chrome on TS

A simple code to learn Typescript with fun
  

## Usage

  
Up docker:
```
docker-compose up -d
```

Enter on container:
```
docker exec -it backend /bin/sh
```

Execute the project:
```
npm start
```

The project will run on port 8080, if want to change please edit the file `backend/browser-sync.json` on property __port:__ and on container (`docker-compose.yml` and `docker/backend/Dockerfile`)
## Inpired by

https://github.com/omariosouto/flappy-bird-devsoutinho

https://medium.com/@PhilippKief/how-to-debug-typescript-with-vs-code-9cec93b4ae56