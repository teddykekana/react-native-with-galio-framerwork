import React, { Fragment, useState } from 'react';
import { Text, Switch, Block, Slider, Accordion } from 'galio-framework';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { styles } from './src/styles';

const fetchFonts = async () => {
  return await Font.loadAsync({
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-extrabold': require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
    'open-sans-regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-light': require('./src/assets/fonts/OpenSans-Light.ttf'),
  });
}

const accordionData = toggle => {
  return [
    { title: "First Chapter", content: "Lorem ipsum dolor sit amet",
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
        color: toggle ? '#333' : '#06bcee'
      } 
    },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ];
}

function App() {

  const [dataLoaded, setDataLoaded] = useState(false); 
  const [toggle, setToggle] = useState(false);
  const [slider, setSlider] = useState(5);

  if(!dataLoaded) {
      return (
        <AppLoading 
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
        />
      ); 
  }
  return (
        <Block style={styles({"toggle": toggle}).appBlock}>
          <Text style={styles({"toggle": toggle}).appText} p muted>React Native With Galio Framework</Text>
          <Text style={styles({"toggle": toggle}).appText}>Switch Example</Text>
          <Switch
              value={toggle}
              onChange={() => setToggle(!toggle)}
              trackColor={{
                false: "#ccc", 
                true: "#06bcee"
              }}
          />
          <Block style={styles().sliderBlock}>
            <Text style={styles({"toggle": toggle}).appText}>Slider Example: {slider}</Text>
            <Slider
              maximumValue={30}
              value={slider}
              activeColor="#06bcee"
              thumbStyle={{backgroundColor: '#06bcee', borderColor: '#06bcee'}}
              trackStyle={{backgroundColor: '#ccc'}}
              onValueChange={value => {
                  setSlider(Math.floor(value));
              }}
            />
          </Block>
          <Block style={{ height: 200, marginTop: 20 }}>
            <Text style={styles({"toggle": toggle}).appText}>Accordion Example</Text>
            <Accordion 
              contentStyle={{color: toggle ? '#fff' : '#333'}} 
              style={styles({"toggle": toggle}).accordion} 
              dataArray={accordionData(toggle)} 
            />
          </Block>
        </Block>
  );

}

export default App;
