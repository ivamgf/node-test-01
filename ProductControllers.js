// Product Controller

// Const
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Exports
module.exports = {
    // Function Index
	async index(req, res) {
		const { page = 1 } = req.query;
	const products = await Product.paginate({}, { page, limit: 10 });

	return res.json(products);
    },

    // CRUD
    // Get Function
    async show(req, res) {
        // Consulta
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Post Function
    async store(req,res) {
        // Registro
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Put Function
    async update(req,res) {
        // Update
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,
    { new: true });

        return res.json(product);
    },

    // Delete Function
    async destroy(req,res) {
        // Delete
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }

};
