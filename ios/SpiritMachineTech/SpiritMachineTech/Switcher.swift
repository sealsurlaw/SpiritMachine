//
//  Switcher.swift
//  SpiritMachineTech
//
//  Created by Juan Angeles on 12/5/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//

import Foundation
import UIKit

class Switcher {
    
    static func updateRootVC(){
        
        let status: String? = UserDefaults.standard.string(forKey: "token")
        var rootVC: UIViewController?
        
        if (status == nil) {
            rootVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "loginvc") as! LoginViewController
        }
        else {
            rootVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "tabbarvc") as! TabBarViewController
        }
        
        let appDelegate = UIApplication.shared.delegate as! AppDelegate
        appDelegate.window?.rootViewController = rootVC
        
    }
    
}
