const mongoose 				= require('mongoose')
const ObjectId 				= mongoose.Types.ObjectId

const PaymentSchema 	= new mongoose.Schema({
	_userId: {
		type				: ObjectId,
		required		: true,
		ref 				: 'User'
	},
	paymentType: {
		type				: String,
		required 		: true
	},
	madeBy: {
		name: {
			type			: String,
			required	: true
		},
		flatnum: {
			type			: String,
			require		: true
		}
	},
	mode: {
		type				: String,
		required		: true
	},
	amount: {
		type				: Number,
		required		: true
	},
}, { timestamps : true})

const Payment = mongoose.model('Payment', PaymentSchema)

module.exports = Payment