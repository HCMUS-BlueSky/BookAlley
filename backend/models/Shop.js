const mongoose = require("mongoose");

var shopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
      }
    ]
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
