let mainDiv = document.querySelector(".container");
{/* <article class="flex-32 article">
          <div>
            <img class="flexible-width"
              src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg">
            <h3>Eddard "Ned" Stark</h3>
          </div>
          <h4>"Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark"</h3>

            <div class="more-link">
              <a class="link" href="">Learn More!</a>
            </div>
        </article> */}
got.houses.forEach(item=>{
    item.people.forEach(people =>{
    let article = document.createElement("article");
    article.classList.add("flex-32", "article");
    let div = document.createElement("div");
    let img = document.createElement("img")
    img.src = people.image;
    img.classList.add("flexible-width");
    let h3 = document.createElement("h3");
    h3.innerText = people.name
    div.append(img,h3);
    let h4 = document.createElement("h4")
    h4.innerText = people.description
    let div2 = document.createElement("div");
    div2.classList.add("more-link");
    let a = document.createElement("a")
    a.classList.add("link");
    a.href = " "
    a.innerText = "Learn More!"
    div2.append(a);
    article.append(div,h4,div2);
    mainDiv.append(article);
    })
})