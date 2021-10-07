import { Platform } from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
 
const PLATFORM_LOCATION_PERMISSIONS = {
    //ios: 
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
} 

const REQUEST_PERMISSION_TYPE = {
    location: PLATFORM_LOCATION_PERMISSIONS
    //게시판 사진첨부? 
}
const PERMISSION_TYPE = {
    location: 'location'
}

class AppPermission {

    checkPermission = async (type): Promiss<boolean> => {
        console.log("AppPermission checkPermission type: ",type)
        const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS]
        console.log("AppPermission checkPermission permission: ",permission)
        if(!permission) {
            return true
        }
        try{
            const result = await check(permission)
            console.log("AppPermission checkPermission result: ",result)
            if (result === RESULTS) return true
            return this.requestPermission(permission)
        } catch (e) {
            console.log("AppPermission checkPermission e: ",e)
            return false
        }
    }

    requestPermission = async (permission): Promiss<boolean> => {
        console.log("AppPermission requestPermission permission: ",permission)
        try{
            const result = await request(permission)
            return result === RESULTS.GRANTED
        }catch (e){
            console.log("AppPermission requestPermission e: ",e)
            return false
        }
    }
}

const Permission = new AppPermission()
export {Permission, PERMISSION_TYPE}