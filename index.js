// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    const employeeObj = {
       "firstName": firstName,
       "familyName": familyName,
       "title": title,
       "payPerHour": payPerHour,
       "timeInEvents": [],
       "timeOutEvents": [] 
    }
    return employeeObj
}

function createEmployeeRecords(employeeData){
    const newEmployeeArray = employeeData.map(indivArray =>{
    return createEmployeeRecord(indivArray)
    })
    return newEmployeeArray
}

function createTimeInEvent(employeeObj, dateWithTimeIn){
    let splitDateIn = dateWithTimeIn.split(" ")
    let clockIn = {
        type: "TimeIn",
        hour: parseInt(splitDateIn[1], 10),
        date: splitDateIn[0]
    } 
    employeeObj.timeInEvents.push(clockIn)
    return employeeObj
}

function createTimeOutEvent(employeeObj, dateWithTimeOut){
    let splitDateOut = dateWithTimeOut.split(" ")
    let clockOut = {
        type: "TimeOut",
        hour: parseInt(splitDateOut[1], 10),
        date: splitDateOut[0]
    } 
    employeeObj.timeOutEvents.push(clockOut)
    return employeeObj
}

function hoursWorkedOnDate(employeeObj){
    let inHour = employeeObj.timeInEvents[0].hour
    let outHour = employeeObj.timeOutEvents[0].hour
    let hoursWorked = (outHour - inHour)/100
    console.log(hoursWorked)
    return hoursWorked
}

function wagesEarnedOnDate(employeeObj){
    let manHours = hoursWorkedOnDate(employeeObj)
    let totalWage = manHours * employeeObj.payPerHour
    return totalWage;
}

function allWagesFor(employeeObj){
    console.log(employeeObj)
    console.log(wagesEarnedOnDate(employeeObj))
}

function calculatePayroll(multiEmployeeObj){
    
}