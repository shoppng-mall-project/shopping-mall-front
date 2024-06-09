import Paragraph from '@editorjs/paragraph'
import LinkTool from '@editorjs/link'
import FontSIze from 'editorjs-inline-font-size-tool'
import ImageTool from '@editorjs/image'

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  image: {class: ImageTool},
  linkTool: LinkTool,
  fontSize: FontSIze,
}
