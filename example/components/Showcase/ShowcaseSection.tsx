import React from 'react';
import {View} from 'renceng-native';
import {Text} from 'react-native';

// TODO: change text component

const ShowcaseSection = ({title, subtitle, children, ...other}) => {
  return (
    <View p={24} mb={24}>
      <View borderBottomColor="#FECF28" mb={16} borderBottomWidth={2}>
        {/* TODO: recheck below ts warning */}
        {/* @ts-ignore */}
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
        {/* TODO: recheck below ts warning */}
        {/* @ts-ignore */}
        <Text>{subtitle}</Text>
      </View>
      <View {...other}>{children}</View>
    </View>
  );
};

export default ShowcaseSection;
