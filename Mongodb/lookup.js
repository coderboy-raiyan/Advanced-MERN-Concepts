db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authors",
      foreignField: "_id",
      as: "creatorsName",
    },
  },
])[
  {
    _id: ObjectId("6401e6543964156cd5bbab15"),
    name: "complete DSA with Raiyan",
    authors: [ObjectId("6401e5ad3964156cd5bbab14")],
    creatorsName: [
      {
        _id: ObjectId("6401e5ad3964156cd5bbab14"),
        name: "Raiyan R.",
        age: "22",
      },
    ],
  }
];
