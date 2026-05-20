import React from 'react';
import  { useState, useRef } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { useRouter } from 'expo-router';

import { homeStyles as styles } from '../../styles/screens/homeStyles';

const categories = [
    {
        id: 'movies',
        title: 'Films',
        image: require('../../assets/movies.png'),
    },
    {
        id: 'series',
        title: 'Books',
        image: require('../../assets/books.png'),
    },
    {
        id: 'games',
        title: 'Games',
        image: require('../../assets/games.png'),
    },
];

export default function HomeScreen() {

    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);

    const dropdownHeight = useRef(
        new Animated.Value(0)
    ).current;

    const dropdownOpacity = useRef(
        new Animated.Value(0)
    ).current;

    const [selectedCategory, setSelectedCategory] =
        useState('movies');

    const toggleMenu = () => {

        const toHeight = menuOpen ? 0 : 120;

        const toOpacity = menuOpen ? 0 : 1;

        Animated.parallel([

            Animated.timing(dropdownHeight, {
                toValue: toHeight,
                duration: 250,
                useNativeDriver: false,
            }),

            Animated.timing(dropdownOpacity, {
                toValue: toOpacity,
                duration: 200,
                useNativeDriver: false,
            }),

        ]).start();

        setMenuOpen(!menuOpen);
    };

    const handleNavigate = () => {

        router.push({
            pathname: '/chat/searching',
            params: {
                category: selectedCategory,
            },
        });
    };

    return (

        <LinearGradient
            colors={[
                '#080E3A',
                '#10195F',
                '#1B1464',
            ]}
            style={styles.container}
        >

            {/* MENU DROPDOWN */}
            <Animated.View
                style={[
                    styles.dropdownMenu,
                    {
                        height: dropdownHeight,
                        opacity: dropdownOpacity,
                    },
                ]}
            >

                <TouchableOpacity style={styles.dropdownItem}
                    onPress={() =>
                        router.push({
                            pathname: '/settings',
                        })
                    }>

                    <Text style={styles.dropdownText}>
                        Settings
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() =>
                        router.push({
                            pathname: '/about',
                        })
                    }
                >

                    <Text style={styles.dropdownText}>
                        About
                    </Text>

                </TouchableOpacity>

            </Animated.View>

            {/* MENU BUTTON */}
            <TouchableOpacity
                style={styles.menuButton}
                onPress={toggleMenu}
            >

                <Text style={styles.menuIcon}>
                    ☰
                </Text>

            </TouchableOpacity>

            {/* LOGO */}
            <View style={styles.logoContainer}>

                <Image
                    source={require('../../assets/flavicon.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Image
                    source={require('../../assets/flavletter.png')}
                    style={styles.letter}
                    resizeMode="contain"
                />

            </View>

            {/* SUBTITLE */}
            <Text style={styles.subtitle}>
                Choose the topic
            </Text>

            {/* CATEGORY GRID */}
            <View style={styles.grid}>

                {categories.map((item) => {

                    const isSelected =
                        selectedCategory === item.id;

                    return (

                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.8}
                            onPress={() =>
                                setSelectedCategory(item.id)
                            }
                            style={[
                                styles.categoryWrapper,

                                isSelected &&
                                styles.categorySelected,
                            ]}
                        >

                            <LinearGradient
                                colors={[
                                    '#5A38FD',
                                    '#F72585',
                                ]}
                                style={styles.categoryCard}
                            >

                                <View style={styles.categoryContent}>

                                    <Image
                                        source={item.image}
                                        style={styles.categoryImage}
                                        resizeMode="contain"
                                    />

                                    <Text style={styles.categoryText}>
                                        {item.title}
                                    </Text>

                                </View>

                            </LinearGradient>

                        </TouchableOpacity>
                    );
                })}

            </View>

            {/* CHAT BUTTON */}
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleNavigate}
            >

                <LinearGradient
                    colors={[
                        '#3A0CA3',
                        '#FF0054',
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.chatButton}
                >

                    <Text style={styles.chatButtonText}>
                        go to chat
                    </Text>

                </LinearGradient>

            </TouchableOpacity>

        </LinearGradient>
    );
}

