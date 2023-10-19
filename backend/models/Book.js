const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
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
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shop'
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
      type: String
    },
    description: {
      type: String
    },
    tags: [
      {
        type: String,
        enum: {
          values: [
            'science',
            'action',
            'cookbooks',
            'horror',
            'romance',
            'literature',
            'economics',
            'psychology',
            'manga',
            'comic',
            'novel',
            'history',
            'geography',
            'religion'
          ],
          message: '{VALUE} is not a valid tag'
        }
      }
    ],
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
    statics: {
      getTagList() {
        return this.schema.path('tags.0').enumValues;
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