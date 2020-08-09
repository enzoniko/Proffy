import React from 'react';
import {View, Image, Text, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBackgroundImage} style={styles.content}>
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>

            
        </View>
    );
}

export default GiveClasses;