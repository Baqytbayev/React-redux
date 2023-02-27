import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const Item = (props) => {
    return (
        <View>
            <Image
                style={styles.images}
                source={{
                    uri: props.image
                }}
            />
            <Text
                style={styles.texts}
            >
                {props.text}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    images : {
        height: 100,
        width: 100
    },
    texts : {
        fontSize: 16,
        fontWeight: "bold"
    }
})
export default Item;


