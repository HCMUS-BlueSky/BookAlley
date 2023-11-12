const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Book'
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, 'Quantity can not be less then 1!']
        }
      }
    ],
    shipping_info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address'
    },
    voucher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Voucher'
    },
    shipping_method: {
      type: String
    },
    sub_total: {
      type: Number
    },
    total: {
      type: Number
    }
  },
  {
    collection: 'orders',
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

module.exports = mongoose.model('Order', orderSchema);
