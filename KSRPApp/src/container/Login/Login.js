import React from "react";
import {
    StyleSheet,
    Image,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo";
import ModalDropdown from "react-native-modal-dropdown";

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
    }
    render() {
        var Dimensions = require("Dimensions");
        var { width, height } = Dimensions.get("window");
        var footerHeight = 70;
        return (
            <View style={styles.container}>
                {/* Gradient background color */}
                <LinearGradient
                    colors={["#34C1BB", "#008D87"]}
                    style={styles.background}
                >
                    {/* Main view */}
                    <View
                        style={[
                            styles.main,
                            { width: width, height: height - footerHeight }
                        ]}
                    >
                        {/* This is logo of petronas */}
                        <View style={styles.logoContainer}>
                            <Image
                                style={styles.logo}
                                source={require("../../resource/img/Logo/petronas_logo_144.png")}
                            />
                        </View>

                        {/* Slogan Procurement GO*/}
                        <Text style={styles.slogan}>Procurement GO</Text>

                        {/* 3 Inputs */}
                        <View style={styles.blockInput}>
                            {/* Dropdown */}
                            <View style={styles.dropdownView}>
                                <ModalDropdown
                                    style={styles.modalDropdownView}
                                    defaultValue="Domain"
                                    defaultIndex={0}
                                    textStyle={styles.modalDropdownText}
                                    dropdownStyle={styles.modalDropdownItem}
                                    dropdownTextStyle={styles.modalDropdownText}
                                    options={[
                                        "Domain",
                                        "SubDomain",
                                        "SubSUbDomain"
                                    ]}
                                />
                                <Image
                                    style={{
                                        width: 10,
                                        height: 10,
                                        opacity: 0.5
                                    }}
                                    source={require("../../resource/img/icon-arrow-down-b-512.png")}
                                />
                            </View>
                            {/* Username */}
                            <TextInput
                                style={styles.input}
                                placeholder="Enterprise ID (e.g mohdali.abdullah)"
                            />
                            {/* Password */}
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder="Password"
                            />
                        </View>

                        {/* Login button */}
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={login}
                        >
                            <Text style={styles.button}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Footer of Service Desk */}
                    <View style={[styles.footer, { height: footerHeight }]}>
                        <Text style={styles.serviceDesk}>SERVICE DESK:</Text>

                        {/* Information */}
                        <View style={styles.footerSecondLine}>
                            {/* Phone */}
                            <View style={styles.information}>
                                <Image
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginRight: 2
                                    }}
                                    source={require("../../resource/img/phone-receiver.png")}
                                />
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 9
                                    }}
                                >
                                    +603 2331 3333
                                </Text>
                            </View>

                            {/* Mail */}
                            <View style={styles.information}>
                                <Image
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginRight: 2
                                    }}
                                    source={require("../../resource/img/mail-receiver.png")}
                                />
                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 9
                                    }}
                                >
                                    ict_servicedesk@petronas.com.my
                                </Text>
                            </View>
                        </View>

                        {/* Privacy */}
                        <Text style={styles.privacy}>
                            Privacy Policy | Use Terms & Conditions
                        </Text>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

// Login action
const login = () => {
    alert("Not implement yet.");
};

// THis is style sheet
const styles = StyleSheet.create({
    // Total
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    background: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    },

    // Main
    main: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    },

    // Image
    logoContainer: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 47,
        paddingVertical: 8,
        width: 100,
        height: 123
    },
    logo: {
        flex: 1,
        width: 100,
        height: 123,
        resizeMode: "contain"
    },

    // Slogan
    slogan: {
        color: "white",
        fontSize: 30,
        marginBottom: 20
    },

    // Block 3 input
    blockInput: {
        alignItems: "stretch",
        alignSelf: "stretch",
        justifyContent: "center",
        backgroundColor: "white",
        marginHorizontal: 20,
        borderRadius: 2,
        padding: 1
    },
    input: {
        alignSelf: "stretch",
        fontSize: 12,
        padding: 9,
        paddingHorizontal: 15,
        borderBottomWidth: 0.7,
        borderBottomColor: "#F5F5F5",
        fontWeight: "600"
    },
    dropdownView: {
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "stretch",
        paddingHorizontal: 15,
        borderBottomWidth: 0.7,
        borderBottomColor: "#F5F5F5",
        flexDirection: "row"
    },
    modalDropdownView: {
        flex: 0.98,
        alignSelf: "stretch",
        paddingVertical: 9
    },
    modalDropdownItem: {
        width: "80%"
    },
    modalDropdownText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#a9a9a0"
    },

    // Login Button
    buttonContainer: {
        marginTop: 35,
        marginHorizontal: 20,
        backgroundColor: "#6C408F",
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 2
    },
    button: {
        fontSize: 12,
        fontWeight: "600",
        color: "#FFFFFF"
    },

    // Footer
    footer: {
        width: "90%",
        marginHorizontal: 100,
        borderTopColor: "#30BDB7",
        borderTopWidth: 0.5,
        alignItems: "center",
        padding: 2,
        justifyContent: "space-around"
    },
    serviceDesk: {
        color: "white",
        fontWeight: "600",
        fontSize: 10
    },
    footerSecondLine: {
        flexDirection: "row"
    },
    information: {
        marginHorizontal: 5,
        flexDirection: "row"
    },
    privacy: {
        color: "white",
        fontWeight: "600",
        fontSize: 9
    }
});