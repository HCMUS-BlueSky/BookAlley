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
    logo: {
      type: String,
      default:
        'https://firebasestorage.googleapis.com/v0/b/bookalley-b6495.appspot.com/o/assets%2Fshops%2Fa21c7c2b-08f4-45d5-8d19-b34370c84b22.png?alt=media&token=8caa9d83-cfa3-452a-b859-87dd269e6777'
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
    },
    followers: {
      type: Number,
      min: 0,
      default: 0
    }
  },
  {
    collection: 'shops',
    virtuals: {
      id: {
        get() {
          return this._id;
        }
      },
      product_count: {
        get() {
          return this.listings.length;
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
