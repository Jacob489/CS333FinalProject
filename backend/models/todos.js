import mongoose from 'mongoose'

let TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    default: null
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false
  },
  time: { //adds a third field to the schema for time with a type string and an initial value of null
    type: String,
    default: null,
    
  },
}, {
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
})

export const Todo = mongoose.model('Todo', TodoSchema)

