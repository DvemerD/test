document.addEventListener("DOMContentLoaded", () => {
  // Survey
  const btns = document.querySelectorAll(".survey_button"),
    modalBtn = document.querySelector("#p_modal_button3");
  const data = {
    gender: "",
    age: "",
    familySize: "",
    boughtPhone: "",
  };

  const updateData = (parentId, answer) => {
    switch (parentId) {
      case "q1":
        data.gender = answer;
        break;
      case "q2":
        data.age = answer;
        break;
      case "q3":
        data.familySize = answer;
        break;
      case "q4":
        data.boughtPhone = answer;
        break;
      default:
        break;
    }
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      var parentId = btn.parentElement.id;
      updateData(parentId, btn.textContent);
    });
  });

  modalBtn.addEventListener("click", () => {
    fbq("track", "InitiateCheckout");
    console.log(`Resultados da pesquisa: \n
    Gênero: ${data.gender}\n
    Idade: ${data.age}\n
    Tamanho família: ${data.familySize}\n
    Você comprou um iPhone XS: ${data.boughtPhone}\n
    `);
  });

  // Comment
  const commentsList = document.querySelector(".comments__list"),
    commentText = document.querySelector(".comment__text"),
    commentBtn = document.querySelector(".comment__btn");

  commentBtn.addEventListener("click", () => {
    const newComment = `
      <div class="comments" id="comment0" style="display:block">
        <div class="profile">
          <img src="assets/user.jpg">
        </div>
        <div class="comment-content">
          <p class="name">Anônimo</p>
          <p>${commentText.value}</p>
        </div>
        <div class="clr"></div>
        <div class="comment-status">
          <span>Curte·comente <img src="assets/like.png" width="15px" height="15px">0</span>
          <small>·<u>Agora mesmo</u></small>
        </div>
      </div>
    `;

    commentsList.insertAdjacentHTML("afterbegin", newComment);

    commentText.value = "";
  });
});
