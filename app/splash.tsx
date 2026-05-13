import { View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import {  useRouter } from 'expo-router';
//import {splashStyles as styles} from '../styles/screens/splashStyles'

export default function Splash() {
    const router = useRouter();

    useEffect(() => {

        const timer = setTimeout(() => {
            router.replace('/auth/login');
        }, 3000);

        return () => clearTimeout(timer);

    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0F172A',
            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 32,
                    fontWeight: 'bold',
                    marginBottom: 20,
                }}
            >
                MeetStranger
            </Text>

            <ActivityIndicator
                size="large"
                color="white"
            />
        </View>
    );
}