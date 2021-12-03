import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Menu, Search, ChevronRight, Plus, Star } from "react-native-feather";
import { StatusBar } from 'expo-status-bar';

import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

export default function Home({ navigation }) {

    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoriesItemWrapper,
            {
                backgroundColor: item.selected ? '#F5CA48' : 'white',
                marginLeft: item.key == 1 ? 20 : 0,
            },
            ]}>
                <Image
                    source={item.image}
                    style={styles.categoriesItemImage}
                />
                <Text style={styles.categoriesItemTitle}>{item.title}</Text>
                <View style={[styles.categoriesSelectWrapper,
                {
                    backgroundColor: item.selected ? 'white' : 'red'
                },
                ]}>
                    <View style={styles.categorySelection}>
                        <ChevronRight
                            stroke={item.selected ? 'black' : 'white'}
                            width={24}
                            height={24}
                        />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='lightgray' style='dark' />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.profileImage}
                    />
                    <Menu stroke="black" fill="white" width={24} height={24} />
                </View>

                {/* Title */}
                <View style={styles.titlesWrapper}>
                    {/* <Text style={styles.titlesSubtitle}>Food</Text> */}
                    <Text style={styles.titlesTitle}>{'Walk in Woods Restaurant'}</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Search stroke="gray" fill="white" width={16} height={16} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <FlatList
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.key}
                        horizontal={true}
                        style={styles.categoriesListWrapper}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map(item => (
                        <TouchableOpacity
                            key={item.key}
                            onPress={() => navigation.navigate('Details', {item: item})}
                        >
                            <View
                                style={[styles.popularCardWrapper,
                                {
                                    marginTop: item.key == 1 ? 11 : 20,
                                    marginBottom: item.key == 3 ? 20 : 0,
                                }
                                ]}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <Text style={styles.popularTopText}>👑 Week's Highlight</Text>
                                        </View>
                                        <View style={styles.popularTextTitles}>
                                            <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                            <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Plus
                                                stroke={'black'}
                                                width={14}
                                                height={14}
                                            />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <Star
                                                stroke={'black'}
                                                fill={'black'}
                                                width={14}
                                                height={14}
                                            />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingHorizontal: 20,
        alignContent: 'center',
    },

    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },

    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },

    // titlesSubtitle: {
    //     // fontFamily: 'roboto-regular'
    //     fontSize: 16,
    //     color: 'black',
    // },

    titlesTitle: {
        // fontFamily: 'roboto-regular'
        marginTop: 5,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
    },

    searchWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },

    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    searchText: {
        fontSize: 14,
        marginBottom: 5,
        color: 'gray',
    },

    categoriesWrapper: {
        marginTop: 30,
    },

    categoriesTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },

    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },

    categoriesItemWrapper: {
        // backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },

    categoriesItemImage: {
        width: 60,
        height: 60,
        marginTop: 24,
        alignSelf: 'center',
        marginHorizontal: 20,
    },

    categoriesItemTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
    },

    categoriesSelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },

    categorySelection: {
        alignSelf: 'center',
    },

    popularWrapper: {
        paddingHorizontal: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    popularCardWrapper: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden'
    },

    popularTopWrapper: {
        alignItems: 'center',
    },
    

    popularTopText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    popularTitlesTitle: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold'
    },

    popularTitlesWeight: {
        fontSize: 12,
        color: '#333333',
        marginTop: 5,
    },

    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },

    addPizzaButton: {
        backgroundColor: "#F5CA48",
        // flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },

    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    rating: {
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },

    popularCardRight: {
        marginLeft: 40,
    },

    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },

});