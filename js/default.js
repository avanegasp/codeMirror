$(document).ready(function(){
  var code = $(".codemirror-textarea")[0];
  var editor = CodeMirror.fromTextArea(code, {
      lineNumbers : true,
      theme: 'seti',
      value: "function myScript(){return 100;}\n",
      mode:  "javascript"
  });
});
