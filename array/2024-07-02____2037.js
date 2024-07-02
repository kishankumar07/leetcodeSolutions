function minMovesToSeat(students, seats){

    let sortedSeat = seats.sort((a,b) => a-b);
    let sortedStudents = students.sort((a,b) => a-b);
    let sum = 0;
    sortedSeat.forEach((x,i) =>{
        sum += Math.abs(x - sortedStudents[i])
    })
    return sum;

}
let students = [3,2,7];
let seats = [2,1,5]
let value  = minMovesToSeat(students,seats);
console.log('the minimum number of moves to seat any students is :',value)