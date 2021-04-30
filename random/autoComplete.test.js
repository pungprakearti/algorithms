const autoComplete = require("./autoComplete")

const arr = [
  "Apples",
  "Apricots",
  "Bananas",
  "Grapes",
  "Kiwis",
  "Mangoes",
  "Pears",
  "Strawberries",
  "Watermelons"
]

describe("#autoComplete", function(){
  it("returns an array of matching words", function(){
    expect(autoComplete("", arr)).toEqual([])
    expect(autoComplete("aP", arr)).toEqual(["Apples", "Apricots"])
    expect(autoComplete("aPp", arr)).toEqual(["Apples"])
    expect(autoComplete("Zebras", arr)).toEqual([])
    expect(autoComplete("Watermelonss", arr)).toEqual([])
    expect(autoComplete("Watermelons", arr)).toEqual(["Watermelons"])
  })
})
