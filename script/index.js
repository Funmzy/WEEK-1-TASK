let cardEl = document.getElementById("card-el");
let images = ["https://getwallpapers.com/wallpaper/full/4/f/a/1026623-cool-luke-skywalker-wallpaper-1667x2000-for-hd.jpg",
              "https://comicvine1.cbsistatic.com/uploads/original/7/70801/4771682-11893891_1007879992596935_6464013360703655307_o.jpg",
              "https://fsa.zobj.net/crop.php?r=KUxDD938F-qhYGMvy6E7pNWyJwsVOygwad9WvwcwxWxsU7tqsLhgqldAJeG6--VFkgosO-A8R-t8XpWIEGHmnFw9v074keN5reDm6pX_IATP6IfyZZJQeu_GNty5vcyZOfHthzWwZTyFFDBz",
              "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
              "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
              "https://i0.wp.com/www.heyuguys.com/images/2017/06/Joel-Edgerton-Star-Wars.jpg?fit=1200%2C901&ssl=1",
              "https://i.pinimg.com/originals/29/71/e3/2971e3eaaac6d31679aa0339f0b0c11b.jpg",
              "https://www.sideshow.com/storage/product-images/100074/r5-d4_star-wars_gallery_5c4e07d19ee02.jpg",
              "https://www.figurerealm.com/userimages/characterprofiles/1000/755-1-58af0d56c1e30.jpg",
              "https://i0.wp.com/www.coffeewithkenobi.com/wp-content/uploads/2014/04/ObiWanKenobi-2.jpg"]
let loadingGif = document.querySelector(".loading");
let tableEL = document.querySelector("#table");

fetch("https://swapi.dev/api/people")
.then(res => res.json())
.then(data => {
    
    
    if(!data?.results){
        tableEL.innerHTML = loadingGif;
        
        
    }
    else{
        
        let detail = data["results"];
        for(let i = 0; i < detail.length; i++){
            cardEl.innerHTML += `
            <div class = "col-sm-12 col-md-6 col-lg-4"><br>
        <div class="card">
            <img src="${images[i]}" class="card-img-top" alt="Anakin Skywalker">
            <div class="card-body">
                 <a href="#" class="btn detail" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">${detail[i].name}</a>
             </div>
        </div>
       
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Profile</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <h5 class="card-title">Name: ${detail[i].name}</h5>
          <h5 class="card-title">Height: ${detail[i].height}</h5>
          <h5 class="card-title">Gender: ${detail[i].gender}</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>
            `
        }
        
        tableEL.removeChild(loadingGif)
        tableEL.appendChild(cardEl);
        
    }

    })
  
