import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState(`Paste your code or ask any DSA/coding question here.

Example:
function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState("");
  const [loadingMode, setLoadingMode] = useState("");
  const highlightInput = (value) => {
    const language = Prism.languages.cpp || Prism.languages.clike || Prism.languages.javascript;
    return Prism.highlight(value, language, "cpp");
  };

  useEffect(() => {
    window.Prism = Prism;
    Prism.highlightAll();
  }, [code]);

  async function askAssistant(mode = "review") {
    if (!code.trim()) {
      setReview("Write code or ask a coding question first.");
      return;
    }

    setLoadingMode(mode);
    setReview(mode === "dry-run" ? "Tracing the dry run..." : "Reviewing the code...");

    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
        mode,
      });
      setReview(response.data.review || "No review returned");
    } catch (error) {
      console.error("Error while fetching review:", error);
      setReview("Error fetching review");
    } finally {
      setLoadingMode("");
    }
  }

  return (
    <main>
      {/* LEFT SIDE */}
      <div className="left">
        <div className="panel-title">
          <span>Code / Question</span>
          <small>Paste code, problem statement, or ask anything</small>
        </div>

        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={highlightInput}
            padding={10}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 15,
              lineHeight: 1.6,
            }}
          />
        </div>

        <div className="actions">
          <button
            onClick={() => askAssistant("review")}
            className="review"
            disabled={Boolean(loadingMode)}
          >
            {loadingMode === "review" ? "Reviewing..." : "Review"}
          </button>
          <button
            onClick={() => askAssistant("dry-run")}
            className="dry-run"
            disabled={Boolean(loadingMode)}
          >
            {loadingMode === "dry-run" ? "Running..." : "Dry Run"}
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="review-output">
          {review ? (
            <Markdown remarkPlugins={[remarkGfm]}>{review}</Markdown>
          ) : (
            <div className="empty-state">
              <h2>Ready when you are.</h2>
              <p>Add code on the left, then review it or run a trace.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
