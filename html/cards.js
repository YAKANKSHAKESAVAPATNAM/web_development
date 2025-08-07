var MyCards=[
    {
        "Image":"http://localhost:8080/akki.jpg",
        "Price":1200,
        "Brand":"Nike",
    },
    {
        "Image":"http://localhost:8080/iamge-1.jpeg",
        "Price":1500,
        "Brand":"Adidas",
    },
    {
        "Image":"http://localhost:8080/image-2.jpeg",
        "Price":1000,
        "Brand":"Puma",
    },
    {
        "Image":"http://localhost:8080/image-3.jpeg",
        "Price":800,
        "Brand":"Reebok",
    },
    {
        "Image":"http://localhost:8080/image-4.jpeg",
        "Price":2000,
        "Brand":"Under Armour",
    },
    {
        "Image":"http://localhost:8080/earth.jpeg",
        "Price":1800,
        "Brand":"New Balance",
    },
    {
        "Image":"http://localhost:8080/jupiter.jpeg",
        "Price":1600,
        "Brand":"Asics",
    },
    {
        "Image":"http://localhost:8080/neptune.jpeg",
        "Price":1400,
        "Brand":"Skechers",
    },
    {
        "Image":"http://localhost:8080/sun.jpeg",
        "Price":1100,
        "Brand":"Fila",
    },
    {
        "Image":"http://localhost:8080/mars.jpeg",
        "Price":1300,
        "Brand":"Converse",
    },
]
var Cards=MyCards.map((ele)=>{
    return (
        `<div class="cards-section">
                <div class="image-section">
                    <img src="${ele.Image}" />
                </div>
                <div class="info-section">
                    <div class="Price:">${ele.Price}</div>
                    <div class="Brand:">${ele.Brand}</div>
                </div>
            </div>`
        )
    }
)
console.log(Cards);

Cards=Cards.join(" ");
var element =document.getElementsByClassName("parent-card")[0];
console.log(element);
element.innerHTML=Cards;
