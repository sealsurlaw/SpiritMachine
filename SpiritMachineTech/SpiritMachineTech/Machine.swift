import Alamofire
import ObjectMapper
import AlamofireObjectMapper

struct Machine {
    var name: String
    let machineNumber: Int
    var online: Bool
    var listOfAlcohol: [Alcohol] = []
    
    init(id: Int, alcohol: [Alcohol]) {
        name = "Machine number " + String(id)
        machineNumber = id
        online = true
        listOfAlcohol = alcohol
    }
    
    init(id: Int) {
        name = "Machine number " + String(id)
        machineNumber = id
        online = true
        listOfAlcohol = []
    }
}


extension Machine {
    static func getMachineData(callback: @escaping ([Machine]) -> () ) {
        
        let URL = "https://spirit-machine.herokuapp.com/tokens/"+UserDefaults.standard.string(forKey: "token")!
        Alamofire.request(URL).responseObject { (response: DataResponse<MachineResponse>) in
            
            var machineArray: [Machine] = []
            
            let machineResponse = response.result.value
            
            if let machines = machineResponse?.machines {
                
                for machine in machines {
                    var currAlcohol: Alcohol
                    var currMachine: Machine = Machine(id: machine.id!)
                    
                    for alcohol in machine.alcohol! {
                        currAlcohol = Alcohol(name: alcohol.type!, full: alcohol.full!)
                        currMachine.listOfAlcohol.append(currAlcohol)
                    }
                    
                    machineArray.append(currMachine)
                    
                }
            }
            
            callback(machineArray)
            
        }

        
    }
}
