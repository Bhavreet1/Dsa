var flipAndInvertImage = function(image) {
    for(let i = 0;i<image.length;i++){
        let j=0;let k=image[0].length-1;
        while(j<k){
            [image[i][j],image[i][k]]=[image[i][k],image[i][j]]
            j++;
            k--;
        }
        j=0; k=image[0].length-1;
        while(j<=k){
            if(image[i][j]==0){
                image[i][j]=1;
            }
            else{
                image[i][j]=0
            }
            j++;
        }
    }
    return image
};