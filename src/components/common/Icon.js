/**
 * 在球场
 * zaiqiuchang.com
 */

import React from 'react';
import {StyleSheet, Platform, View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {COLOR, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../config';

export default ({name, transparent=false, onPress, styleKind='normal', style, 
  containerStyle, ...props}) => {
  let transparentStyle = transparent ? {backgroundColor: 'transparent'} : null;
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        <Icon {...props} name={name} style={[styles[styleKind], transparentStyle, style]} />
      </TouchableOpacity>
    );
  } else{
    return (
      <Icon {...props} name={name} style={[styles[styleKind], transparentStyle, style]} />
    );
  } 
}

const styles = StyleSheet.create({
  normal: {
    fontSize: 12,
    color: COLOR.textNormal,
  },
  normalBig: {
    fontSize: 14,
    color: COLOR.textNormal,
  },
  empha: {
    fontSize: 12,
    color: COLOR.textEmpha,
  },
  emphaBig: {
    fontSize: 14,
    color: COLOR.textEmpha,
  },
});
