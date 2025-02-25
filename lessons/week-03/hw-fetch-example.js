const MyService = (() => {
  return {
    question: async () => {
      const res = await fetch("https://yesno.wtf/api");
      return res.json();
    }
  };
})();

const getTextItem = () => document.querySelector("p");

const updateText = (answer) => {
  const textItem = getTextItem();
  textItem.className = "";
  textItem.classList.add( answer === "no" ? "no" : "ok" );
  textItem.innerText = answer;
};

const setImage = (url) => {
  const container = document.querySelector("figure");
  let image = container.querySelector("img");
  if (!image) {
    image = document.createElement("img");
    container.appendChild(image);
  }
  image.setAttribute("src", url);
};

const clickEventListener = (event) => {
  event.preventDefault();
  MyService.question().then((data) => {
    updateText(data.answer);
    setImage(data.image);
  }).catch((exc) => {
    console.error(exc);
  });
};

const asyncClickEventListener = async (event) => {
  event.preventDefault();
  try {
    const { answer, image } = await MyService.question();
    updateText(answer);
    setImage(image);
  } catch (exc) {
    console.error(exc);
  }
};

const button = document.querySelector("button");
button.addEventListener("click", asyncClickEventListener);
