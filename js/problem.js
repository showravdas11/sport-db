// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।

// const loadAlbums = () => {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//         .then(res => res.json())
//         .then(data => displayLoadAlbums(data))
// }

// loadAlbums()

// const displayLoadAlbums = albums => {
//     // console.log(albums);
//     const faltualbums = document.getElementById('faltu-albums')

//     for (const album of albums) {
//         // console.log(album);
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <h3>${album.title}<h3>
//         <h4>${album.userId}<h4>
//         `
//         faltualbums.appendChild(div)
//     }
// }

// randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে।


const randomUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayRandomUsers(data))
}

randomUser()

const displayRandomUsers = data => {
    // console.log(randoms);
    const ranodomly = document.getElementById('random-user')
    const randoms = data.results
    for (const random of randoms) {
        console.log(random);

        // const url = `https://randomuser.me/api/portraits/men/.jpg + ${random.picture.large}`


        const imgUrl = "https://randomuser.me/api/portraits/women/59.jpg" + random.picture
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <img src="${imgUrl}>" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${random.email}</h5>
            <p class="card-text">${random.location.city} ${random.location.country}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
        `

        ranodomly.appendChild(div)

    }
}
