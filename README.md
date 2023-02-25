# Test Patterns

This is a project that contains some sample test patterns.

## Test Patterns Used

The test patterns used in this project include:
 - **Test Stub:** an object that mimics the behavior of a real object and is used as a substitute in tests. The stub can return predetermined values and records which methods were called. Example: 
```javascript
// This example is in /test/items-service.test.js
test('Should get the items with stub', async function () {
    sinon.stub(itemsData, 'getItems').returns([ {id_item: 1} ]);
    const items = await itemsService.getItems(itemsData);
    expect(items).toHaveLength(1);
    sinon.restore();
});
```

 - **Test Spy:** an object that records information about method calls, such as what arguments were passed and how many times the method was called. The goal is to verify whether the method was called correctly. Example: 
```javascript
// This example is in /test/items-service.test.js
test('Should get the items with spy', async function () {
    const spy = sinon.spy(itemsData, 'getItems');
    const items = await itemsService.getItems(itemsData);
    sinon.assert.calledOnce(spy);
    sinon.restore();
});
```

 - **Test Mock:** an object that simulates the behavior of a real object and is used as a substitute in tests. The mock can be configured to return specific values and verify whether the methods were called with the correct arguments. Example:
```javascript
// This example is in /test/items-service.test.js
test('Should get the items with mock', async function () {
    const mock = sinon.mock(itemsData);
    mock.expects('getItems').once().returns([{id_items: 1}]);
    const items = await itemsService.getItems(itemsData);
    expect(items).toHaveLength(1);
    mock.verify();
    sinon.restore();
});
```

 - **Test Fake:** an object that mimics the behavior of a real object but in a simplified way. It is usually used when it is difficult or impossible to use the real object in tests. Example:
```javascript
// This example is in /test/items-service.test.js
test('Should get the items with Fake', async function () {
    const itemsFake = {
        getItems() {
            return [{id_item : 1 }]
        }
    };
    const items = await itemsService.getItems(itemsFake)
    expect(items).toHaveLength(1);
});
```

## How to Use

To use this project, follow the steps below:

1. Clone this repository on your machine
2. Navigate to the project folder
3. Run the command `npm install` to install dependencies
4. Run the command `npm test` to run tests

## Project Structure

The project structure is organized as follows:

- `src/`: contains the project's source code files
- `test/`: contains the project's test files

## Author

This project was created by Ederson Macedo. You can contact her at ederson.mos@gmail.com.
