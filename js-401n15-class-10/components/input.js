import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native-web";
import { useState } from "react";

const Input = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const handleClick = () => {
    props.close();
  };

  return (
    <Modal>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add your goals for this time"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={() => {
                props.onAddGoal(enteredGoalText);
                handleClick();
              }}
              color="red"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleClick} color="black" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "rose",
  },

  textInput: {
    borderWidth: 1,
    padding: 12,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default Input;
