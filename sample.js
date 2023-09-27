/*
// server.js

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Atlas connection string
const mongoURI = 'your_mongodb_atlas_connection_string_here';

// Connect to MongoDB Atlas
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB Atlas');
    const db = client.db('your_database_name_here');

    // Define your routes and start the server
    // ...

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });


  // server.js (continuing from previous code)

// ...

// Define a route to handle adding a new trip
app.post('/trips', (req, res) => {
    const tripData = req.body; // Assuming JSON data is sent in the request body
  
    // Insert the trip data into the MongoDB collection
    db.collection('trips').insertOne(tripData, (err, result) => {
      if (err) {
        console.error('Error adding trip:', err);
        res.status(500).json({ error: 'Failed to add trip' });
      } else {
        console.log('New trip added:', result.ops[0]);
        res.status(201).json(result.ops[0]);
      }
    });
  });

  
  // server.js (continuing from previous code)

// ...

// Define a route to handle retrieving past trips
app.get('/trips', (req, res) => {
    // Retrieve past trips with a limit of 50 results
    db.collection('trips')
      .find()
      .limit(50)
      .toArray((err, trips) => {
        if (err) {
          console.error('Error retrieving trips:', err);
          res.status(500).json({ error: 'Failed to retrieve trips' });
        } else {
          res.status(200).json(trips);
        }
      });
  });

  
  // server.js (continuing from previous code)

// ...

// Define a route to handle saving ticket booking details
app.post('/bookings', (req, res) => {
    const bookingData = req.body; // Assuming JSON data is sent in the request body
  
    // Insert the booking data into the MongoDB collection
    db.collection('bookings').insertOne(bookingData, (err, result) => {
      if (err) {
        console.error('Error saving booking details:', err);
        res.status(500).json({ error: 'Failed to save booking details' });
      } else {
        console.log('Booking details saved:', result.ops[0]);
        res.status(201).json(result.ops[0]);
      }
    });
  });
  
  */