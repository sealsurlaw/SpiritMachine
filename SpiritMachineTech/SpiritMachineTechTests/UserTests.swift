//
//  UserTests.swift
//  SpiritMachineTechTests
//
//  Created by Juan Angeles on 12/13/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//


import XCTest
@testable import SpiritMachineTech

class UserTests: XCTestCase {
    
    var user: User!
    var user2: User!
    
    override func setUp() {
        super.setUp()
        
        user = User(id: 1, email: "helo@mail.com", memberSince: Date(timeIntervalSince1970: 1544742926.84))
        let userJSON = "{“users”:{“user_id”:1,“user_email”:“mail@mail.com”,“user_created”:1544746160.175}}"
        let json = UserJSON(JSONString: userJSON)
        user2 = User(id: (json?.id)!, email: (json?.email)!, memberSince: (json?.date)!)
        
    }
    
    func test_jsonEqualID() {
        XCTAssertEqual(user.id, user2.id)
    }
    
    func test_jsonEqualEmail() {
        XCTAssertEqual(user.email, user2.email)
    }
    
    func test_jsonEamilDate(){
        XCTAssertEqual(user.memberSince, user2.memberSince)
    }
}
