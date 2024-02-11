let messagesArray = [
  { text: "Hello world!", sender: "User" },
  { text: "Hello world!", sender: "John Doe" },
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque voluptates incidunt velit mollitia quidem unde quibusdam, itaque magnam sed architecto, omnis iste laboriosam non illo in consequuntur officia atque.",
    sender: "User",
  },
  { text: "Hello world!", sender: "User" },
  { text: "Hello world!", sender: "John Doe" },
  { text: "Ohayo onica!", sender: "User" },
  { text: "Hello world!", sender: "John Doe" },
  { text: "Hello world!", sender: "User" },
  { text: "Hello world!", sender: "John Doe" },
  { text: "Chupapi munyanya!", sender: "John Doe" },
  { text: "Hello world!", sender: "User" },
  { text: "Hello world!", sender: "User" },
  {
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque voluptates incidunt velit mollitia quidem unde quibusdam, itaque magnam sed architecto, omnis iste laboriosam non illo in consequuntur officia atque.",
    sender: "John Doe",
  },
  { text: "Hello world!", sender: "User" },
  { text: "Hello world!", sender: "User" },
];

document.addEventListener("DOMContentLoaded", function () {
  let messagesContainer = document.getElementById("messagesContainer");

  messagesArray.forEach(function (message) {
    let messageBox = document.createElement("div");
    messageBox.className =
      message.sender === "User" ? "message-box flex" : "message-box user flex";

    let messageContent = document.createElement("div");
    messageContent.className = "message";
    messageContent.textContent = message.text;

    messageBox.appendChild(messageContent);
    messagesContainer.appendChild(messageBox);
  });
});
