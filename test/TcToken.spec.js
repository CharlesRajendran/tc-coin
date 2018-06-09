var TcToken = artifacts.require('./TcToken.sol');

contract('TcToken', (accounts) => {
    it('check the total supply on deployment', () => {
        TcToken.deployed().then(i => token = i)
        .then(token => token.totalSupply())
        .then(totalSupply => {
            // expect(totalSupply.toNumber()).equal(10000);
            assert.equal(totalSupply.toNumber(), 10000, "Total supply should be 10000");
        })
    });
});