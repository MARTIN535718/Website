function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Admin"&& password=="admin123")
{
    alert("login succesfully");
    open('file:///D:/Iskola/WebFejlesztes/UjWeb/fooldal.html'); 
    return false
}
else
{
    alert("Wrong username/password");
}
}