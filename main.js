document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // لمنع النموذج من الإرسال الافتراضي
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    one.style.display = 'none';
    two.style.display = 'none';

    
    if (email === '') {
        one.style.display = 'block';
    } else if (!validateEmail(email)) {
        two.style.display = 'block';
    } else {
        // هنا يمكنك إرسال البريد الإلكتروني
        console.log('Email is valid and ready to be sent: ', email);
        emailInput.value = ''; // هنا نمسح القيمة من الحقل
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




    







