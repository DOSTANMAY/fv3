function fun1() {
            var name = document.getElementById('n1').value;
            var nameRegex = /^[A-Z ]{1,12}$/; 

            if (nameRegex.test(name)) {
                document.getElementById('s1').innerHTML = '';
                document.getElementById('s1').innerHTML = "Correct. Fill up The Next.";
                document.getElementById('s1').style.color = "Green";
                
            } else {
                document.getElementById('s1').innerHTML = "Please enter in caps & valid name.";
                document.getElementById('s1').style.color = "red";
               
            }


        }

        function fun2() {
            
            var age= parseInt(document.getElementById('a1').value);


            if (age>=30 && age<=80) {
                document.getElementById('s2').innerHTML = "Good. Fill up the next";
                document.getElementById('s2').style.color = "Green";
                
            } else {
                document.getElementById('s2').innerHTML = "Invalid Input. Please enter Age between 30-80";
                document.getElementById('s2').style.color = "red";
            }
        } 


         function fun3() {
            var phoneNumber = document.getElementById('p1').value;

            
            if (phoneNumber == "") {
                document.getElementById('s3').innerHTML = "Please enter your phone number.";
                document.getElementById('s3').style.color = "red";
                return false;
            }

            
            if (!/^[7-9]/.test(phoneNumber)) {
                document.getElementById('s3').innerHTML = "Please start with 7, 8, or 9.";
                document.getElementById('s3').style.color = "red";
                return false;
            }

            
            if (phoneNumber.length < 10) {
                document.getElementById('s3').innerHTML = "Please Enter a 10-digit mobile Number";
                document.getElementById('s3').style.color = "red";
                return false;
            }

            if (phoneNumber.length > 10) {
                document.getElementById('s3').innerHTML = "Please Enter a 10-digit mobile Number";
                document.getElementById('s3').style.color = "red";
                return false;
            }
            if (/[!@#$%^&*(),.?":{}|<>]/.test(phoneNumber)) {
                document.getElementById('s3').innerHTML = "Remove special characters.";
                document.getElementById('s3').style.color = "red";
                return false;
            }

                if (/[A-z]/.test(phoneNumber)) {
                document.getElementById('s3').innerHTML = "Don't put Alphabet in Phone Number";
                document.getElementById('s3').style.color = "red";
                return false;
            }

           
            document.getElementById('s3').innerHTML = "Phone number is valid.";
            document.getElementById('s3').style.color = "green";
            return true;
        }

        function fun4() {
            var email = document.getElementById('e1').value;
            var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

            if (emailRegex.test(email)) {
                document.getElementById('s4').innerHTML = '';
                document.getElementById('s4').innerHTML = "Correct. Fill up The Next";
                document.getElementById('s4').style.color = "Green";
            } else {
                document.getElementById('s4').innerHTML = "Invalid email Address";
                document.getElementById('s4').style.color = "red";
            }
        }

function fun5() {
            var password = document.getElementById('pass').value;
            if (password == "") {
                document.getElementById('s5').innerHTML = "Please Enter Your Password";
                document.getElementById('s5').style.color = "red";
                return false;
            }
            if (password.length < 8) {
                document.getElementById('s5').innerHTML = "Please Enter an 8-digit password";
                document.getElementById('s5').style.color = "red";
                return false;
            }
            if (password.search(/[A-Z]/) == -1) {
                document.getElementById('s5').innerHTML = "Please Enter at least one capital character";
                document.getElementById('s5').style.color = "red";
                return false;
            }
            if (password.search(/[a-z]/) == -1) {
                document.getElementById('s5').innerHTML = "Please Enter at least one lowercase character";
                document.getElementById('s5').style.color = "red";
                return false;
            }
            if (password.search(/[0-9]/) == -1) {
                document.getElementById('s5').innerHTML = "Please Enter at least one numeric character";
                document.getElementById('s5').style.color = "red";
                return false;
            }
            if (password.search(/[@#$%&*]/) == -1) {
                document.getElementById('s5').innerHTML = "Please Enter at least one special character among @#$%&*";
                document.getElementById('s5').style.color = "red";
                return false;
            } else {
                document.getElementById('s5').innerHTML = "Successful. You have done it right";
                document.getElementById('s5').style.color = "green";
                
                document.getElementById('submit').disabled = false;
                return true;
            }
        }