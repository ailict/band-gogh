// const sequelize = require('../config/connections');
const { Events } = require('../models');

const events = [
  {
    event_name: 'Gwar Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
  {
    event_name: 'Carbon Leaf Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
  {

    event_name: 'Pat McGee Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
  {

    event_name: 'River City High Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
  {

    event_name: 'Cannabis Corpse Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
  {

    event_name: 'Sparklehorse Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
  {

    event_name: 'Four Walls Falling Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
  {

    event_name: 'Alabama Thunderpussy Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
  
  },
  {

    event_name: 'Down to Nothing Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
    
  },
  {

    event_name: 'The Virginians Concert',
    event_month: 'December',
    event_day: '11',
    event_year: '2021',
    event_location: 'Richmond',
   
  },
];

const seedEvents = () => Events.bulkCreate(Events, { individualHooks: true });
module.exports = seedEvents;