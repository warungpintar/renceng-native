import React from 'react';
import {View} from 'renceng-native';
import {Text} from 'react-native';

const Subtitle = props => {
  return (
    <View flexDirection="row">
      <View borderBottomColor="yellow.500" borderBottomWidth={2} py={5} pr={20}>
        <Text fontSize="xl" fontWeight="bold">
          {props.children}
        </Text>
      </View>
    </View>
  );
};

export default Subtitle;
