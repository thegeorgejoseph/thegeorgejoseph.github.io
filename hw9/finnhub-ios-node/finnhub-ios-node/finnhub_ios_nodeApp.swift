//
//  finnhub_ios_nodeApp.swift
//  finnhub-ios-node
//
//  Created by George Joseph on 4/14/22.
//

import SwiftUI
import FacebookCore

@main
struct finnhub_ios_nodeApp: App {
    @AppStorage("wallet") var wallet:Double = 25000.00
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(MockModel(ticker: "MSFT")) // this needs to be removed when AppStorage logic is solid
                .environmentObject(CustomPortfolioStorageModel())
        }
    }
}

extension Optional: RawRepresentable where Wrapped: Codable {
    public var rawValue: String {
        guard let data = try? JSONEncoder().encode(self),
              let json = String(data: data, encoding: .utf8)
        else {
            return "{}"
        }
        return json
    }

    public init?(rawValue: String) {
        guard let data = rawValue.data(using: .utf8),
              let value = try? JSONDecoder().decode(Self.self, from: data)
        else {
            return nil
        }
        self = value
    }
}
