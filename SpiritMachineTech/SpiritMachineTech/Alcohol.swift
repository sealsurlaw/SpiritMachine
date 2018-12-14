import Foundation
import Alamofire
import ObjectMapper
import AlamofireObjectMapper

struct Alcohol {
    var name: String
    var full: Bool
    var time_empty: Date
    var container: Int
}

extension Alcohol {
    static func getAlcoholData(machine: Int, container: Int, callback: @escaping (Alcohol) -> () ) {
        
        let URL = "https://spirit-machine.herokuapp.com/machine/"+String(machine)+"/alcohol/"+String(container)
                
        Alamofire.request(URL).responseObject { (response: DataResponse<AlcoholJSON>) in
            
            let alcoholResponse = response.result.value
            
            let alcohol = Alcohol(name: (alcoholResponse?.type)!, full: (alcoholResponse?.full)!, time_empty: (alcoholResponse?.date)!, container: (alcoholResponse?.cont)!)
                        
            callback(alcohol)
        }
    }
}
