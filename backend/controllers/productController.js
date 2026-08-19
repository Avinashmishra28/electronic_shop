
import Product from "../models/Product.js";

export const CreateProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.json({
            message: 'product created successfully',
            product,
        })
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error});
    }
};


export const getProduct = async (req, res) => {
    try{
         const {search, category} = req.query;

         let filter = {};
 
         if(search) {
            filter.title = { $regex: search, $options: 'i'}; // case-insensitive search
         }

         if(category) {
            filter.category = category;
         }

         const product = await Product.find(filter).sort({ createdAt: -1 });
         res.json(product);

    } catch (error){
        res.status(500).json({ message: 'Server error', error});
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({
            message: 'product updated successfully',
            updated,
        });
    } catch (error) {
         res.status(500).json({ message: 'Server Error', error });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'product deleted successfully'});
    } catch (error) {
         res.status(500).json({ message: 'Server Error', error });
    }
}