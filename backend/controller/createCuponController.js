const CuponSchema = require("../model/cuponSchema")


const createCuponController = async (req, res) => {

    let { cupon, cuponType, cuponAmount, cuponRang } = req.body

    let existingCupon = await CuponSchema.find({ cupon: cupon })

    if(existingCupon.length > 0){
        return res.send("Cupon is already exists")
    }else{
        if(cuponAmount > 100){
            if(cuponType == "percent" || cuponType == "freeDelivary"){
                return res.send("invalid cupon for percent or reeDelivary")
            }
            else{
                let data = new CuponSchema({
                    cupon: cupon,
                    cuponAmount : cuponAmount,
                    cuponRang : cuponRang, 
                    cuponType: cuponType,

                }) 

                data.save()

                res.send(data)
                console.log("done");
            }
        }else if(cuponAmount > 50){
            if(cuponType == "freeDelivary"){
                return res.send("invalid cupon for Delivary")
            }else{
                let data = new CuponSchema({
                    cupon: cupon,
                    cuponAmount : cuponAmount,
                    cuponRang : cuponRang, 
                    cuponType: cuponType,

                }) 

                data.save()

                res.send(data)
                console.log("done");
            }
        }else{
            let data = new CuponSchema({
                cupon: cupon,
                cuponAmount : cuponAmount,
                cuponRang : cuponRang, 
                cuponType: cuponType,

            }) 

            data.save()

            res.send(data)
            console.log("done");
        }
    }

    // if (existingCupon.length > 0) {
    //      res.send("cupon exist")
    // } else {
    //     if (cuponType == "freeDelivary") {
    //         if (cuponAmount > 50) {
    //              res.send("cupon invalid for delivary")
    //         }
    //     } else if (cuponType == "percent") {
    //         if (cuponAmount > 100) {
    //              res.send("cupon invalid for percent")
    //         }
    //     } else {
    //         let data = new CuponSchema({
    //             cupon: cupon,
    //             cuponAmount: cuponAmount,
    //             cuponRang: cuponRang,
    //             cuponType: cuponType,

    //         })

    //         data.save()

    //         res.send(data)
    //         console.log("done");
    //     }
    // }


}
module.exports = createCuponController