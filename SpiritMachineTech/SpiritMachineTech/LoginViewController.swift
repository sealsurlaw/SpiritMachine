//
//  LoginViewController.swift
//  SpiritMachineTech
//
//  Created by Juan Angeles on 12/5/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//

import UIKit


class LoginViewController: UIViewController {
    
    
    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var password: UITextField!
    
    
    @IBAction func loginButton(_ sender: Any) {
        
        
        
        
        
        UserDefaults.standard.set(true, forKey: "status")
        Switcher.updateRootVC()
    }
    
    var emailString: String {
        if let text = email.text {
            return text
        } else {
            return ""
        }
    }
    
    var pwString: String {
        if let text = password.text {
            return text
        } else {
            return ""
        }
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
}
