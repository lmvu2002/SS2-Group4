import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";


export function CustomEditor(props) {
  const editorRef = useRef(null);

  function onClickHandler() {
    if (confirm("Are you sure you want to submit?")) {
      console.log(editorRef.current.getContent());
    } else {
      alert("Submit have been cancelled");
    }
  }
  return (<>
    <Editor
      
      tinymceScriptSrc={"/assets/libs/tinymce/tinymce.min.js"}
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={props.content}
      init={{
        height: 700,
        width: 900,
        resize: false,
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
      }}
      onEditorChange={props.handleOnEditorChange}
    />
    <button
    type="button"
    className="btn btn-primary float-left my-3" onClick={onClickHandler}>Submit</button>
  </>);
}
