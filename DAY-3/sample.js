<!DOCTYPE html>
<html>
<body>

<input type="text" id="uid" placeholder="User ID"><br><br>
<input type="password" id="pwd" placeholder="Password"><br><br>

<button onclick="validate()">Login</button>

<p id="result"></p>

<script>
function validate() {

    var user = document.getElementById("uid").value;
    var pass = document.getElementById("pwd").value;

    if (user === "admin" && pass === "admin123") {
        document.getElementById("result").innerHTML = "Login Successful";
    } else {
        document.getElementById("result").innerHTML = "Invalid User ID or Password";
    }
}
</script>

</body>
</html>
