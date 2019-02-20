//
//  AlcoholDetailViewController.swift
//  SpiritMachineTech
//
//  Created by Juan Angeles on 12/13/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//

import UIKit

class AlcoholDetailViewController: UIViewController {
    var alcohol:Alcohol?
    
    @IBOutlet weak var nameLabel: UILabel!
    
    @IBOutlet weak var timeLabel: UILabel!
    
    
    @IBOutlet weak var containerLabel: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        nameLabel.text = alcohol?.name
        containerLabel.text = "Container: \(String(describing: (alcohol?.container)!))"
        if alcohol?.full == true {
            timeLabel.text = "Full"
        } else {
            timeLabel.text = "Empty at time: \n \t \(String(describing: (alcohol?.time_empty)!))"
        }

    }
}
