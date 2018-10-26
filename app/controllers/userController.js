const db = require('../models');

// var express = require("express");
// var router = express.Router();

module.exports = {
    
    // CREATE a new db entry for users
    create: (req, res) => {
        db.create(["first_name", "last_name", "phone_number", "on_DNC_list"], 
        [req.body.first_name, req.body.last_name,
         req.body.phone_number, req.body.on_DNC_list], 
        (result) => {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
    },

    // READ all users
    read: (req, res) => {
        db.all((data) => {
          let obj = {
            user: data
          };
          res.render("index", obj);
        });
    },

    // UPDATE dnc
    update: (req, res) => {
        let condition = `id = ${req.params.id}`;
      
        db.update(
          {
            on_DNC_list: req.body.onDNClist
          },
          condition,
          (result) => {
            if (result.changedRows === 0) {
              // If no rows were changed, then 404
              return res.status(404).end();
            }
            res.status(200).end();      
          }
        );
      }

    // DELETE

}