import * as React from "react";
import { Modal, Portal, Card, Text, Button, Provider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppDispatch } from "../Redux/hooks";
import { deleteEventThunk } from "../Redux/eventSlice/EventSlice";

const MyComponent = ({ edate }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  //   const containerStyle = {backgroundColor: 'white', padding: 20};
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const options = { month: "long", day: "numeric" };
  const dateRU = new Date(edate.date).toLocaleDateString("ru-US", options);

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{edate.name}</Text>
              <Text variant="bodyMedium">{dateRU}</Text>
              <Text variant="bodyMedium">{edate.comment}</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() => {
                  dispatch(deleteEventThunk(edate.id));
                }}
              >
                <AntDesign name="delete" size={24} color="black" />
              </Button>
              <Button onPress={() => navigation.navigate("SexPage")}>
                <MaterialCommunityIcons
                  name="gift-open-outline"
                  size={24}
                  color="black"
                />
              </Button>
            </Card.Actions>
          </Card>
        </Modal>
      </Portal>
      <Button onPress={showModal}>Show</Button>
    </Provider>
  );
};

export default MyComponent;
