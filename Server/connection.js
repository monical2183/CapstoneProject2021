const mongoose = require(`mongoose`);

//connect with db
mongoose.connect(`mongodb://localhost/test`);

mongoose.connect
  .once(`open`, function () {
    console.log(`connection has been made`);
  })
  .on(`error`, function (error) {
    console.log(`error is:`, error);
  });
