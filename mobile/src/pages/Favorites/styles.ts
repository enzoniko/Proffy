import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList: {
        marginTop: -40,
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 190,
        
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 260,
    },

    okButton: {
        marginVertical: 40,
        height: 58,
        backgroundColor: '#04d361',
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },    

    okButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16,
    },
});

export default styles;