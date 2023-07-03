const vergi = 0.18;
const indirim = 0.7;

let sepettekiler = [
    { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
]

ekranaBastir();

function ekranaBastir() {
    sepettekiler.forEach((ürün) => {
        const {name,price,adet,img} = ürün
        document.querySelector("#ürün-panel").innerHTML += `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="${img}"   class="img-fluid  rounded" alt="..." />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${name} </h5>
                   <div class="ürün-price">
                          <p class="text-warning h2">$
                            <span class="indirim-price">${(price*indirim).toFixed(2)}  </span>
                            <span class="h5 text-dark text-decoration-line-through">${price}  </span>
                          </p>
                        </div>
      
                        
                        <div
                          class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                        >
                          <div class="adet-controller">
                            <button class="btn btn-secondary btn-sm">
                              <i class="fas fa-minus"></i>
                            </button>
                            <p class="d-inline mx-4" id="ürün-adet">${adet}  </p>
                            <button class="btn btn-secondary btn-sm">
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                        <div class="ürün-removal mt-4">
                          <button class="btn btn-danger btn-sm w-100 remove-ürün">
                            <i class="fa-solid fa-trash-can me-2"></i>Remove
                          </button>
                        </div>
                        <div class="mt-2">
                          Ürün Toplam: $<span class="ürün-toplam">${(price*indirim*adet).toFixed(2)}  </span>
                        </div>
            </div>
          </div>
        </div>
      </div>`
  
    });


document.querySelectorAll(".remove-ürün").forEach((btn) => {
    btn.onclick = () => {
        btn.closest(".card").remove()
    }
})


}