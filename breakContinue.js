const nums=[1,2,3,4,5,6,7];
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    // if(nums[index]>3)
    // {
    //     break;
    // }

    console.log(nums[index]);
    console.log('Example Continue');
    if(nums[index]<0)
    {
        continue;//ignore negative
    }

    console.log(nums[index]);
    
}
