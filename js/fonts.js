let licenseListFixed = document.getElementById('licenseListFixed');
let licenseListFixed2 = document.getElementById('licenseListFixed2');
let licenseListLinks = Array.from(document.querySelectorAll('.licenseList a'));
let detailLicenceBtn = Array.from(document.getElementsByClassName('detailLicenceBtn'));
let sourceContent = Array.from(document.getElementsByClassName('sourceContent'));
let secondMenuLi = Array.from(document.querySelectorAll('.secondMenu li'));
let fontstyleLayout = Array.from(document.getElementsByClassName('fontstyleLayout'));
let Layout = Array.from(document.getElementsByClassName('Layout'));
let removeBlock = Array.from(document.getElementsByClassName('removeBlock'))


removeBlock.forEach((item) => {
    item.addEventListener('click', function() {
        item.parentElement.parentElement.parentElement.style.display = 'none'
    })
})
secondMenuLi.forEach((item) => {
    item.addEventListener('click', function() {
        secondMenuLi.forEach((items) => {
            items.classList.remove('active')
        });
        item.classList.add('active');
    })
})
licenseListLinks.forEach((item) => {
    item.addEventListener('click', function() {
        licenseListLinks.forEach((items) => {
            items.classList.remove('active')
        });
        item.classList.add('active');
    })
})
detailLicenceBtn.forEach((item) => {
    item.addEventListener('click', function() {
        let btnId = item.dataset.id;
        sourceContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (btnId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
        detailLicenceBtn.forEach((items) => {
            items.classList.remove('active')
        });
        item.classList.add('active');
    })
})
fontstyleLayout.forEach((item) => {
    item.addEventListener('click', function() {
        let itemStyle = item.dataset.style;
        let itemWeight = item.dataset.weight;
        let itemText = item.querySelector('p').textContent;
        item.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.fontHeading').forEach((items) => {
            items.textContent = itemText
        })
        item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.fontStyle = itemStyle;
        item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.fontWeight = itemWeight;
    })
})
Layout.forEach((item) => {
    item.addEventListener('click', function() {
        let itemStyle = item.dataset.style;
        let itemWeight = item.dataset.weight;
        item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.textAreas').style.fontStyle = itemStyle;
        item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.textAreas').style.fontWeight = itemWeight;

    })
})