/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  MKTextField,
  MKColor,
  mdl,
} from 'react-native-material-kit';
const appStyles = require('./styles');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

// const {
//   MKButton,
//   MKColor,
//   MKTextField,
//   mdl,
// } = MK;


const styles = Object.assign({}, appStyles, StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center', // this will prevent TFs from stretching horizontal
    marginLeft: 7, marginRight: 7,
    // backgroundColor: MKColor.Lime,
  },
  textfield: {
    height: 28,  // have to do it on iOS
    marginTop: 32,
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
  },
}));

// const ColoredRaisedButton = MKButton.coloredButton()
//   .withText('BUTTON')
//   .withOnPress(() => {
//     console.log("Hi, it's a colored button!");
//   })
//   .build();
// const AccentColoredRaisedButton = MKButton.accentColoredButton()
//   .build();
// const PlainRaisedButton = MKButton.button()
//   .withText('BUTTON')
//   .build();
// const FlatButton = MKButton.flatButton()
//   .withText('BUTTON')
//   .build();
// const ColoredFlatButton = MKButton.coloredFlatButton()
//   .withText('BUTTON')
//   .build();
// const AccentColoredFlatButton = MKButton.accentColoredFlatButton()
//   .withText('BUTTON')
//   .build();
//
// const ColoredFab = MKButton.coloredFab()
//   .withStyle(styles.fab)
//   .build();
// const AccentColoredFab = MKButton.accentColoredFab()
//   .withStyle(styles.fab)
//   .build();
// const PlainFab = MKButton.plainFab()
//   .withStyle(styles.fab)
//   .build();


const Textfield = MKTextField.textfield()
  .withPlaceholder('Text...')
  .withStyle(styles.textfield)
  .withTextInputStyle({flex: 1})
  .build();

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Number...')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withTextInputStyle({flex: 1})
  .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '200',
  })
  .withKeyboardType('numeric')
  .build();

const ColoredTextfield = mdl.Textfield.textfield()
  .withPlaceholder('Text...')
  .withStyle(styles.textfield)
  .withTintColor(MKColor.Lime)
  .withTextInputStyle({color: MKColor.Orange, flex: 1})
  .build();

const PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
  .withPassword(true)
  .withPlaceholder('Password')
  .withDefaultValue('!123')
  .withHighlightColor(MKColor.Lime)
  .withStyle(styles.textfieldWithFloatingLabel)
  .withTextInputStyle({flex: 1})
  .withOnFocus(() => console.log('Focus'))
  .withOnBlur(() => console.log('Blur'))
  .withOnEndEditing((e) => console.log('EndEditing', e.nativeEvent.text))
  .withOnSubmitEditing((e) => console.log('SubmitEditing', e.nativeEvent.text))
  .withOnTextChange((e) => console.log('TextChange', e))
  .withOnChangeText((e) => console.log('ChangeText', e))
  .build();



export default class NcManagerR extends Component {
  componentDidMount() {
      setTimeout((() => {
      if (this.refs.defaultInput) {
      this.refs.defaultInput.focus();
    }
    }), 1000);
  }
  render() {
    return (
      <ScrollView style={styles.scrollView}
                  contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Textfield/>
            <Text style={styles.legendLabel}>Textfield</Text>
          </View>
          <View style={styles.col}>
            <TextfieldWithFloatingLabel ref="defaultInput"/>
            <Text style={styles.legendLabel}>With floating label</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <ColoredTextfield/>
            <Text style={styles.legendLabel}>Textfield</Text>
          </View>
          <View style={styles.col}>
            <PasswordInput/>
            <Text style={styles.legendLabel}>With floating label</Text>
          </View>
        </View>
        {/*<View style={styles.row}>*/}
          {/*<View style={styles.col}>*/}
            {/*<PlainRaisedButton/>*/}
            {/*<Text style={styles.legendLabel}>Raised button</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.col}>*/}
            {/*<ColoredRaisedButton/>*/}
            {/*<Text style={styles.legendLabel}>Colored</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.col}>*/}
            {/*<AccentColoredRaisedButton>*/}
              {/*<Text pointerEvents="none" style={styles.buttonText}>BUTTON</Text>*/}
            {/*</AccentColoredRaisedButton>*/}
            {/*<Text style={styles.legendLabel}>Accent colored</Text>*/}
          {/*</View>*/}
        {/*</View>*/}
        {/*<View style={styles.row}>*/}
          {/*<View style={styles.col}>*/}
            {/*<PlainFab>*/}
              {/*<Image pointerEvents="none" source={require('./img/plus_dark.png')} />*/}
            {/*</PlainFab>*/}
            {/*<Text style={styles.legendLabel}>Plain FAB</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.col}>*/}
            {/*<ColoredFab>*/}
              {/*<Image pointerEvents="none" source={require('./img/plus_white.png')} />*/}
            {/*</ColoredFab>*/}
            {/*<Text style={styles.legendLabel}>Colored</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.col}>*/}
            {/*<AccentColoredFab>*/}
              {/*<Image pointerEvents="none" source={require('./img/plus_white.png')} />*/}
            {/*</AccentColoredFab>*/}
            {/*<Text style={styles.legendLabel}>Accent colored</Text>*/}
          {/*</View>*/}
        {/*</View>*/}
        {/*<View style={styles.row}>*/}
          {/*<View style={styles.col}>*/}
            {/*<FlatButton/>*/}
            {/*<Text style={styles.legendLabel}>Flat button</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.col}>*/}
            {/*<ColoredFlatButton/>*/}
            {/*<Text style={styles.legendLabel}>Colored</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.col}>*/}
            {/*<AccentColoredFlatButton/>*/}
            {/*<Text style={styles.legendLabel}>Accent colored</Text>*/}
          {/*</View>*/}
        {/*</View>*/}
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('NcManagerR', () => NcManagerR);
