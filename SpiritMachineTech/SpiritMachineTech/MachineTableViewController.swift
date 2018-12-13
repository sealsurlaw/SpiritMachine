import UIKit
import Alamofire
import ObjectMapper
import AlamofireObjectMapper

class MachineTableViewController: UITableViewController {
    
    var refresher: UIRefreshControl!
    var machineList: [Machine] = []
    var selectedMachine: Machine?
    
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
        
        Machine.getMachineData(callback: { (_ machineArray: [Machine]) -> () in
            self.machineList = machineArray
            self.tableView.reloadData()
        })
        
        refresher = UIRefreshControl()
        tableView.addSubview(refresher)
        refresher.addTarget(self, action: #selector(updateMachineList), for: .valueChanged)
    }
    
    
    
    @objc func updateMachineList(){

        Machine.getMachineData(callback: { (_ machineArray: [Machine]) -> () in
            self.machineList = machineArray
            
            self.tableView.reloadData()
            self.refresher.endRefreshing()
        })

    }
}

