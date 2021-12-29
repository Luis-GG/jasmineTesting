describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("updateServerTable() should create + append a Tr with input displayed", function () {
    submitServerInfo()
    updateServerTable()
    const trCount = document.querySelectorAll("#serverTable td");


    expect(trCount.length).toEqual(3);
    expect(trCount[0].textContent).toEqual("Alice");
    expect(trCount[1].textContent).toEqual("$0.00");
  })

  afterEach(function () {
    allServers = {};
    serverId = 0;
  });

});
