//
//  MachineTests.swift
//  SpiritMachineTechTests
//
//  Created by Juan Angeles on 12/13/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//

import XCTest
@testable import SpiritMachineTech

// Unit test of machine and alcohol.
//

class MachineTests: XCTestCase {
    
    var machine: Machine!
    var machine2: Machine!
    
    override func setUp() {
        super.setUp()
        machine = Machine(id: 4, alcohol: [
            Alcohol(
                name: "Vodka",
                full: true,
                time_empty: Date(timeIntervalSince1970: 1544742926.84),
                container: 1),
            Alcohol(
                name: "Tequila",
                full: true,
                time_empty: Date(timeIntervalSince1970: 1544742926.84),
                container: 1)])
        let json = MachineJSON(JSONString: "{\"id\":4,\"alcohol\":[{\"type\":\"Vodka\",\"full\":true,\"container\":1,\"empty_time\":\"1544742926.84\"},{\"type\":\"Tequila\",\"full\":true,\"container\":2,\"empty_time\":\"1544742926.84\"}]}")
        machine2 = Machine(id: json!.id!,
               alcohol: [
                    Alcohol(name: json!.alcohol![0].type!, full: json!.alcohol![0].full!, time_empty: json!.alcohol![0].date!, container: json!.alcohol![0].cont!),
                    Alcohol(name: json!.alcohol![1].type!, full: json!.alcohol![1].full!, time_empty: json!.alcohol![1].date!, container: json!.alcohol![1].cont!)
            ])
        
    }
    
    
    func test_machineJSON(){
        //testing for machine variables
        XCTAssertEqual(machine.machineNumber, machine2.machineNumber)
        //testing for machine - list of alcohol variables.
        XCTAssertEqual(machine.listOfAlcohol[0].name, machine2.listOfAlcohol[0].name)
    }
}

