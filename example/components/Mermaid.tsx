import { WebView } from "react-native-webview";

export default function Mermaid({ value }: { value: string }) {
  return (
    <WebView
      style={{ height: 300, width: "100%" }}
      source={{
        html: `
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
              <script src="https://cdn.jsdelivr.net/npm/mermaid@11.12.0/dist/mermaid.min.js"></script>
              <style>
                body {
                  margin: 0;
                  padding: 16px;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                }
                .mermaid {
                  width: 100%;
                  display: flex;
                  justify-content: center;
                }
                .mermaid svg {
                  max-width: 100%;
                  height: auto;
                }
              </style>
            </head>
            <body>
              <div class="mermaid">
                ${value}
              </div>
              <script>
                mermaid.initialize({
                  startOnLoad: true,
                  theme: 'default',
                  flowchart: {
                    useMaxWidth: false,
                    htmlLabels: true
                  },
                  sequence: {
                    useMaxWidth: false
                  }
                });
              </script>
            </body>
          </html>
    `,
      }}
    />
  );
}
