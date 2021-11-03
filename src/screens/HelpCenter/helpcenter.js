import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { imagePicker } from '../../helper/utils'
const { width, height } = Dimensions.get('screen')

export const HelpCenter = ({ navigation }) => {
  const [state, setState] = useState({
    Data: [
      {
        title: 'Do you have any questions regarding the Mindscape?'
      },
      {
        title: 'Would you like to report a problem?'
      },
      {
        title: 'Contact Us'
      }
    ]
  })

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            alignItems: 'flex-end',
            paddingTop: 50,
            paddingRight: 20
          }}>
          <Icon name="close" size={40} color="#8C8BA5" />
        </TouchableOpacity>
        <View style={styles.sectionContainer}>
          <Text style={{ color: '#8C8BA5', fontSize: 24, marginVertical: 8 }}>
            HELP CENTRE
          </Text>
          <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 10 }}>
            Welcome Dan {'\n'}How can we help you?
          </Text>

          {state.Data.map((item, i) => {
            return (
              <>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#9493AD90',
                    height: 75,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  activeOpacity={0.7}
                  key={i}
                  //   onPress={onPress}
                >
                  <View style={{ width: '90%', justifyContent: 'center' }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                        marginVertical: 8,
                        paddingRight: 40
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '10%',
                      justifyContent: 'center',
                      alignItems: 'flex-end'
                    }}>
                    <Icon name="chevron-right" size={46} color="#fff" />
                  </View>
                </TouchableOpacity>
              </>
            )
          })}
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={{
            marginTop: 50,
            height: height * 0.15,
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
          <Image
            style={{
              height: 30,
              width: 15,
              tintColor: '#A3A2BA',
              transform: [{ rotate: '180deg' }]
            }}
            source={require('../../assets/images/arrow-right.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#49485F'
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 60
  }
})
