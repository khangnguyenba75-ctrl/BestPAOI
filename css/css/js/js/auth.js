let user = null;

function signIn(name){
  user = name;
  localStorage.setItem("user", name);
}
