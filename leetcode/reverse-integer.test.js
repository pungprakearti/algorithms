const reverseInt = require("./reverse-integer")

describe("#reverseInt", function(){
  it("Finds the two numbers that equal the target", function(){
    expect(reverseInt(123)).toEqual(321)
    expect(reverseInt(-123)).toEqual(-321)
    expect(reverseInt(120)).toEqual(21)
    expect(reverseInt(0)).toEqual(0)
  })
})