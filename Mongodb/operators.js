/*
===== Operators and Projection Operators ======
Docs : - https://www.mongodb.com/docs/manual/reference/operator/query/
*/
// Comparison
/* $eq, $lt, $lte, $gte, $ne, $in */
db.movies.find({ runtime: { $ne: 60 } });
