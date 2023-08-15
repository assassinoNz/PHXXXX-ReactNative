import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Avatar, BottomNavigation, Button, TextInput } from "react-native-paper";
import { LogInScreenStyles } from "../styles/screen";
import { UsersScene } from "./scene";

export function LoginScreen() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = () => {
        console.log("Login button pressed!");
    };

    return (
        <View style={LogInScreenStyles.view}>
            <Avatar.Icon 
                style={LogInScreenStyles.avatar}
                size={150} icon="folder" />
            <TextInput
                style={LogInScreenStyles.textInput}
                label="Username"
                value={username}
                onChangeText={(text: string) => setUsername(text)}
            />
            <TextInput
                style={LogInScreenStyles.textInput}
                label="Password"
                secureTextEntry
                value={password}
                onChangeText={(text: string) => setPassword(text)}
            />
            <Button 
                style={LogInScreenStyles.button}
                mode="outlined"
                onPress={handleLogin}>
                Sign In
            </Button>
            <Button 
                style={LogInScreenStyles.button}
                mode="outlined"
                onPress={handleLogin}>
                Sign Up
            </Button>
        </View>
    );
};

export function HomeScreen() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "exams", title: "Exams", focusedIcon: "book", unfocusedIcon: "book-outline"},
        { key: "results", title: "Results", focusedIcon: "pencil" },
        { key: "users", title: "Users", focusedIcon: "account", unfocusedIcon: "account-outline" },
        { key: "roles", title: "Roles", focusedIcon: "account-star", unfocusedIcon: "account-tie" },
    ]);

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={BottomNavigation.SceneMap({
                exams: () => <ScrollView><Text>Music</Text></ScrollView>,
                results: () => <Text>Albums</Text>,
                users: () => <UsersScene></UsersScene>,
                roles: () => <Text>Music</Text>,
            })}
        />
    );
}