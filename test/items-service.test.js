const itemsService = require('../src/items-service');
const itemsData = require('../src/items-data');
const sinon = require('sinon');

test('Should get the items', async function () {
    const items = await itemsService.getItems(itemsData);
    expect(items).toHaveLength(3);
});

test('Should get the items with stub', async function () {
    sinon.stub(itemsData, 'getItems').returns([ {id_item: 1} ]);
    const items = await itemsService.getItems(itemsData);
    expect(items).toHaveLength(1);
    sinon.restore();
});

test('Should get the items with spy', async function () {
    const spy = sinon.spy(itemsData, 'getItems');
    const items = await itemsService.getItems(itemsData);
    sinon.assert.calledOnce(spy);
    sinon.restore();
});

test('Should get the items with mock', async function () {
    const mock = sinon.mock(itemsData);
    mock.expects('getItems').once().returns([{id_items: 1}]);
    const items = await itemsService.getItems(itemsData);
    expect(items).toHaveLength(1);
    mock.verify();
    sinon.restore();
});

test('Should get the items with Fake', async function () {
    const itemsFake = {
        getItems() {
            return [{id_item : 1 }]
        }
    };
    const items = await itemsService.getItems(itemsFake)
    expect(items).toHaveLength(1);
});
