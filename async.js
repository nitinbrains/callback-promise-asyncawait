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

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error=false;

            if(!error){
                resolve();
            } else {
                reject('something ent wrong')
            }

          },2000)
    })
}

async function init(){
    await createPost({titile:'Post three', body:'this is post three'})

    getPosts();
}

init();
















