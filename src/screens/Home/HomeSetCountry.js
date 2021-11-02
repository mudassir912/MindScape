import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,Image,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import SetNameSvg from '../../assets/SVG/setNameSVG'

import CountryPicker from 'react-native-country-picker-modal'

export const HomeSetCountry = ({ navigation }) => {
    const [country, setCountry] = useState('Pakistan')
    const [visible, setvisible] = useState(false)

    return (
        <View style={styles.container}>
             <CountryPicker 
                    visible={visible}
                    placeholder={''}
                    onSelect={(country) => {
                        setvisible(false)
                        setCountry(country.name)
                    }}
                />
                   <SetNameSvg
                width={100}
                width={Dimensions.get('screen').width}
                height={Dimensions.get('screen').height}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    // top: 0,
                    // right: 0,
                    // left: 0

                }}
            />
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%",paddingLeft:20 }}>
                <Text >
                    So Daniel,
                </Text>
                <Text>Which country are you based in?</Text>
                <TouchableOpacity onPress={() => setvisible(true)}  style={styles.button}>
                    <Text style={{color:"#fff"}}>{country}</Text>
                    <Image style={{marginTop:8, marginLeft: "60%", }} source={require('../../assets/images/ComponentArrow.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeWarning')}
                    backgroundColor="transparent"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "#9493AD",
        // paddingHorizontal: "15%"
        alignItems:'center'
    },
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        alignContent: "space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        width:"80%",
        height:24,
    }
})