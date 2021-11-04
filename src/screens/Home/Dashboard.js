import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import Icon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../components/Header/index';
import Bottom from '../../components/Bottom/index'
export const Dashboard = ({ navigation }) => {
    return (
        <LinearGradient
            colors={['#9695AF', '#9695AF',]}
            // start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1
            }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <Header />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>



                <View

                    style={styles.curveViewStyle}>
                    <View
                        style={styles.curveViewStyle2}

                    >
                        <View

                            style={styles.rowViewStyle1}

                        >
                            <Text
                                style={styles.dailyTextStyle}

                            >
                                Connect with your emotions
                            </Text>
                            <LinearGradient
                                colors={['#D99888', '#F8EAE7',]}
                                start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
                                style={styles.linearCircleViewStyle1}

                            >
                                <Image source={require('../../assets/images/group-245.png')} style={{ width: 15.83, height: 17.28 }} />
                            </LinearGradient>
                        </View>

                        <View
                            style={styles.barViewStyle}

                        >
                            <View
                                style={styles.barIconViewStyle}

                            >
                                <Image source={require('../../assets/images/play.png')} style={{ height: 25, width: 25, position: 'absolute', top: -10, bottom: 0 }} />

                            </View>


                        </View>



                    </View>


                </View>


                <View style={{
                    height: 150,
                    backgroundColor: '#B1B1C7',
                    borderBottomWidth: 1.5,
                    // borderColor: '#B3B3BF'
                    borderBottomColor: '#A3A2BA'
                }}>

                </View>

                <LinearGradient
                    colors={['#B1B1C7', '#E4CBC7',]}
                    style={{
                        height: 120,

                    }}

                >
                    <View style={{
                        width: '80%',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                            <Image source={require('../../assets/images/tool.png')} style={{ height: 16, width: 27, }} />
                            <Text style={{
                                paddingLeft: 5,
                                fontFamily: 'Regulator-Nova',
                                color: '#E39684',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>MINDFULNESS TOOLS</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/mark.png')} style={{ height: 32, width: 28, }} />
                        </View>

                    </View>

                    <LinearGradient
                        colors={['#E59C8B', '#F3BFB4',]}
                        style={{
                            width: '80%',
                            alignSelf: 'center',
                            height: 50,
                            borderRadius: 25,
                            // alignItems: 'center',
                            justifyContent: 'center'

                        }}
                    >
                        <View style={{
                            width: '65%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}>
                            <Image source={require('../../assets/images/bottle.png')} style={{ height: 42, width: 19, }} />
                            <Image source={require('../../assets/images/moon.png')} style={{ height: 35, width: 38, }} />
                            <Image source={require('../../assets/images/tea.png')} style={{ height: 40, width: 39, }} />
                            <Image source={require('../../assets/images/circles.png')} style={{ height: 41, width: 41, }} />

                        </View>

                    </LinearGradient>

                </LinearGradient>



                <View style={{
                    height: 60,
                    backgroundColor: '#EBEBEC',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>
                        <Text style={{
                            fontFamily: 'Regulator-Nova',
                            color: '#575672',
                            fontSize: 14,
                            fontWeight: 'bold'
                        }}>LIBRARY</Text>
                        <Text style={{
                            paddingLeft: 5,
                            fontFamily: 'Regulator-Nova',
                            color: '#706F93',
                            fontSize: 14,

                        }}>Read or Hear</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('../../assets/images/mikes.png')} style={{ height: 16, width: 53, }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('../../assets/images/plusCir.png')} style={{ height: 32, width: 28, marginLeft: 5 }} />
                        </TouchableOpacity>
                    </View>


                </View>

            </ScrollView>
            <Bottom />

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    curveViewStyle: {
        // height: 120,
        backgroundColor: '#B1B1C7'
    },
    curveViewStyle2: {
        height: 150,
        backgroundColor: '#9695AF',
        // elevation: 5,
        borderBottomRightRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',

    },
    rowViewStyle1: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: height * 0.024,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dailyTextStyle: {
        fontSize: 26,
        fontFamily: 'Regulator-Nova',
        color: '#FFFFFF'
    },
    linearCircleViewStyle1: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    barViewStyle: {
        width: '75%',
        alignSelf: 'center',
        height: 2,
        backgroundColor: '#fff',
        // marginTop: 10
        marginVertical: 10
    },
    barIconViewStyle: {
        width: '50%',
        alignSelf: 'center'
    }
})