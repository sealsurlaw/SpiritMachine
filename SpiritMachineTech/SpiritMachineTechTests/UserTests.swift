//
//  UserTests.swift
//  SpiritMachineTechTests
//
//  Created by Juan Angeles on 12/13/18.
//  Copyright © 2018 spiritmachine. All rights reserved.
//


import XCTest
import ObjectMapper
@testable import SpiritMachineTech

class UserTests: XCTestCase {
    
    var user: User!
    var user2: UserJSON!
    //let userMapper = Mapper<UserJSON>()
    
    override func setUp() {
        super.setUp()
        
        user = User(id: 1, email: "mail@mail.com", memberSince: Date(timeIntervalSince1970: 1544742926.84))
        let userJSON = "{\"user_id\":1,\"user_email\":\"mail@mail.com\",\"user_created\":1544742926.84}"
        
//        let json = UserJSON(JSONString: userJSON)
        user2 = UserJSON(JSONString: userJSON)
        print(user2)
        //user2 = User(id: (json?.id!)!, email: (json?.email!)!, memberSince: (json?.date!)!)
        
    }
    
    func test_jsonEqualID() {
        XCTAssertEqual(user.id, user2.id)
    }
    
    func test_jsonEqualEmail() {
        XCTAssertEqual(user.email, user2.email)
    }
    
    func test_jsonEmailDate(){
        XCTAssertEqual(user.memberSince, user2.date)
    }
}
