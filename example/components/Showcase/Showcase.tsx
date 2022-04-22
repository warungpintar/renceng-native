import React from 'react';
import {ScrollView} from 'react-native';

const Showcase = ({children, ...otherProps}) => {
  return (
    // TODO: recheck below ts warning
    // @ts-ignore
    <ScrollView {...otherProps}>{children}</ScrollView>
  );
};

export default Showcase;
