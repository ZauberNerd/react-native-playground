import React from 'react';

import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function Button({ text, feedbackType }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 10,
  },
  text: {
    color: 'white',
  },
});
