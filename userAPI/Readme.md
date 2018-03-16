#Build image
docker build -f Dockerfile . -t userapi

#Run image
#Configure app.env to add mongodb db and port details
docker run -p 127.0.0.1:3000:3000 --env-file app.env userapi

#Testing
This api provides get and create operation for user model which has 2 fields viz. username which is unique and address

Post JSON to create new user
http://localhost:3000/user

Get all users
http://localhost:3000/user

