const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [
        {
          validator: (s) =>
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s),
          msg: 'Invalid email'
        }
      ]
    },
    username: {
      type: String,
      required: true,
      trim: true,
      validate: [
        {
          validator: (uname) => uname.length >= 5,
          msg: 'Username too short'
        },
        {
          validator: (uname) => uname.length <= 20,
          msg: 'Username too long'
        },
        {
          validator: (uname) => /^[a-zA-Z0-9]{5,20}$/.test(uname),
          msg: 'Alphanumeric only'
        }
      ]
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      validate: [
        {
          validator: (p) =>
            /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(
              p
            ),
          msg: 'Invalid phone number'
        }
      ]
    },
    birthdate: {
      type: Date,
      trim: true
    },
    verified: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ['user', 'seller', 'admin'],
        message: '{VALUE} is not a valid role'
      },
      default: 'user'
    },
    avatar: {
      type: String
    },
    refresh_token: {
      type: String
    }
  },
  {
    collection: 'users',
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

//Export the model
module.exports = mongoose.model("User", userSchema);
