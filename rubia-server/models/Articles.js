const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Your explicit trainer log IDs
  name: { type: String, required: true, unique: true }, // The URL-friendly string
  title: { type: String, required: true },
  desc: { type: String }, // Plain text preview description
  content: { type: [String], required: true }, // Array for multi-paragraph content
  author: { type: String, required: true },
  status: { type: String, enum: ['active', 'archived'], default: 'active' }, 
  image: { type: String },
  color: { type: String, default: 'bg-zinc-500' },
  date: { type: String, default: () => new Date().toISOString().split('T')[0] }
}, { timestamps: true });

// FIXED: Removed 'next' parameter since synchronous hooks do not require it
articleSchema.pre('validate', function() {
  if (this.title && !this.name) {
    this.name = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s\-]/g, '') // Remove weird symbols
      .replace(/\s+/g, '-')          // Replace spaces with hyphens
      .replace(/-+/g, '-');          // Clear double hyphens
  }
});

module.exports = mongoose.model('Article', articleSchema);