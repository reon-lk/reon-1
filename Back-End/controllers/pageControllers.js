const express = require("express");

const userSchema = require("../models/userSchema");
const pageSchema = require("../models/pageSchema");
const vehicleSchema = require("../models/vehicleSchema")

const mainId = "7777";

// Get page
exports.getPage = async (req,res) =>{
    const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });

    try {
        if (req.user.isPage == 0) {
            res.send(
              "You don't have REON page! Go to '/myPage/create' for create new Page"
            ); // redirect to create page for owner page (/mypage/create)
            // res.redirect("/user/myPage/create");
          }
          if (!page) {
            res.send("page not found");
          }
          if (page.statuses == 0) {
            res.status(202).send("page is not approved");
          }

          if (page.statuses == 2) {
            res.status(401).send("page is blocked");
          }
          
      
          const vehicles = await vehicleSchema.vehicleModel.find({ pId: page.pId, statuses: 1});
          res.json(vehicles); 
    } catch (error) {
        res.send(error)
    }
}

//Add vehicle in the page

exports.addVehicle = async (req, res) => {
    const utcTimestamp = new Date().getTime();
    const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });
    
    try {
        if (!page) {
            res.send("page not found");
          }
          if (page.statuses == 0) {
            res.status(401).send("page is not approved");
          }
          if (page.statuses == 2) {
            res.status(401).send("page is blocked");
          }

          const vehicle = await vehicleSchema.vehicleModel.create({
            vId: mainId + utcTimestamp,
            pId: page.pId,
            category: req.body.category,
            vehicleType: req.body.vehicleType,
            seats: req.body.seats,
            location: req.body.location,
            vehicleName: req.body.vehicleName,
            statuses: "0",
            statusComment: "vehicle added",
            createDate: utcTimestamp,
            updateDate: utcTimestamp,
            tempCategory: req.body.category,
            tempVehicleType: req.body.vehicleType,
            tempSeats: req.body.seats,
            tempLocation: req.body.location,
            tempVehicleName: req.body.vehicleName
            
          });

          res.json(vehicle)
    } catch (error) {
        res.send(error)
    }
}

//update Vehicle details

exports.updateVehicle = async (req, res) => {
    const vehicle = await vehicleSchema.vehicleModel.findOne({ vId: req.params.vId});
    const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });

    try {

        if (!page) {
            res.send("page not found");
        }

        if (page.statuses == 0) {
          res.status(401).send("page is not approved");
        }

        if (page.statuses == 2) {
          res.status(401).send("page is blocked");
        }

        if (!vehicle) {
            res.send("Vehicle not found")
          } 
          // res.json(vehicle)

          const sucess = vehicle.pId == page.pId

          // res.send(sucess)
      
        if (!sucess) {
            res.send("user not authorized")
        }
          if (vehicle.statuses == 4 ) {
            res.send("vehicle is not found");
          }
            
          if (vehicle.statuses == 0 ) {
            res.send("vehicle is not approved");
          }

          if (vehicle.statuses == 4 ) {
            res.send("vehicle is not found");
          }
        
        if (vehicle.statuses == 2) {
            res.send("vehicle is blocked");
          }

          
          const updatedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
            { vId: req.params.vId },
            { $set: { tempCategory: req.body.category,
                tempVehicleType: req.body.vehicleType,
                tempSeats: req.body.seats,
                tempLocation: req.body.location,
                tempVehicleName: req.body.vehicleName,
                statuses: "3"} },
            { new: true }
          );

         res.json(updatedVehicle);
    } catch (error) {
        res.send(error)
    }
}

//delete vehicle

exports.deleteVehicle = async (req, res) => {
    const utcTimestamp = new Date().getTime();
    const vehicle = await vehicleSchema.vehicleModel.findOne({ vId: req.params.vId});
    const page = await pageSchema.pageModel.findOne({ uId: req.user.uId });

    try {
      if (!page) {
        res.send("page not found");
    }
    
    if (!vehicle) {
        res.send("Vehicle not found")
      } 
      // res.json(vehicle)

      const sucess = vehicle.pId == page.pId

      // res.send(sucess)
  
    if (!sucess) {
        res.send("user not authorized")
    }
        
    if (vehicle.statuses == 0) {
        res.send("vehicle is not approved");
      }

    if (vehicle.statuses == 2) {
        res.send("vehicle is blocked");
      }

          const deletedVehicle = await vehicleSchema.vehicleModel.findOneAndUpdate(
            { vId: req.params.vId },
            { $set: { statuses: "4", statusComment: "vehicle deleted", updateDate: utcTimestamp } },
            { new: true }
          );
          res.json(deletedVehicle);   

    } catch (error) {
        res.send(error)
    }
}

