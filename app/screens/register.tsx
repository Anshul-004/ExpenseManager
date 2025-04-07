import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';



const register = () => {
    const router = useRouter();
  return (
    
    <View className="flex-1 justify-center items-center bg-white mb-10">
        <View className="w-[80%]">
            <View className="items-center">
                <Text className="text-3xl font-bold mb-8 text-center text-gray-800">Register</Text>
                <Image 
                    source={images.register}
                    className="w-58 h-48 self-center mb-8"
                    resizeMode="contain"
                />
                
                <TextInput
                    className="w-full h-12 px-4 mb-4 border border-gray-300 rounded-lg"
                    placeholder="Full Name"
                    autoCapitalize="words"
                />

                <TextInput
                    className="w-full h-12 px-4 mb-4 border border-gray-300 rounded-lg"
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                
                <TextInput
                    className="w-full h-12 px-4 mb-4 border border-gray-300 rounded-lg"
                    placeholder="Password"
                    secureTextEntry
                />

                <TextInput
                    className="w-full h-12 px-4 mb-6 border border-gray-300 rounded-lg"
                    placeholder="Confirm Password"
                    secureTextEntry
                />
                
                <TouchableOpacity className="w-[80%] bg-blue-500 py-3 rounded-lg mb-4">
                    <Text className="text-white text-center font-semibold">Register</Text>
                </TouchableOpacity>

                <View className="flex-row items-center mb-4 w-full">
                    <View className="flex-1 border-t border-gray-300"></View>
                    <Text className="mx-2 text-gray-500">OR</Text>
                    <View className="flex-1 border-t border-gray-300"></View>
                </View>
                <TouchableOpacity className="w-[80%] bg-gray-200 py-3 rounded-lg mb-4 flex-row items-center justify-center">
                    <Image 
                        source={icons.google}
                        className="w-6 h-6 mr-2"
                    />
                    <Text className="text-gray-800 font-semibold">Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-[80%] bg-gray-200 py-3 rounded-lg mb-4 flex-row items-center justify-center">
                    <Image
                        source={icons.github}
                        className="w-6 h-6 mr-2"
                    />
                    <Text className="text-gray-800 font-semibold">Login with Github</Text>
                </TouchableOpacity>

                <View className="flex-row">
                    <Text className="text-gray-600">Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push("../screens/login")}>
                        <Text className="text-blue-500 font-semibold">Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>

  )
}

export default register