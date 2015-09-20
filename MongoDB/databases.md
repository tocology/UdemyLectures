## first, make or use a database
```
use [database_name];
```
> if we don't have the database, the use command make the database directly.

## make any documents with any collection
```
db.articles.insert({name: "mongo intro", category: "database", tags: ["nosql","db","bigdata"]})
```
> we don't need to make the collection before. MongoDB just make all of anythings within our commands.

## find(select) the documents in the collection
```
db.articles.find()
db.articles.find().pretty()
```

## we make the documents by variables in the MongoDB
```
var articleInfo={};
articleInfo.articleName="MongoDB Introduction";
articleInfo.authorName="Sunil G";
articleInfo.tags=["database","NoSQL","DBA","Dev"];
articleInfo.metaData={};
articleInfo.metaData.authors=["Sunil G", "Kumar"];
articleInfo.metaData.description="About MongoDB";
articleInfo.metaData.created_on= new Date();
db.articles.save(articleInfo);
```
> save command is very important at that time.

## drop the database
```
use myblogs
db.dropDatabase();
```
> first of all, we have to select(use) the database
