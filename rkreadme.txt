
Deploying Heroku ---------------------------------------

1. sudo snap install heroku --classic
2. heroku login
3. git clone < YOUR GIT clone LINK>
4. cd <to your clone git dir.> 
5. heroku create
6. git push heroku master
7. heroku ps:scale web=1
8. heroku open 

Make changes to existing heroku code --------------------------

1. clone the git 
2. git clone < YOUR GIT clone LINK>
3. cd <to your clone git dir.> 
4. git add .
5. commit the changes using git commit -m "anything"
6. git push heroku master
7. heroku open

mlab has to configure in code to use database in your project
mlab username : rahulgupta.imt12@gmail.com
mlab password : testrahul@321
heroku username : rahulgupta.imt12@gmail.com
heroku password : testrahul@321