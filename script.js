
document.getElementById('adForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const newAd = { title, description };
    
    let ads = JSON.parse(localStorage.getItem('ads')) || [];
    
    ads.push(newAd);
    
    localStorage.setItem('ads', JSON.stringify(ads));

    window.location.href = 'ads.html';
});

function displayAds() {
    const adsListElement = document.getElementById('adsList');
    const ads = JSON.parse(localStorage.getItem('ads')) || [];
    
    ads.forEach(ad => {
        const listItem = document.createElement('li');
        
        const adTitle = document.createElement('h3');
        adTitle.textContent = ad.title;
        
        const adDescription = document.createElement('p');
        adDescription.textContent = ad.description;
        
        listItem.appendChild(adTitle);
        listItem.appendChild(adDescription);
        
        adsListElement.appendChild(listItem);
    });
}

if (document.getElementById('adsList')) {
    displayAds();
}
