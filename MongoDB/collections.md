## basically when we want to make collections.
### first make or select the database.
```
use [database_name];
```
### try to make the collection.
```
db.createCollection("articles");
show collections
```
### there are some options when we make the collection. ('capped' option should be with 'max' option.)
```
db.createCollection("blogs",{capped:true, autoIndexID:true, size:3679000, max:1000});
```
### if all commands are true, below screen will be seen.
```
{
  "ok": 1
}
```

## drop(remove) the colleciton.
```
db.[collection_name].drop();
```
