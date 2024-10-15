const testBtn = document.querySelector(".testBtn");
let resText = document.querySelector(".resText");

function fetchData() {
  fetch("http://localhost:5000/auth/users").then(
    (res = () => {
      res.status !== 200
        ? (resText.textContent = res)
        : (resText.textContent = res);
    })
  );
}

testBtn.addEventListener("click", fetchData);
