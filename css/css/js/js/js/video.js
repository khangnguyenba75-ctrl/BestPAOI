function upload(){
  let feed = document.getElementById("feed");

  let div = document.createElement("div");
  div.className = "card";

  div.innerHTML = "New Video Uploaded";

  feed.appendChild(div);
}
