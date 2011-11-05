describe("ok", function() {
	it("expect ok be really ok", function() {
		expect('ok').toEqual('ok');
	});

	it("expect ok be really fail", function() {
		expect('ok').toEqual('fail');
	});
});	

