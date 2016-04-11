
describe("probando controlador hello", function()
{
    beforeEach(module("app"));
 
    describe("helloCtrl", function()
    {
        var scope, ctrl;
 
        beforeEach(inject(function($rootScope, $controller)
        {
            scope = $rootScope.$new();
            ctrl = $controller("helloCtrl", {$scope:scope});
        }));
 
        it("debe estar definida una variable hello", function()
        {
            expect(scope.hello).toBeDefined();
        })
        it("el valor de hello es hola", function()
{
    expect(scope.hello).toEqual("hola");
})
    })
})