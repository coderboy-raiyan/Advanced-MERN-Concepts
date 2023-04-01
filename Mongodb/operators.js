/*
===== Operators and Projection Operators ======
Docs : - https://www.mongodb.com/docs/manual/reference/operator/query/
*/
// Comparison
/* $eq, $lt, $lte, $gte, $ne, $in */
db.movies.find({ runtime: { $ne: 60 } });

// Query on embedded documents
db.movies.find({ "ratings.average": { $gt: 7 } }); // You can go deep nested by using (.)
db.movies.find({ genres: ["drama"] }); // Array -> data will give exact with this value

// Logical Operators
db.inventory.find({
  $and: [{ price: { $ne: 1.99 } }, { price: { $exists: true } }],
});

// Element Operators
db.user.find({ age: { $exists: true, $ne: null } });
