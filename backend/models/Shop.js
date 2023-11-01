const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    listings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        unique: true
      }
    ],
    description: {
      type: String
    }
  },
  {
    collection: 'shops',
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

module.exports = mongoose.model('Shop', shopSchema);
