import ObjectMapper

class MachineResponse: Mappable {
//    var location: String?
//    var threeDayForecast: [Forecast]?
    var machines: [MachineJSON]?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
//        location <- map["location"]
//        threeDayForecast <- map["three_day_forecast"]
        machines    <- map["machines"]
    }
}

class MachineJSON: Mappable {
//    var day: String?
//    var temperature: Int?
//    var conditions: String?
    var id: Int?
    var alcohol: [AlcoholJSON]?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
        id      <- map["id"]
        alcohol <- map["alcohol"]
//        conditions <- map["conditions"]
    }
}

class AlcoholJSON: Mappable {
    var type: String?
    var full: Bool?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
        type    <- map["type"]
        full    <- map["full"]
    }
}
