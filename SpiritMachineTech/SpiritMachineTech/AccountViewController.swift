//
//  AccountViewController.swift
//  SpiritMachineTech
//
//  Created by Juan Angeles on 12/3/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//

import UIKit

class AccountViewController: UIViewController {

    //member since, id, email

    var user:User?
    
    @IBAction func logout(_ sender: Any) {
        UserDefaults.standard.removeObject(forKey: "token")
        Switcher.updateRootVC()
    }
    
    @IBOutlet weak var id: UILabel!
    @IBOutlet weak var email: UILabel!
    @IBOutlet weak var memberSince: UILabel!
    
    override func viewDidLoad(){
        super.viewDidLoad()
        self.title = "Account"
        
        id.text = "ID: \(String(describing: user?.id))"
        email.text = "Email: \(String(describing: user?.email))"
        memberSince.text = "Member Since: \(String(describing: (user?.memberSince)!))"
        
    }
}
