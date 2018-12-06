//
//  AccountViewController.swift
//  SpiritMachineTech
//
//  Created by Juan Angeles on 12/3/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//

import UIKit

class AccountViewController: UIViewController {
    

    @IBAction func logout(_ sender: Any) {
        UserDefaults.standard.set(false, forKey: "status")
        Switcher.updateRootVC()
    }
    
    override func viewDidLoad(){
        super.viewDidLoad()
        self.title = "Account"
    }
}
