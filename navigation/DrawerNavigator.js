import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTab";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTab} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;