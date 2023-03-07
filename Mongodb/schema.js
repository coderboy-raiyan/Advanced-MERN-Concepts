db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator", "comments"],
      properties: {
        title: {
          bsonType: "string",
          description: "title is required",
        },
        text: {
          bsonType: "string",
          description: "text is required",
        },
        creator: {
          bsonType: "objectId",
          description: "creator is required",
        },
        comments: {
          bsonType: "array",
          description: "comments is required",
          items: {
            bsonType: "object",
            required: ["text", "author"],
            properties: {
              text: {
                bsonType: "string",
                description: "text is required",
              },
              author: {
                bsonType: "objectId",
                description: "author is required",
              },
            },
          },
        },
      },
    },
  },
});
