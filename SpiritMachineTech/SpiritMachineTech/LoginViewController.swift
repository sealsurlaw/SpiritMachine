//
//  LoginViewController.swift
//  SpiritMachineTech
//
//  Created by Juan Angeles on 12/5/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//

import UIKit
import Alamofire


class LoginViewController: UIViewController {
    
    
    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var password: UITextField!
    
    
    @IBAction func loginButton(_ sender: Any) {
        
        let parameters: Parameters = [
            "email":    email.text!,
            "password": password.text!
        ]
        
        Alamofire.request("https://spirit-machine.herokuapp.com/login", method: .post, parameters: parameters).responseJSON { response in
            
            if let _ = response.error {
                let alert = UIAlertController(title: "Incorrect Email or Password", message: "Please provide a valid email and password to continue.", preferredStyle: .alert)
                
                alert.addAction(UIAlertAction(title: "Okay", style: .default, handler: nil))
                
                self.present(alert, animated: true)
            }
            
            
            if let data = response.result.value {
                UserDefaults.standard.set(data, forKey: "token")
                Switcher.updateRootVC()
            }
            
        }
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
