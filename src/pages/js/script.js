const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
  linkItem.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    linkItem.classList.add("active");
    console.log("Hello");
  });
});
