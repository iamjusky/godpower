const MenuPanel = document.getElementById("menu_panel");
const closeMenuBtn = document.getElementById("close_menu_icon");
const openMenuBtn = document.getElementById("open_menu_icon");

const closeMenu = () => {
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
  MenuPanel.style.transform = "scale(0)";
  MenuPanel.style.opacity = "0";
};
const openMenu = () => {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  MenuPanel.style.transform = "scale(1)";
  MenuPanel.style.opacity = "1";
};
