import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends',
  { useNewUrlParser: true });

const friendSchema = new mongoose.Schema({
  fristName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  age: {
    type: String
  },
  contacts: {
    type: Array
  }
});

const Friends = mongoose.model('friends', friendSchema);

//SQL

const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: './aliens.sqlite',
});

const Aliens = sequelize.define('aliens', {
  firstName: {type: Sequelize.STRING},
  lastName: {type: Sequelize.STRING},
  planet: {type: Sequelize.STRING},
});

Aliens.sync({ force: true }).then(() => {
  _.times(10, (i) => {
    Aliens.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      planet: casual.word,
    });
  });
});

export { Friends, Aliens };
