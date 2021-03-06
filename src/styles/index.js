import { StyleSheet } from 'react-native';

export const styles = (props = {}) => StyleSheet.create({
    appBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.toggle ? '#333' : '#fff',
        fontFamily: 'open-sans-bold'
    },
    appText: {
        marginBottom: 20,
        color: props.toggle ? '#fff' : '#333'
    },
    appSlider: {
        width: '10px'
    },
    sliderBlock: {
        width: 200,
        marginTop: 20,
    },
    accordion: {
        backgroundColor: props.toggle ? '#06bcee' : '#fff',
        color: props.toggle ? 'green' : '#333',
    }
});