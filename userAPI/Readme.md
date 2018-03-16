#Build image
docker build -f Dockerfile . -t userapi

#Run image
docker run -p 127.0.0.1:3000:3000 --env-file app.env userapi