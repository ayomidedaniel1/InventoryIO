import { View, Dimensions } from "react-native";

const { width } = Dimensions.get('screen');

const TopHeader = () => {
  return (
    <View style={{ width: width, height: 70, backgroundColor: '#6c47ff', marginTop: -50, marginBottom: 50, }} />
  );
};

export default TopHeader;