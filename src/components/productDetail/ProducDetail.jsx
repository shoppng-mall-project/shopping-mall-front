import React, { useEffect, useRef } from 'react';
import { EDITOR_JS_TOOLS } from './tools'
import EditorJS from '@editorjs/editorjs';

const Editor = (props) => {
  const editor = useRef(null);

  useEffect(() => {
    editor.current = new EditorJS({
      holder: 'editor',
      readOnly: true,
      tools: EDITOR_JS_TOOLS,
      data: props.data,
    });

  }, [props.data]);

  return (
    <div>
      <div id="editor" ref = {editor}/>
    </div>
  );
};

export default Editor;