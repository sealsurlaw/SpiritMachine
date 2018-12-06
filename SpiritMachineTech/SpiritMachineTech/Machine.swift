
struct Machine {
    var name:String
    let machineNumber:Int
    var online:Bool
    var listOfAlcohol: [Alcohol] = []
}


extension Machine {
    static func getMachineData() -> [Machine]{
        
        
        
        
        
        
        return([Machine(name: "Machine Juan Updated",
                       machineNumber: 1,
                       online: true,
                       listOfAlcohol: [Alcohol(name:"Scotch", full:true),
                                       Alcohol(name:"Soda", full:true),
                                       ])])
    }
}
