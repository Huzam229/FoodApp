import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { getCategory } from "../api";
import { urlFor } from "../sanity";

export default function Categories() {
    const[activeCategory,setActiveCategory]=useState(null);
    let [categories,setcategories]=useState([]);

    useEffect(()=>{
        getCategory().then(data=>{
            // console.log('Data:',data[0])
            setcategories(data)
        })
    },[])
    
    return (
        <View style={tw`mt-4`}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 , }}
                style={tw`overflow-visible`}>

                {
                    categories.map((category) => {
                        let isActive= category._id==activeCategory;
                        let btnClass= isActive? 'bg-gray-500' : 'bg-gray-200';
                        let textClass= isActive? 'text-gray-800 font-semibold' : 'text-gray-500';

                        return (
                            <View key={category._id} style={tw`flex justify-center items-center mr-5 `}>
                                <TouchableOpacity style={tw`p-1.5 rounded-full shadow bg-gray-200 ${btnClass}`}
                                onPress={()=>setActiveCategory(category._id)}>
                                    <Image style={{width:50 ,height:50, alignSelf:'center'}}
                                    source={{uri:urlFor(category.image).url()}} />
                                </TouchableOpacity>
                                <Text style={tw`text-xs text-center ${textClass} `}>{category.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}