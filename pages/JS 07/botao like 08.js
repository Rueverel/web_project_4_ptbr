elements.addEventListener("click", (event) => {
  const elementLike = document.querySelector(".element__img-like-button");
  if (event.target.classList.contains("element__img-like-button")) {
    elementLike.id = "disabled";
    if (elementLike.id === "disabled") {
    elementLike.src = "/images/buttons/like_button_active.png";
    elementLike.id = "true";
    }}});


    const elementLike = document.querySelector(".element__img-like-button"); //TESTE LIKE ACTIVE BOTAO EM SI
    //ALTEREI A CONSTANTE

    ---

    elements.addEventListener("click", (event) => {
      const elementLike = document.querySelector(".element__img-like-button");
      if (event.target.classList.contains("element__img-like-button")) {
        elementLike.id = "disabled";
        if (elementLike.id === "disabled") {
        elementLike.src = "/images/buttons/like_button_active.png";
        elementLike.id = "true";
        console.log(elements);
        } else {
          elementLike.src = "/images/buttons/like_button.png";
        elementLike.id = "true";
        }
      }});
    
    elements.addEventListener("dblclick", (event) => {
      const elementLike = document.querySelector(".element__img-like-button");
      if (event.target.classList.contains("element__img-like-button")) {
        //elementLike.id = "true";
        if (elementLike.id === "true") {
        elementLike.src = "/images/buttons/like_button.png";
        elementLike.id = "true";
        }}});

        -----
        //FUNCIONA COM CLIQUE E DUPLO CLIQUE

        for (element of elements) {
          elements.addEventListener("click", (event) => {
            const elementLike = document.querySelector(".element__img-like-button");
            if (event.target.classList.contains("element__img-like-button")) {
              elementLike.id = "disabled";

              //TENTATIVA DO INDIANO :D


              -----------------

              elements.addEventListener("click", (event) => {
                const elementLike = document.querySelector(".element__img-like-button");
                if (event.target.classList.contains("element__img-like-button")) {
                  //elementLike.id = "disabled"
                  if (elementLike.id === "true") {{
                    elementLike.src = "/images/buttons/like_button.png";
                    elementLike.id = "disabled";
                  }}
                  else if (elementLike.id === "disabled") {
                  elementLike.id = "true";
                  elementLike.src = "/images/buttons/like_button_active.png";
                  //console.log(elements);
                  
                  }}
                  //10 TENTATIVA :(