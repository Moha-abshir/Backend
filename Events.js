const EventEmitter = require('events');

const myEmitter = new EventEmitter();
const ListenerFunc = (name, id)=>{
   console.log(`User Successful login: \nName:${name}. Id${id}`);
}
const ListenerFunc2 = (email)=>{
   console.log(`confirmation Email sent: ${email}`);
}
myEmitter.on('userLogin', ListenerFunc);//The listener function is executed when emitted.
myEmitter.on('userLogin', ListenerFunc2);
myEmitter.emit('userLogin', 'john', 100, 'ibrahimabdiazizomar@gmail.com');// As you noticed, ListenerFunc2 will use 'john' as an email

//LETS SEE THE SOLUTION:
//Solution number 1
const myEmitter2 = new EventEmitter();
const Listener1 = (userDetails)=>{
   console.log(`\n\nThe user details are as follows: \nName: ${userDetails.name}   Id: ${userDetails.id}`);
}
const Listener2 = (userDetails)=>{
   console.log(`The user email is ${userDetails.email}. The user location is ${userDetails.location}`);
}
myEmitter2.on('getUserDetails', Listener1);
myEmitter2.on('getUserDetails', Listener2);
myEmitter2.emit('getUserDetails', { //Create an object and let the listeners destructure it to get what they want
   name: 'John Doe',
   id: 1234,
   email: 'moabshir06@gmail.com',
   location: 'Nairobi'
})

//Solution number 2
const myEmitter3 = new EventEmitter();
const listener = (name, id)=>{
   console.log(`\n\nThe name is: ${name}.  The id is: ${id}`);
}
const listener2 = (email, location)=>{
   console.log(`The email is: ${email}. The location is ${location}`);
}
//Give them different names
myEmitter3.on('getNameId', listener);
myEmitter3.on('getEmailLocation', listener2);
myEmitter3.emit('getNameId', 'John Doe', 1234);
myEmitter3.emit('getEmailLocation', 'moabshir05@gmail.com', 'Nairobi');