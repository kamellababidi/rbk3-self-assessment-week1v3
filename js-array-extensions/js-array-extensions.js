//2:completed
// your code here
var Instantiation_Patterns=function (){
	var instance={};
	instance.array=[1,2,3];
	_.extend(instance,methods)
	return instance;
}
var methods={};
methods.first=function(){
	return this.array.unshift();
}
methods.last=function(){
	return this.array.pop();
}