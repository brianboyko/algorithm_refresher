import LinkedList from '../src/linkedList';

describe('LinkedList', () => {
  let links = new LinkedList("one");
  it("constructs a linked list", () => {
    expect(links.constructor.name).toBe("LinkedList");
  })
  it("exports to array and pushes", () => {
    expect(links.exportToArray()).toEqual(['one']);
    links.push("two")
    links.push("three");
    expect(links.exportToArray()).toEqual(['one', 'two', 'three'])
  })
  it('finds and inserts', () => {
    let twoPointFive = links.createNode("2.5");
    let two = links.searchList("two");
    console.log("two", two)
    links.insertAfter(two, twoPointFive);
    expect(links.exportToArray()).toEqual(['one', 'two', 
    '2.5', 'three'])
  })
})

// This isn't exactly extensive, but LL's are kinda simple. 