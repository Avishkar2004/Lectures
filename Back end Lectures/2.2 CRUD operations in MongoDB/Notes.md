mongodump:-

- mongodump works as a utility to take the contents of a database and create a binary export.
- this one of the methods for them to back up and restore databases (collections).

- mongodump can save everything in a single file, while mongorestore can later be used to completely restore the database.

syntax :-

mongodump <options> <connection-string>

Using mongodump to back up a collection

mongodump --uri="mongodb://user:password@localhost:27107/almabetter?ssl=false&authSource=admin"

- Another example mongodump command using the standard flags would look like this:

mongodump --user=user --db=almabetter --password=password --authenticationDatabase=admin

=============================================================================================================================

- mongoexport
  mongoexport commands works in a similar manner as the mongodump, but it exports the data in JSON format which is human-readable.

syntax :-
mongoexport --collection=<coll> <options> <connection-string>

- If you connect to the localhost MongoDB instance running on port 27017, you don’t need to specify the host and port.

- mongoimport

The mongoimport command has the following form:

mongoimport <options> <connection-string> <file>

However, before importing data, you must first ensure to connect mongoimport utility to your MongoDB instance. While there are several ways to connect mongoimport to your MongoDB database, it is recommended to use the –-uri option, like this:

mongoimport --uri 'mongodb+srv://mycluster-ABCDE.azure.mongodb.net/test?retryWrites=true&w=majority'
--username='MYUSERNAME'
--password='SECRETPASSWORD'

===========================================================================================================================

Querying Data in MongoDB

- In MongoDB, the db.collection.find() method is used to retrieve documents from a collection. This method returns a cursor to the retrieved documents.

- The db.collection.find() method reads operations in mongoDB shell and retrieves documents containing all their fields.

syntax :-

# db.COLLECTION_NAME.find({})

Querying individual fields :-

- At the end of the previous step, you used MongoDB’s find() method to return every document from the peaks collection. A query like this won’t be very useful in practice, though, as it doesn’t filter any documents and always returns the same result set.

=======================================================================================================================

Creating and Manipulating Documents

The documents in this directory will follow a format similar to this example, which represents The Pyramids of Giza:

{
"name": "The Pyramids of Giza",
"city": "Giza",
"country": "Egypt",
"gps": {
"lat": 29.976480,
"lng": 31.131302
}
}

Insert this document into a new collection called monuments using the insertOne method. As its name implies, insertOne is used to create individual documents, as opposed to creating multiple documents at once.

In the MongoDB shell, run the following operation:

db.monuments.insertOne(
{
"name": "The Pyramids of Giza",
"city": "Giza",
"country": "Egypt",
"gps": {
"lat": 29.976480,
"lng": 31.131302
}
}
)

Updating Documents

- insertOne() and insertMany() methods, MongoDB provides methods that allow you to update either a single document or multiple documents at once.

Try changing the name of Arc de Triomphe to the full name of Arc de Triomphe de l’Étoile. To do so, use the updateOne() method which updates a single document:

db.monuments.updateOne(
{ "name": "Arc de Triomphe" },
{
$set: { "name": "Arc de Triomphe de l'Étoile" }
}
)

- { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

To modify more than one document, you can instead use the updateMany() method.


=======================================================================================================================


Deleting Documents

- As with Mongo’s update and insertion operations, there is a deleteOne() method, which removes only the first document matched by the query filter document, and deleteMany(), which deletes multiple objects at once.

db.monuments.deleteOne(
{ "name": "Arc de Triomphe de l'Étoile" }
)

{ "acknowledged" : true, "deletedCount" : 1 }

db.monuments.deleteMany(
{ "name": "Arc de Triomphe de l'Étoile" }
)

{ "acknowledged" : true, "deletedCount" : 7 }

db.monuments.count()
//OUTPUT
0
