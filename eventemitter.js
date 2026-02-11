/*import {EventEmitter} from 'events';
let booking = new EventEmitter();
booking.on("newbooking",(user)=> {
    console.log(`Ticket Generated. for ${user}`);
});
booking.on("newbooking", (user)=> {
    console.log(`Seat  booked. for ${user}` );
});
booking.on("newbooking", (user , seattype)=> {
    console.log(`Email confirmation received : ${user}, Seat Type : ${seattype}`);
});
booking.emit("newbooking","Sami","VIP");
booking.emit("newbooking","Saumya", "REGULAR");
booking.emit("newbooking","Mihir", "PREMIUM");*/

import {EventEmitter} from 'events';
function moviebooking(user,seattype){
    let booking = new EventEmitter();
booking.on("newbooking",(user)=> {
    console.log(`Ticket Generated. for ${user}`);
});
booking.on("newbooking", (user)=> {
    console.log(`Seat  booked. for ${user}` );
});
booking.on("newbooking", (user , seattype)=> {
    console.log(`Email confirmation received : ${user}, Seat Type : ${seattype}`);
});
booking.emit("newbooking",user,seattype);
}
moviebooking("Mihir", "VIP");
moviebooking("ABC","PREMIUM");



