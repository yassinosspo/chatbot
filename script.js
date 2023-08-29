// Select various elements from the DOM
const chatbotToggler = document.querySelector(".chatbot-toggler"); // Toggler for chatbot visibility
const closeBtn = document.querySelector(".close-btn"); // Close button for chatbox
const chatbox = document.querySelector(".chatbox"); // Container for chat messages
const chatInput = document.querySelector(".chat-input textarea"); // Textarea for user input
const sendChatBtn = document.querySelector(".chat-input span"); // Button to send user input

const inputInitHeight = chatInput.scrollHeight;

// Define predefined responses
const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["how is corona", "how is covid 19", "how is covid19 situation"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"]
  ];
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?"],
    ["yassine"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"]
  ];
  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  const scrollChatboxToBottom = () => {
    chatbox.scrollTo(0, chatbox.scrollHeight);
  };
// Function to create a chat message <li> element
const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  chatLi.innerHTML = `<p>${message}</p>`;
  return chatLi;
}

// Function to generate a response using predefined responses
// Function to generate a response using predefined responses
// Function to generate a response using predefined responses
// Function to generate a response using predefined responses
// Function to generate a response using predefined responses
// Function to generate a response using predefined responses
// Create flattened versions of 'userMessage' and 'botReply'
let flatUserMessage = [].concat(...userMessage);
let flatBotReply = [].concat(...botReply);

const generateResponse = (userMessageInput) =>{

  let userMessageLowerCase=userMessageInput.toLowerCase();
  console.log("User Input: ", userMessageInput);
  console.log("User input LowerCase", userMessageLowerCase);

  // Look for the message in the 'userMessage' array
  for(let i=0; i< userMessage.length; i++){

    let userMessageIndex= userMessage[i].findIndex(message => message.toLowerCase()===userMessageLowerCase);

    if(userMessageIndex !== -1){
      let randomIndex=Math.floor(Math.random() * botReply[i].length);
      let product = botReply[i][randomIndex];
      console.log("Match Found! Selected Response: ", product);
      return product;
    }
  }

  const randomAlternativeIndex=Math.floor(Math.random() * alternative.length);
  const selectedAlternative = alternative[randomAlternativeIndex];
  console.log("No match found. Selected alternative : ", selectedAlternative);
  return selectedAlternative;
}







// Rest of the code remains the same...
const handleChat = () => {
  const userMessage = chatInput.value.trim().toLowerCase(); // Convert to lowercase and remove leading/trailing spaces
  if (!userMessage) return;

  chatInput.value = ""; // Clear input
  chatInput.style.height = `${inputInitHeight}px`; // Reset input height

  // Append user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Show "Thinking..." message and generate response after a delay

    chatbox.scrollTo(0, chatbox.scrollHeight);

    const botResponse = generateResponse(userMessage); // Generate bot response
    const botChatLi = createChatLi(botResponse, "incoming");
    chatbox.appendChild(botChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 600);
};



// Update input textarea's height based on its content
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// Handle sending user message when Enter is pressed (without Shift)
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  });

// Handle sending user message when send button is clicked
sendChatBtn.addEventListener("click", handleChat);

// Close chatbot
closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
  });

// Toggle chatbot visibility
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
  });