const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    items: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Book'
        },
        price: {
          type: Number,
          min: 0
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, 'Quantity can not be less then 1!']
        }
      }
    ],
    sub_total: {
      type: Number,
      min: 0
    }
  },
  {
    collection: 'carts',
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

module.exports = mongoose.model('Cart', cartSchema);
