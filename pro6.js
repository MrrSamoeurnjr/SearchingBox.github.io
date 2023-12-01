let filterArray = []
let products = [
    {
        id:1,
        src:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg',
        name:'Sothun',
        desc:'1200'
    },
    {
        id:2,
        src:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg',
        name:'Vireak',
        desc:'1200'
    },
    {
        id:3,
        src:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg',
        name:'Channy',
        desc:'1200'
    },
    {
        id:4,
        src:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg',
        name:'Loy',
        desc:'1200'
    },
    {
        id:5,
        src:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg',
        name:'Bona',
        desc:'1200'
    },
    {
        id:6,
        src:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg',
        name:'Samoeurn',
        desc:'1200'
    },
]
showProducts(products)
function showProducts(currenArray) {
    document.getElementById('card').innerText = ''
    for (var i = 0; i < currenArray.length; i++) {
        document.getElementById('card').innerHTML += `
            <div class='col-md-4 mt-3'>
                <div class='card p-3 ps-5 pe-5'>
                    <h4 class='text-capitalize text-center'>${currenArray[i].name}</h4>
                    <img src='${currenArray[i].src}' width='100%' height='320px'/>
                    <p class='mt-2'>${currenArray[i].desc}</p>
                    <button class='btn btn-primary w-100 mx-auto'>More</button>
                </div>
            </div>
        `;
    }
}
document.getElementById('myinput').addEventListener('keyup' , function(){
    let text = document.getElementById('myinput').value;
    filterArray = products.filter(function(a){
        if(a.name.includes(text)){
            return a.name
        }
    })
    if(this.value == '') {
        showProducts(products)
    }
    else {
        if( filterArray == ''){
            document.getElementById('para').style.display = 'block';
            document.getElementById('card').innerHTML = '';
        }  
        else {
            showProducts(filterArray);
            document.getElementById('para').style.display = 'none';
        }
    }
})