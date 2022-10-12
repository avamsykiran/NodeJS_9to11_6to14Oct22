//closures  is a function that returns another fucntion

const nextIdClosure = seed => {
    var initVal = seed;

    return (() => {
        return ++initVal;
    })
};

const nextDeptId = nextIdClosure(10);
const nextEmpId = nextIdClosure(100);
const nextAssetId = nextIdClosure(1000);

console.log(nextEmpId());
console.log(nextEmpId());
console.log(nextEmpId());
console.log(nextDeptId());
console.log(nextDeptId());
console.log(nextDeptId());


