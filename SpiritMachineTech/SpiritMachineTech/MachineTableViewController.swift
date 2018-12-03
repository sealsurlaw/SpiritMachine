import UIKit

class MachineTableViewController: UITableViewController {
    
    /*
     Accessory Types:
         checkmark: status of machine is good
         info chevron: status alert! (make red)?
    */
    
    //test variables
    var machineList: [Machine] = [
        Machine(name: "Machine Juan",
                machineNumber: 1,
                online: true,
                listOfAlcohol: [Alcohol(name:"Scotch", full:true),
                                Alcohol(name:"Soda", full:true),
                                ]),
        Machine(name: "Machine stoopid Duhlan",
                machineNumber: 2,
                online: false,
                listOfAlcohol: [Alcohol(name:"Vodka", full:false),
                                Alcohol(name:"Water", full:true),
                                ]),
    ]
    
    var selectedMachine: Machine?
    
    @IBAction func addMachine(_ sender: Any) {
    }
    override func tableView(_ tableView: UITableView,
                            numberOfRowsInSection section: Int) -> Int
    {
        return machineList.count
    }
    
    override func tableView(_ tableView: UITableView,
                            cellForRowAt indexPath: IndexPath) -> UITableViewCell
    {
        let machine = machineList[indexPath.row]
 
        let cell = tableView.dequeueReusableCell(withIdentifier: "machineCell")!
        cell.textLabel?.text = machine.name
        var taskCheckmark: UITableViewCell.AccessoryType = .checkmark
        cell.tintColor = UIColor.green
        
        if(machine.online == false){
            taskCheckmark = .detailButton
            cell.tintColor = UIColor.red
        }
        cell.accessoryType = taskCheckmark
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        selectedMachine = machineList[indexPath.row]
        performSegue(withIdentifier: "machineDetailTransition", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let destination = segue.destination as? MachineDetailViewController {
            destination.machine = selectedMachine
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = "Machine List"
        // Do any additional setup after loading the view, typically from a nib.
    }
}

