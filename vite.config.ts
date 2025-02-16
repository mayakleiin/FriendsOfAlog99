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
        <meta name="keywords" content="אלוג 99, אוגדה 99, חטיבה טכנולוגיסטית, יחידה טכנולוגית, תרומות">
        <meta name="author" content="Friends of Alog 99">
        <meta property="og:title" content="אלוג 99 - עמותת ידידי החטיבה הטכנולוגית">
        <meta property="og:description" content="תמכו בטכנולוגיות החדשניות של אוגדה 99 - יחידה טכנולוגיסטית מובילה.">
        <meta property="og:image" content="https://alog-web.vercel.app/images/logo.png">
        <meta property="og:url" content="https://alog-web.vercel.app">
        <meta property="og:type" content="website">
        </head>`
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), htmlPlugin()],
});
