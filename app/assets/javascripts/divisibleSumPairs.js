function divisibleSumPairs(n, k, ar) {
      let count = 0;
      let i= 0; i<(ar.length)-1; i++
    for( let j=i+1; j<(ar.length);j++) {
        if((ar[i]+ar[j])%k==0){
            count++;
        }
    }
return count;
}