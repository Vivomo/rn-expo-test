import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PixelRatio
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <Text>测试不同大小文字底部对齐</Text>
          <View style={{
              alignItems: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10
          }}>
            <Text style={{
              fontSize: 12,
                borderWidth: 1,
            }}>12 / default</Text>

              <Text style={{
                fontSize: 16,
                  borderWidth: 1,
              }}>16 / default</Text>

              <Text style={{
                  fontSize: 16,
                  borderWidth: 1,
                  height: 16
              }}>16 / 16(H)</Text>


              <Text style={{
                  fontSize: 16,
                  lineHeight: 16,
                  borderWidth: 1,
              }}>16 / 16(LH)</Text>
          </View>

            <Text>测试不同高度文字底部对齐</Text>

            <View
                style={{
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 10,
            }}>
                <Text style={{
                    height: 12,
                    borderWidth: 1,

                }}>12</Text>

                <Text style={{
                    height: 16,
                    borderWidth: 1,
                }}>16</Text>

                <Text style={{
                    height: 20,
                    borderWidth: 1,
                }}>20</Text>
                <Text style={{
                    height: 24,
                    borderWidth: 1,
                }}>24</Text>

                <Text style={{
                    height: 28,
                    borderWidth: 1,
                }}>28</Text>
            </View>

            <View style={{borderWidth: 1, position: 'relative'}}>
                <View style={{position: 'absolute', left: 0, top: 0, borderWidth: 1, borderRadius: 15, height: 30, alignItems: 'center'}}>
                    <Text style={{lineHeight: 30, color: 'red', opacity: 0.5}}>两行文字</Text>
                </View>
                <Text ellipsizeMode={'head'} style={{height: 60, lineHeight: 30}} numberOfLines={2}>{'两行文字两行文'}字两行文字{'两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字两行文字'}</Text>
            </View>


            <View style={{borderWidth: 1, position: 'relative'}}>
                <Text ellipsizeMode={'middle'} style={{height: 60, lineHeight: 30}} numberOfLines={2}>123456789abcdefghigklmnopqrstuvwxyz123456789abcdefghigklmnopqrstuvwxyz123456789abcdefghigklmnopqrstuvwxyz123456789abcdefghigklmnopqrstuvwxyz123456789abcdefghigklmnopqrstuvwxyz</Text>
            </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text allowFontScaling={false} onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
            字体缩放了->{PixelRatio.getFontScale()}
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14 / PixelRatio.getFontScale(),
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
