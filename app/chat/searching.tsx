import {
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { useRouter } from 'expo-router';

import { searchingStyles as styles } from '../../styles/screens/searchingStyles';

export default function SearchingScreen() {

    const router = useRouter();

    return (

        <LinearGradient
            colors={[
                '#580821',
                '#cb0e4a',
                '#2922b0',
                '#3e36eb',
                '#5035d8',
            ]}
            start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}
            style={styles.container}
        >

            <ActivityIndicator
                size="large"
                color="#FFFFFF"
            />

            <Text style={styles.title}>
                Searching Partner...
            </Text>

            <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => router.back()}
            >

                <Text style={styles.cancelButtonText}>
                    ← Cancel Search
                </Text>

            </TouchableOpacity>

        </LinearGradient>
    );
}