// const toggler = document.querySelector(".nav__toggler");
// const navbar = document.querySelector(".nav")
// toggler.addEventListener("click" , (e) => {
//     console.log("click ");
//     navbar.classList.toggle("nav__expanded")
// })

{/* <ul>
    <li class="tab active" data-target-value="tab-one">tab -1</li>
    <li class="tab" data-target-value="tab-two">tab -2</li>
    <li class="tab" data-target-value="tab-three">tab -3</li>
</ul>

<div class="">
    <div class="tab-content active" id="tab-one">tab-one</div>
    <div class="tab-content" id="tab-two">tab-two</div>
    <div class="tab-content" id="tab-three">tab-three</div>
</div> */}

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach((tab) => {
    tab.addEventListener('click' , (e) => {
        const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);
        
        tabs.forEach((tab) => tab.classList.remove('active'));
        tabContents.forEach((tabContent) => tabContent.classList.remove('active') );

        tab.classList.add('active');
        targeTabContent.classList.add('active');
    }) 
})