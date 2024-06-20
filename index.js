import HTMLtoDOCX from "html-to-docx";
import { saveAs } from "file-saver";

const content = `<html lang="uk"><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <body><p style="text-align:center"><strong>Протокол № _______ від ________________<br /></p>
 </body>
 </html>`;
const download = async () => {
    const data = await HTMLtoDOCX(content);
    saveAs(data, "hello.docx");
};

download();
