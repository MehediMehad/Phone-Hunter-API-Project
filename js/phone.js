const loadPhone = async (searchPhone) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
  const data = await res.json();
  const phones = data.data;
  desplayPhones(phones);
};
const desplayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  // clear phone container cards befor adding new card
  phoneContainer.textContent= ''
  // display show all button if there are more than 12 phones
  const showAllContainer = document.getElementById('showAllContainer')
  if (phones.length > 12) {
    showAllContainer.classList.remove('hidden')
  }
  else{
    showAllContainer.classList.add('hidden')
  }
  // display only first 12 phones
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    // console.log(phone);
    // 2: create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl border-2 hover:border-2 hover:border-sky-600`;
    // 3: set inner html
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
    phoneContainer.appendChild(phoneCard);
  });
};
// handele search button
const handeleSearch = () =>{
  const searchField = document.getElementById('searchField')
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText)
}
