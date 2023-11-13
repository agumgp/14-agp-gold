import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./style.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Faq = () => {
    return (
        <div class="faq-container" id="FAQ">
    <div class="faq">
        <h1>Frequently Asked Question</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Apa saja syarat yang dibutuhkan?
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio in vel earum nobis inventore! Nihil ut laboriosam suscipit id, aliquam similique tempora eum! Eligendi quidem quia recusandae sunt aliquid!
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Berapa hari minimal sewa mobil lepas kunci?
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil earum, temporibus reprehenderit exercitationem accusantium et tenetur ducimus eum quisquam iure laborum saepe qui fugit dolore facere sapiente explicabo nesciunt error!  
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Berapa hari sebelumnya sebaiknya booking sewa mobil?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, corrupti ab? Unde neque atque sed provident animi ducimus? Ducimus ipsam, eaque nemo quaerat voluptatum porro praesentium numquam aspernatur quos iste.  
            </div>
        </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Apakah Ada biaya antar-jemput?
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, corrupti ab? Unde neque atque sed provident animi ducimus? Ducimus ipsam, eaque nemo quaerat voluptatum porro praesentium numquam aspernatur quos iste.  
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header-5">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Bagaimana jika terjadi kecelakaan
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, corrupti ab? Unde neque atque sed provident animi ducimus? Ducimus ipsam, eaque nemo quaerat voluptatum porro praesentium numquam aspernatur quos iste.  
            </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Faq;