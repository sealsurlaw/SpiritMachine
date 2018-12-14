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
        
        if let user_id = UserDefaults.standard.string(forKey: "user_id") {
            id.text = "ID: \(user_id)"
        } else {
            id.text = "ID: No ID"
        }
        
        if let user_email = UserDefaults.standard.string(forKey: "user_email") {
            email.text = "Email: \(user_email)"
        } else {
            email.text = "Email: No email"
        }
        
        if let user_created = UserDefaults.standard.string(forKey: "user_created") {
            memberSince.text = "Member Since: \n \t \(user_created)"
        } else {
            memberSince.text = ""
        }
        
//        id.text = "ID: \()"
//        email.text = "Email: \(String(UserDefaults.standard.string(forKey: "user_email")!))"
//        memberSince.text = "Member Since: \(String(UserDefaults.standard.string(forKey: "user_created")!))"
        
    }
}
