import ObjectMapper

class UserResponse: Mappable {
    var user: UserJSON?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
        user    <- map["users"]
    }
}

class UserJSON: Mappable {
    var id: Int?
    var email: String?
    var date: Date?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
        var dateDouble: Double = 0.0
        
        id         <- map["user_id"]
        email      <- map["user_email"]
        dateDouble <- map["user_created"]
        
        date = Date(timeIntervalSince1970: dateDouble)
    }
}
