const employee = {
    name: "", 
    streetAddress: ""
}



function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newObject = {...employee}
    newObject[key] = value
    return newObject
}


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
   return Object.assign(employee, {[key]:value})
}

function deleteFromEmployeeByKey (employee, key) {
    const newObject2 = Object.assign({}, employee)
    delete newObject2[key]
    return newObject2;
}

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
 delete employee.key
 return delete employee.key; 
}