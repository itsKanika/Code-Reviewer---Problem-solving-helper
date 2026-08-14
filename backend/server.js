require("dotenv").config();
console.log("Groq Key:", process.env.GROQ_API_KEY ? "Loaded" : "Missing");
const app=require('./src/app')


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on https://code-reviewer-problem-solving-helper.onrender.com http://localhost:${PORT}`);
});
