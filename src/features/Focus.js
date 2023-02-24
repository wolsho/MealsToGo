import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubjec] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          onChangeText={setSubjec}
          label="En que te gustaria enfocarte?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50}
          onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
  },
  button:{
    justifyContent: 'center'
  },
  textInput:{
    flex: 0.9,
    marginRight: spacing.sm,
  },
  inputContainer: {
    paddingTop: spacing.lg,
    paddingLeft: 1 ,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
