```
# to create and Run a container

docker run hello-world

# to pass a command after running a container

docker run busybox echo hi there

# to see which container is running command

docker ps

# to see the history of all container

docker ps --all

# to create a container on Docker and run a command

docker create hello-world <command>

# to start container

docker start -a <container ID> -> here -a means run the show the output on my terminal

# to Remove all that stop container

docker system prune

# see the docker logs of a particular container

docker logs <container ID>

# to shutdown any container
# It's better than docker stop
docker kill <container ID>
docker stop <container ID>

<!-- # to execute more commands in a running container -->
<!-- # -it flag is very important here...for pass input after running -->
docker exec -it <container ID> <command>


<!-- # to make a fully command prompt inside a container -->
docker exec -it <container ID> sh

<!-- # directly run command prompt in a fresh start -->

docker run -it redis sh

<!-- to build and image -->

docker build .

<!-- to build and image with a name -->
docker build -t raiyan/<project name> .
```
