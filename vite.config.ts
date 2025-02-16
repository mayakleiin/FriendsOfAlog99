import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";

function htmlPlugin(): PluginOption {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(
        "</head>",
        `
        <meta name="description" content="עמותת ידידי החטיבה הטכנולוגית - תמיכה ותרומות לאוגדה 99">
        <meta name="keywords" content="אלוג 99, אלו"ג 99, אלוג, אלו"ג, אוגדה 99, חטיבה טכנולוגיסטית, ידידי החטיבה הטכנולוגיסטית">
        <meta name="author" content="Friends of Alog 99">
        <meta property="og:title" content= "עמותת ידידי החטיבה הטכנולוגיסטית - אלו"ג 99">
        <meta property="og:image" content="https://alog99.com/images/logo.png">
        <meta property="og:url" content="https://alog99.com">
        <meta property="og:type" content="website">
        </head>`
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), htmlPlugin()],
});
