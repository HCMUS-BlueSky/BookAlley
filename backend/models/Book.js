const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    translator: {
      type: String
    },
    publisher: {
      type: String
    },
    provider: {
      type: String
    },
    year_published: {
      type: Number,
      min: 0
    },
    weight: {
      type: Number,
      min: 0,
      default: 0
    },
    size: {
      type: String
    },
    pages: {
      type: Number,
      min: 0
    },
    binding_method: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      validate: [
        {
          validator: (path) => /^\/[/.a-zA-Z0-9-_]+$/.test(path),
          msg: 'Invalid image path'
        }
      ]
    },
    description: {
      type: String
    },
    tags: {
      type: [String]
    },
    instock: {
      type: Number,
      default: 0
    },
    sold: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
    language: {
      type: String
    }
  },
  {
    collection: 'books',
    virtuals: {
      id: {
        get() {
          return this._id;
        }
      }
    },
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

bookSchema.index({ name: 1, author: 1 }, { unique: true });

module.exports = mongoose.model("Book", bookSchema);