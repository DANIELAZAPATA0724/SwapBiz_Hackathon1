import  ServiceModel  from "../models/serviceModel.js";


const ServiceController = {
    getAllServices: async (req, res) => {
        try {
            const services = await ServiceModel.findAll()
            res.json(services)
        } catch (error) {
            res.json( {message: error.message} )
        }
    },


    getService: async (req, res) => {
        try {
            const services = await ServiceModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(services[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
},
    createNewService: async (req, res) => {
        try {
            const { body } = req;
    
            if (!body.name || !body.price || !body.category_id || !body.description) {
                return res.status(400).send("Faltan campos obligatorios");
            }
    
            const newService = {
                user_id : "1",
                is_available: "1",
                name: body.name || '', 
                description: body.description || '', 
                price: body.price || '',
                category_id: body.category_id || '' 
            };
            
            const createdService = await ServiceModel.createNewService(newService);
            console.log (createdService)
            res.status(201).json({ status: "OK", data: createdService });
        } catch (error) {
            console.error("Error al crear un nuevo servicio:", error);
            res.status(500).send("Ocurrió un error al crear un nuevo servicio");
        }
    },
    updateOneService: async (req, res) => {
        console.log(req.params.service_Id, req.body);
        try {
          const updatedService = await ServiceModel.updateOneService(req.params.service_Id, req.body);
          res.json(updatedService);
        } catch (error) {
          console.error("Error al actualizar el servicio:", error);
          res.status(500).send("Ocurrió un error al actualizar el servicio");
        }
      },
    
      deleteOneService: async (req, res) => {
          await ServiceModel.deleteOneService(req.params.service_Id);
          res.send(`Service ${req.params.service_Id} has been deleted`);
       
      },
      updateStock: async (req, res) => {
        const updateStock = await ServiceModel.updateStock(req.body.is_available)
          if (updateStock) {
            res.json({ message: "Stock y disponibilidad actualizados correctamente" });
          } else {
            res.status(500).json({ error: "Ocurrió un error al actualizar el stock del servicio" });
          }
      },
    }
  
export default ServiceController;