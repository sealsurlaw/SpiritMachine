import Foundation
import Alamofire
import ObjectMapper
import AlamofireObjectMapper

struct User{
    let id:Int
    let email:String
    let memberSince:Date
}

extension User {
    static func getUserData(callback: @escaping (User) -> () ) {
        
        let URL = "https://spirit-machine.herokuapp.com/users/"+UserDefaults.standard.string(forKey: "token")!
        Alamofire.request(URL).responseObject { (response: DataResponse<UserResponse>) in
            
            let userResponse = response.result.value
            let currUser = userResponse?.user;
            
            let user = User(id: (currUser?.id!)!, email: (currUser?.email!)!, memberSince: (currUser?.date!)!)
            
            callback(user)
            
        }
        
        
    }
}
