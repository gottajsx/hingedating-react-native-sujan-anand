import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home"/>
            </Tab.Navigator>
        )

    }

    return(
        <View>
            <Text>
                StackNavigator
            </Text>
        </View>
    )
}

export default StackNavigator;

const styles = StyleSheet.create();