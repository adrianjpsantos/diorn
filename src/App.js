import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const githubColor = '#010409';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/40219521?v=4';

const urlMyGithub = 'https://github.com/adrianjpsantos';

const App = () => {
  const handlePressGoToGithub = async () => {
    const response = await Linking.canOpenURL(urlMyGithub);
    if (response) {
      await Linking.openURL(urlMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={githubColor} barStyle={'light-content'} />
      <View style={style.content}>
        <Image
          accessibilityLabel="Adrian sorrindo na praia"
          source={{uri: imageProfileGithub}}
          style={style.avatar}
        />
        <Text style={[style.defaultText, style.name]}>
          Adrian José Pereira Santos
        </Text>
        <Text style={[style.defaultText, style.nickname]}>adrianjpsantos</Text>
        <Text style={style.defaultText}>
          Cursando desenvolvimento de sistemas.
        </Text>

        <View style={style.ArtBox}>
          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>

          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>

          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>

          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>

          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>

          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>

          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxDarkPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>
          <View style={style.containerRow}>
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
            <View style={style.boxPurple} />
          </View>
        </View>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={style.buttonText}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: githubColor,
    flex: 1,
    justifyContent: 'center',
    color: 'white',
  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 200,
    borderColor: 'red',
    borderWidth: 5,
    margin: 5,
  },
  defaultText: {
    color: 'white',
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ArtBox: {
    marginTop: 5,
  },
  containerRow: {
    flexDirection: 'row',
  },
  boxDarkPurple: {
    backgroundColor: 'red',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    margin: 1,
  },
  boxPurple: {
    backgroundColor: '#404040',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    margin: 1,
  },
});
