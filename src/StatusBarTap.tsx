import React, { useEffect, useRef } from "react";
import { Platform, ScrollView, View } from "react-native";

interface IOSScrollToTopProps {
  onScrollToTop: () => void;
}
export const IOSScrollToTop = ({ onScrollToTop }: IOSScrollToTopProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollWhenStatusBarTapped = useRef<boolean>(true);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: false });
  }, [scrollViewRef.current]);

  if (Platform.OS !== "ios") {
    return null;
  }
  return (
    <ScrollView
      ref={scrollViewRef}
      scrollEventThrottle={16}
      onScroll={(e) => {
        if (
          e.nativeEvent.contentOffset.y < 1 &&
          scrollWhenStatusBarTapped.current
        ) {
          onScrollToTop();
          scrollWhenStatusBarTapped.current = false;
        }
      }}
      onScrollToTop={() => {
        scrollWhenStatusBarTapped.current = true;
        scrollViewRef.current?.scrollToEnd({ animated: false });
      }}
      style={{
        height: 1,
        width: "100%",
        position: "absolute",
      }}
    >
      <View style={{ height: 2 }} />
    </ScrollView>
  );
};
