function validations(field, label) {
    var inputValue =  document.getElementById(field).value;
    if (inputValue == '' || inputValue == null) {
        document.getElementById(field).style.border = "2px solid red";
        document.getElementById(label).innerHTML = "Please fill all fields!";
        document.getElementById(field).focus();
        
        return false;   
    }
    if (!isNaN(inputValue) || /\d/.test(inputValue)) {
        document.getElementById(field).style.border = "2px solid red";
        document.getElementById(label).innerHTML = "Only letters allowed!";
        document.getElementById(field).focus();
        
        return false;        
    }
    if (inputValue.match(/^[^a-zA-Z]+$/)) {
        document.getElementById(field).style.border = "2px solid red";
        document.getElementById(label).innerHTML = "Special characters not allowed!";
        document.getElementById(field).focus();

        return false;
    }
    
    document.getElementById(field).style.border = "2px solid green";

    return true;
}

function clearError(label) {
    document.getElementById(label).innerHTML = "";
}

document.addEventListener(('DOMContentLoaded'), function(event) {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        
        clearError('fLabel');
        clearError('lLabel');
        clearError('tLabel');
        
        var fnameStatus = validations('fname', 'fLabel');
        var lnameStatus = validations('lname', 'lLabel');
        var tStatus = validations('textArea', 'tLabel');

        if(
            fnameStatus
            && lnameStatus
            && tStatus
        ) {
            document.getElementById('messageContainer').innerHTML += 
            ' Thank you for contacting us, ' + document.getElementById('fname').value + '!';
            document.getElementById('messageContainer').style.display = 'block';
        }
        
        console.log(document.getElementById('fname').value);
        console.log(document.getElementById('lname').value);
        console.log(document.getElementById('textArea').value);    
    });
    
});
