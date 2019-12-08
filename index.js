
function createEmployeeRecord(emprec){
  let arr = {
    firstName: emprec[0],
    familyName: emprec[1],
    title: emprec[2],
    payPerHour: emprec[3],
    timeInEvents: [] ,
    timeOutEvents: [],
  };
return arr}

function createEmployees(employees){
  let newEmployeearr = []
  for(let i = 0; i<employees.length;i++){
    newEmployeearr.push(createEmployeeRecord(employees[i]));
  }
return newEmployeearr}
<<<<<<< HEAD

function createTimeInEvent(emprec,timeIn){
     let [date, hour] = timeIn.split(' ');
     emprec.timeInEvents.push({
       type: "TimeIn",
       hour:parseInt(hour,10),
       date
     }) 
     return emprec
}
=======
function createTimeInEvent(emprec,timeIn){
  let dateTime=timeIn.split(' ')[0]
  let hourTime=timeIn.split(' ')[1]
  employeeArray.timeInEvents={
  type:"TimeIn",
  hour:parseInt(hour,10),
  date:dateTime
  }
  return emprec
} 
>>>>>>> 4aa6a24e72afeba9b97392c8a23c7f79d70bfe57
