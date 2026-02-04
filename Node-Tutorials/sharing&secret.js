//Not sharing - Let this variable be local.
const secret = "Super Secret";
//Shared ones - We are going to export these variables so that we can access them elsewhere.
const john = "John"
const peter = "Peter"

module.exports = {john, peter}//Export syntax