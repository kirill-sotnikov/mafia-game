import { Pressable, Text } from "react-native";

const BigButton = ({ children, onPress, textStyle }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};
export default BigButton;
