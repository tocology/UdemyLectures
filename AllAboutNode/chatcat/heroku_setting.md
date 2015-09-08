## heroku access at that root folder. * you need administrator.
```
  heroku login
```
## setting git
```
  git init
  heroku git:remote -a chatcat-tocology // personal repository name
  git remote -v // check
```
## push all the files to heroku
```
  git add .
  git commit -m "ChatCAT first commit"
  git push heroku master
```
## acivate dyno
```
  heroku ps:scale web=1 // check
```
## switch production mode
```
  heroku config:add NODE_ENV=production
```
