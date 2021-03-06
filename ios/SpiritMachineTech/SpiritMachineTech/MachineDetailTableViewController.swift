import UIKit

class MachineDetailViewController: UIViewController,UITableViewDataSource,  UITableViewDelegate{
    var machine:Machine?
    var list:[Alcohol] = []
    var selectedAlcohol:Alcohol?
    
    @IBOutlet weak var status: UILabel!
    @IBOutlet weak var alcoholTable: UITableView!
    
    func tableView(_ tableView: UITableView,
                            numberOfRowsInSection section: Int) -> Int
    {
        return list.count
    }
    
    func tableView(_ tableView: UITableView,
                            cellForRowAt indexPath: IndexPath) -> UITableViewCell
    {
        let alcohol = list[indexPath.row]
        
        let cell = alcoholTable.dequeueReusableCell(withIdentifier: "alcoholCell")!
        cell.textLabel?.font = UIFont(name:"American Typewriter", size:18)
        cell.textLabel?.text = alcohol.name
        var taskCheckmark: UITableViewCell.AccessoryType = .checkmark
        cell.tintColor = UIColor.green
        
        if(alcohol.full == false){
            taskCheckmark = .detailButton
            cell.tintColor = UIColor.red
        }
        cell.accessoryType = taskCheckmark
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        selectedAlcohol = list[indexPath.row]
        performSegue(withIdentifier: "alcoholDetailTransition", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let destination = segue.destination as? AlcoholDetailViewController {
            destination.alcohol = selectedAlcohol
        }
    }
    override func viewDidLoad(){
        super.viewDidLoad()
        self.title = machine?.name
        list = (machine?.listOfAlcohol)!      //force unwrapping?!?!?!
        
        if machine?.online == true {
            status.text = "Online"
        } else {
            status.text = "Offline"
        }
        
        alcoholTable.delegate = self
        alcoholTable.dataSource = self
    }
    
}
