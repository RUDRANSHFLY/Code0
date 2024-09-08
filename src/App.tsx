import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import './App.css';

const App: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");
  const [jsCode, setJsCode] = useState<string>("");
  const [srcDoc, setSrcDoc] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="app">
      <div className="pane top-pane">
        <div className="editor-container">
          <h3>HTML</h3>
          <AceEditor
            mode="html"
            theme="monokai"
            name="html-editor"
            value={htmlCode}
            onChange={(value) => setHtmlCode(value)}
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="100%"
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
          />
        </div>

        <div className="editor-container">
          <h3>CSS</h3>
          <AceEditor
            mode="css"
            theme="monokai"
            name="css-editor"
            value={cssCode}
            onChange={(value) => setCssCode(value)}
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="100%"
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
          />
        </div>

        <div className="editor-container">
          <h3>JavaScript</h3>
          <AceEditor
            mode="javascript"
            theme="monokai"
            name="js-editor"
            value={jsCode}
            onChange={(value) => setJsCode(value)}
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="100%"
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
          />
        </div>
      </div>

      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;
