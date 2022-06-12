import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContext:{
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#ffffff",
        alignItems:"center",
        paddingTop: 25,
    },
    form:{
        width: "100%",
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
        marginTop: 5
    },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        marginTop:3,
        marginLeft:12,
        marginRight:12,
        paddingLeft: 10,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#5C77FF",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 15,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    },
    exhibitionResultImc:{
        width: "100%",
        height: "50%"
    },
    listImcs:{
        marginTop: 20,
    },
    resultImcItem:{
        fontSize: 16,
        color: "#a3a3a3",
        height: 50,
        width: "100%",
        paddingRight: 20,
        paddingLeft: 10
    },
    textResultItemList:{
        fontSize: 20,
        color: "#5C77FF",
    },


});

export default styles