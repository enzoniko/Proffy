import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,    
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        paddingHorizontal: 16,
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 16,
        justifyContent: "center",
    },    

    submitButton: {
        backgroundColor: '#04d361',
        flexDirection: "row",
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
});

export default styles;