const rewire = require("rewire")
const posts = rewire("./posts")
const getData = posts.__get__("getData")
// @ponicode
describe("getData", () => {
    test("0", () => {
        let callFunction = () => {
            getData("×")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getData("...")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getData("=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getData("{")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getData("}}")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getData(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.getByCategory", () => {
    test("0", () => {
        let callFunction = () => {
            posts.getByCategory("/*", "Credit Card Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.getByCategory("]", "Investment Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.getByCategory("+=", "Checking Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.getByCategory(")", "Investment Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.getByCategory("new", "Checking Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.getByCategory(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.get", () => {
    test("0", () => {
        let callFunction = () => {
            posts.get(",", 56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.get("(", 56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.get(",", "a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.get("):", 56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.get("{", 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.get(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.getAll", () => {
    test("0", () => {
        let callFunction = () => {
            posts.getAll("~@")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.getAll(",")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.getAll(":")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.getAll("+")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.getAll("`")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.getAll(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.add", () => {
    test("0", () => {
        let callFunction = () => {
            posts.add("([{", { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", timestamp: 320, title: "Internal Interactions Strategist", body: "Michael", author: "user123", category: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.add(",", { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", timestamp: 4, title: "Direct Functionality Orchestrator", body: "Edmond", author: "user name", category: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.add(":", { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", timestamp: 100, title: "Future Interactions Representative", body: "Edmond", author: "user name", category: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.add(",", { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", timestamp: 380, title: "Internal Interactions Strategist", body: "Jean-Philippe", author: "user name", category: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.add("*", { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", timestamp: 50, title: "Direct Functionality Orchestrator", body: "Pierre Edouard", author: "user_name", category: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.add("", { id: "", timestamp: Infinity, title: "", body: "", author: "", category: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.vote", () => {
    test("0", () => {
        let callFunction = () => {
            posts.vote("([{", 987650, "upVote")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.vote(",", 12, "-resolved")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.vote("\\", 12, "-u")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.vote("#", "bc23a9d531064583ace8f67dad60f6bb", "Unknown debug flag: %s\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.vote("}}", 12345, "--capi-reexport-cincludes")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.vote("", NaN, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.disable", () => {
    test("0", () => {
        let callFunction = () => {
            posts.disable("}", 987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.disable("([{", "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.disable(".", 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.disable(",", 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.disable("/*", 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.disable("", Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.edit", () => {
    test("0", () => {
        let callFunction = () => {
            posts.edit(".", 12345, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.edit("]", 56784, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.edit("(", "a1969970175", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.edit("}}", 56784, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.edit("<", "a1969970175", "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.edit("", NaN, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.incrementCommentCounter", () => {
    test("0", () => {
        let callFunction = () => {
            posts.incrementCommentCounter("\n", 12345, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.incrementCommentCounter("{", 56784, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.incrementCommentCounter("not", "a1969970175", 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.incrementCommentCounter("=", 12345, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.incrementCommentCounter("new", 12, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.incrementCommentCounter("", NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
