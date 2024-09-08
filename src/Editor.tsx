// src/Editor.tsx
import React from "react";
import AceEditor from "react-ace";

import { Ace } from "ace-builds";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/src-noconflict/ext-language_tools";

interface EditorProps {
  language: "html" | "css" | "javascript";
  displayName: string;
  value: string;
  setValue: (value: string) => void;
  onLoad: (editor: Ace.Editor) => void;
}

const Editor: React.FC<EditorProps> = ({
  language,
  value,
  setValue,
  displayName,
  onLoad,
}) => {
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <AceEditor
        placeholder={`write Code`}
        mode={language}
        onLoad={onLoad}
        cursorStart={1}
        theme="monokai"
        name="blah2"
        onChange={setValue}
        fontSize={14}
        lineHeight={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
