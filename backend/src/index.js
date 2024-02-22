import express from 'express';
import  v1CategoriesRouter  from './v1/routes/categoriesRouter.js';
import  v1ServiceRouter  from './v1/routes/serviceRouter.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3012;

app.use(express.json());
app.use("/api/v1/categories", v1CategoriesRouter);
app.use("/api/v1/services", v1ServiceRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});