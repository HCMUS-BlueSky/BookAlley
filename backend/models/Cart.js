const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
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
    checked_out: {
      type: Boolean,
      default: false
    },
    sub_total: {
      type: Number,
      default: 0
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

cartSchema.pre('save', function (next) {
  this.sub_total = 0;
  for (let item of this.items) {
    this.sub_total += item.price * item.quantity;
  }
  next();
});

module.exports = mongoose.model('Cart', cartSchema);
