import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { ArrowLeft } from "react-native-feather";

export default function Details({ route, navigation }) {

    const { item } = route.params;

    return (
        <View style={styles.container} >

            {/* Header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <ArrowLeft
                        stroke={'black'}
                        height={30}
                        width={30}
                    />
                </TouchableOpacity>

                <View style={styles.titleWrapper}>
                    <Text style={styles.titleTitle}>{item.title}</Text>
                </View>
            </View>

            {/* Image */}
            <View style={styles.imageWrapper}>
                <Image source={item.image} style={styles.image} />
            </View>

            <Text style={styles.price} >Rs. {item.price}/-</Text>

            <TouchableOpacity onPress={() => Alert.alert('Order Confirmed!')}>
                <View style={styles.buttonWrapper}>
                    <Text style={styles.button}>Order Now!</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.detailsWrapper}>
                <Text style={styles.detailsTitle}>Details</Text>
                <Text style={styles.detailDetails}>Crust Type: {item.crustType}</Text>
                <Text style={styles.detailDetails}>Pizza Size: {item.sizeName} ({item.sizeNumber} inches)</Text>
            </View>

        </View>
    );
}

const styles = new StyleSheet.create({

    container: {
        flex: 1,
    },

    headerWrapper: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingHorizontal: 20,
    },

    titleWrapper: {
        flex: 1,
        alignItems: 'center',
    },

    titleTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    imageWrapper: {
        alignItems: 'center',
        margin: 20,
        paddingTop: 70,
        paddingBottom: 50,
    },

    image: {
        maxHeight: 400,
        maxWidth: 400,
        resizeMode: 'contain',
    },

    buttonWrapper: {
        marginHorizontal: 40,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#F5CA48',
        padding: 15,
        marginTop: 10,
    },

    button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    price: {
        paddingLeft: 35,
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 20,
    },

    detailsWrapper: {
        padding: 20
    },

    detailsTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,
    },

    detailDetails: {
        paddingLeft: 10,
        fontSize: 16,
        paddingTop: 5,
    },
});