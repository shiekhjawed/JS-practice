let clickme = document.querySelector("#btn1");

clickme.onclick = () =>{
    console.log("clickeme  was clicked");
    let a = 25;
    a++;
    console.log(a);
}

// three ways to write  event

















const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});
