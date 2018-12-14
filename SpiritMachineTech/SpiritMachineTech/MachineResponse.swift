import ObjectMapper

class MachineResponse: Mappable {
    var machines: [MachineJSON]?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
        machines    <- map["machines"]
    }
}

class MachineJSON: Mappable {
    var id: Int?
    var alcohol: [AlcoholJSON]?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
        id      <- map["id"]
        alcohol <- map["alcohol"]
    }
}

class AlcoholJSON: Mappable {
    var type: String?
    var full: Bool?
    var date: Date?
    var cont: Int?
    
    required init?(map: Map){
        
    }
    
    func mapping(map: Map) {
        var dateDouble: Double = 0.0
        
        type       <- map["type"]
        full       <- map["full"]
        dateDouble <- map["empty_time"]
        cont       <- map["container"]
        
        date = Date(timeIntervalSince1970: dateDouble)
        
    }
}
