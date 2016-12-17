const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let Pet;

const PetSchema = new mongoose.Schema({
    petName: { type: String },
    type: { type: String },
    age: { type: String },
    gender: { type: String },
    breed: { type: String },
    location: { type: String },
    petId: { type: String },
    adoptionStatus: { type: String },
    moreInfo: { type: String }
});

PetSchema.virtual('pet type').get(function(){
  return `${this.petName} ${this.petType}
          ${this.petAge} ${this.petLocation}`
})

Pet = mongoose.model('pet', PetSchema);

module.exports = Pet;
