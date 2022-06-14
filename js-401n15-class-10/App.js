import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, FlatList, View, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/item";
import GoalInput from "./components/input";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentState) => [
      ...currentState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const endGoalHandler = () => {
    setShowModal(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((oldState) => oldState.filter((ele) => ele.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="add new goal"
          color="#5e0acc"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={showModal}
          close={endGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
