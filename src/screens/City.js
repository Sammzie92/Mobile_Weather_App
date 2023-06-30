import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaView, Text, StyleSheet, View, ImageBackground } from "react-native"
import IconText from "../components/IconText"
import moment from "moment"

const City = ({weatherData}) => {
    const {
        container, 
        CityName, 
        CityText, 
        CountryName, 
        PopulationWrapper,
        PopulationText, 
        riseSetWrapper, 
        rowLayout, 
        image, 
        riseText
        } = styles

        const {name, country, population, sunrise, sunset} = weatherData
    return(
        <SafeAreaView style={container}>
            <ImageBackground 
              source={require('../../assets/nairobi.png')} 
              style={image}>
                 <Text style={[CityName, CityText]}>{name}</Text>
              <Text style={[CountryName, CityText]}>{country}</Text>
                <View style={[PopulationWrapper, rowLayout ]}>
                 <IconText 
                 iconName={'user'} 
                 iconColor={'red'}
                 bodyText={`Population:${population}`} 
                 bodyTextStyles={PopulationText}/>
                </View> 
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                    iconName={'sunrise'} 
                    iconColor= {'white'} 
                    bodyText={moment(sunrise).format('h:mm:ss a')} 
                    bodyTextStyles={riseText}
                    />
                <IconText 
                    iconName={'sunset'} 
                    iconColor= {'white'} 
                    bodyText={moment(sunset).format('h:mm:ss a')} 
                    bodyTextStyles={riseText}
                    />
               
                </View> 
             

            </ImageBackground> 
            
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image:{
        flex: 1
    },
    CityName:{        
        fontSize: 40        
    },
    CountryName:{        
        fontSize: 30       
    },
    CityText:{
        justifyContent: "center",
        alignSelf: "center",        
        fontWeight: "bold",
        color: "white"
    },
    PopulationWrapper:{  
        justifyContent: "center",
        marginTop: 30

    },
    PopulationText:{
        fontSize:25,
        marginLeft: 7.5,        
        color: "red"

    },
    riseSetWrapper:{
        justifyContent: "space-around",
        marginTop: 30

    },
    riseText:{
        fontSize: 20,
        color:"white"
        
    },
    rowLayout:{
        flexDirection: "row",
        alignItems: "center"
        
    }
})
export default City
