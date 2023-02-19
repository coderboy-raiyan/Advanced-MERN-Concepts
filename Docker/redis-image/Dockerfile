# use existing image as a base
FROM alpine

# Download and Install dependecy
RUN apk add --update redis 

# Tell the image what to do when it runs as a container
CMD ["redis-server"]

