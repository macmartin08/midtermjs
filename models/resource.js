// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const metahumanSchema = new mongoose.Schema({
	alise: {
		type:String,
		required: true
	},
	fullname:{
		type: String,
		required: true
	},
	affiliation:{
		type: String,
		required: false
	},
	mettype:{
		type: String,
		enum: ['SuperHero','Villain','Antihero '],
		default: 'SuperHero'
	}
},{
		timestamps: true
});

// Exporting our resource model
module.export = mongoose.model('metahumanSchema',metahumanSchema);