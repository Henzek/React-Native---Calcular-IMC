import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 0,
        paddingTop: 0,
        borderRadius: 50,
        alignItems:"center",
        width: "100%",
    },
    numberImc:{
        fontSize: 48,
        color: "#5C77FF",
        fontWeight: "bold",
    },
    information:{
        fontSize: 18,
        color: "#5C77FF",
        fontWeight: "bold"
    },
    boxShareButton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared:{
        backgroundColor: "#57e56d",
        borderRadius : 50,
        paddingVertical: 5,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30
    },
});

export default styles