import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Splash extends Component {
    static navigationOptions = {
        // tilte: 'Home',
        header: null
    };
    constructor() {
        super();
        this.state = { showMe: true };
    }
    componentWillMount() {
        // Emulate loading data case
        setTimeout(() => {
            this.props.navigation.navigate("Login");
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.logo}
                        source={require("../../resource/img/Logo/petronas_logo_144.png")}
                    />
                </View>

                <Text style={styles.footer}>
                    Copyright 2017 PETRONAS All right reserved.
                </Text>
                <Text style={styles.footer}>Developed by PETRONAS ICT.</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
        // backgroundColor: "orange"
    },
    imageContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
        // backgroundColor: "yellow"
    },
    logo: {
        alignSelf: "center"
    },
    footer: {
        fontSize: 11
    }
});
