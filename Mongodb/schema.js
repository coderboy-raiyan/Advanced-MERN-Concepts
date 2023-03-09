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

db.createCollection("messages", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["sender", "receiver", "text"],
      properties: {
        sender: {
          bsonType: "objectId",
          description: "sender is required",
        },
        receiver: {
          bsonType: "objectId",
          description: "receiver is required",
        },
        text: {
          bsonType: "string",
          description: "text is required",
        },
      },
    },
  },
});
