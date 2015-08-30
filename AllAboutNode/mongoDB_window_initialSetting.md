## Open a command line at the folder in which mongoDB is installed.
```
  cd C:\Program Files\MongoDB\Server\3.0\
```

## And make a config file
```
  copy con mongod.cfg

  logpath=C:\mongo\log
  dbpath=c:\mongo\data\db
```

## Finally, start the service of MongoDB using the demon.
```
  mongod.exe --config "C:\Program Files\MongoDB\Server\3.0\mongod.cfg" --install
  net start MongoDB
```
