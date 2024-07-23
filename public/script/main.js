console.log("Script is executing !");

const newSkillBtn = document.getElementById("addNewSkillBtn");

if (newSkillBtn) {
  newSkillBtn.addEventListener("click", () => {
    const newSkillElement = document.getElementById("addNewSkill");
    const newSkill = newSkillElement.value;
    const skillSelectElement = document.getElementById("skillRequired");
    const optionElement = document.createElement("option");
    optionElement.selected = true;
    optionElement.textContent = newSkill.toUpperCase();
    skillSelectElement.appendChild(optionElement);
    console.log(`Skill Added - ${newSkill}`);
    newSkillElement.value = "";
  });
}
