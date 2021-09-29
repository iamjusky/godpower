const updateAction = (e) => {
  document
    .getElementsByClassName("action_display")[0]
    .classList.remove("action_display");
  document
    .getElementsByClassName(e.target.value)[0]
    .classList.add("action_display");
};
