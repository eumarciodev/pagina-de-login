function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "" || senha == "") {
      document.getElementById("message").innerHTML = "Por favor, preencha todos os campos.";
      return;
  } 

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var users = JSON.parse(this.responseText);

          var authenticated = false;
          for (var i = 0; i < users.length; i++) {
              if (users[i].login1 == login && users[i].senha1 == senha) {
                  authenticated = true;
                  break;
              }
          }

          if (authenticated) {
             document.getElementById("message").innerHTML = "Login realizado com sucesso!";
             location.href = 'home.html';
              
          } else {
              document.getElementById("message").innerHTML = "Usuário ou senha incorretos.";
          }
      }
  };
  xhr.open("GET", "users.json", true);
  xhr.send();

}