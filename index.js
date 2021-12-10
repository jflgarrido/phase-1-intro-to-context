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

function hoursWorkedOnDate(employeeObj, date){
    let inTime = employeeObj.timeInEvents.find(element => element.date === date)
    let outTime = employeeObj.timeOutEvents.find(element => element.date === date)
    let totalHours = (outTime.hour - inTime.hour)/100
    return totalHours
}

function wagesEarnedOnDate(employeeObj, date){
    let manHours = hoursWorkedOnDate(employeeObj, date)
    let totalWage = manHours * employeeObj.payPerHour
    return totalWage;
}

function allWagesFor(employeeObj){
    let eligibleDates = employeeObj.timeInEvents.map(record => record.date)
    console.log(eligibleDates)
    let total = eligibleDates.reduce((accumulator, date) =>{
        return accumulator + wagesEarnedOnDate(employeeObj, date)
    },0)
    return total
}

function calculatePayroll(multiEmployeeArray){
    let multiPayroll = multiEmployeeArray.reduce((accumulator, record) =>{
        return accumulator + allWagesFor(record)
    },0)
    return multiPayroll
}