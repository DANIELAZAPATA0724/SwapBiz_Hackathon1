import express from 'express';
import  v1CategoriesRouter  from './v1/routes/categoriesRouter.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3012;

app.use(express.json());
app.use("/api/v1/categories", v1CategoriesRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});