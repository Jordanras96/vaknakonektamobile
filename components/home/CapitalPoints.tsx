import { View, Text } from "react-native";
import { Card } from "@/components/ui/card"; // Import du Card de ShadCN
import { featuresCapitalPointsData } from "@/data/featuresCapitalData";

const CapitalPoints = () => {
  const features = featuresCapitalPointsData;
  return (
    <View className="px-1 flex flex-wrap flex-row justify-evenly">
      {features.map((item, index) => (
        <Card key={index} className="w-[48%] p-4 rounded-lg shadow-md mb-2 ">
          <View className="items-center">{item.icon}</View>
          <Text className="text-lg font-bold text-center mt-2">
            {item.title}
          </Text>
          <Text className="text-gray-600 text-center mt-1">
            {item.description}
          </Text>
        </Card>
      ))}
    </View>
  );
};

export default CapitalPoints;
