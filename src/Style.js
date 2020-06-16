import { StyleSheet } from 'react-native';
var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#007687'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        lineHeight: 100,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 20
    },

    displayMemoryContainer: {
        flex: 1,
        backgroundColor: '#d1f9ff'
    },

    displayMemory: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#a2f3ff'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Style;
