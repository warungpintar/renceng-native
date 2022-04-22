import React from 'react';
import {View} from 'renceng-native';
import {Text} from 'react-native';

// TODO: change text component

const ShowcaseItem = ({title, children}) => {
  return (
    <View my={2}>
      <View flexDirection="row" justifyContent="space-between">
        <View>
          {/* TODO: recheck below ts warning */}
          {/* @ts-ignore */}
          <Text>{title}</Text>
        </View>
        <View flexDirection="row" justifyContent="flex-end">
          {children}
        </View>
      </View>
    </View>
  );
};

export default ShowcaseItem;
