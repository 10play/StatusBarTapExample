import { useRef } from "react";
import { Alert, SafeAreaView, View } from "react-native";
import WebView from "react-native-webview";
import { IOSScrollToTop } from "./src/StatusBarTap";
import { source } from "./src/WebviewContent";

const App = () => {
  const webviewRef = useRef<WebView>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IOSScrollToTop
        onScrollToTop={() => {
          console.log("Status Bar Tapped!");
          webviewRef.current?.injectJavaScript(`
            document.querySelector('#scroll')?.scrollTo({
              top: 100,
              behavior: "smooth",
            });
          `);
        }}
      />
      <WebView source={{ html: source }} style={{ flex: 1 }} ref={webviewRef} />
    </SafeAreaView>
  );
};

export default App;
