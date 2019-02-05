const posts=[
    {titile:'post one', body:'this is post one'},
    {titile:'post one', body:'this is post one'}
]

function getPosts(){
    setTimeout(()=>{
    let output=''
    posts.forEach((v,i)=>{
        output +=`<li>${v.titile}</li>`
    })
    document.body.innerHTML=output;
    },1000);
}

function createPost(post, callback){
    setTimeout(()=>{
      posts.push(post)
      callback();
    },2000)
}


createPost({titile:'post three',body:'this is post three'},getPosts);

