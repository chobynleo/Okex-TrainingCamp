var Counter = artifacts.require("Counter");

Contract("Counter", function(accounts) {
    var counterInstance;
    it("Counter", function(){
        return Counter.deployed()
            .then(function(instance){
                counterInstance = instance
                return counterInstance.count()
            }).then(function(){
                return counterInstance.counter()
            }).then(function(){
                assert.equal(count, 1)
            })
    }) 
})

module.exports = async function(callback){

    var counter = await Counter.deployed()

    await counter.count()
    let value = await counter.counter()

    console.log(" current counter value: " + value)
    
}

