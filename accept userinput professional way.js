let username;
document.getElementById("mysubmit").onclick = function() {
    username =  document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hii ${username}`;
    console.log(username);
}