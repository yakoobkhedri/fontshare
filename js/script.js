let menuItem = Array.from(document.querySelectorAll('.menu > div'));
let stickyContent = document.querySelector('.stickyContent');
let listTitle = Array.from(document.getElementsByClassName('listTitle'));
let lists = Array.from(document.getElementsByClassName('lists'));
let lists2 = Array.from(document.querySelectorAll('.lists2  li'));
let dropdownTitle = Array.from(document.getElementsByClassName('dropdownTitle'));
let dropdownList = Array.from(document.getElementsByClassName('dropdownList'));
let PersonalityStyle = Array.from(document.getElementsByClassName('PersonalityStyle'));
let fontFamily = Array.from(document.getElementsByClassName('fontFamily'));
let radioShape = Array.from(document.getElementsByClassName('radioShape'));
let themes = Array.from(document.getElementsByClassName('themes'));
let themeItems = Array.from(document.querySelectorAll('.themeItems > div'));
let viewType = Array.from(document.querySelectorAll('.viewType p'));
let cards = document.getElementById('cards');
let hoverShow = Array.from(document.getElementsByClassName('hoverShow'));
let ClosedSource = Array.from(document.getElementsByClassName('ClosedSource'));
let rightCardHeader = Array.from(document.getElementsByClassName('rightCardHeader'));
let SingleInputValue = Array.from(document.getElementsByClassName('SingleInputValue'));
let typedText = Array.from(document.getElementsByClassName('typedText'));
let justifyIcon = Array.from(document.querySelectorAll('.justify svg'));
let weightInput = Array.from(document.getElementsByClassName('weightInput'));
let leadingInput = Array.from(document.getElementsByClassName('leadingInput'));
let sizeInput = Array.from(document.getElementsByClassName('sizeInput'));
let textAreas = Array.from(document.getElementsByClassName('textAreas'));
let fontSize = Array.from(document.getElementsByClassName('fontSize'));
let inputValue = Array.from(document.getElementsByClassName('inputValue'));
let tabs = Array.from(document.getElementsByClassName('tabs'));
let tabContent = Array.from(document.getElementsByClassName('tabContent'));
let btns = Array.from(document.querySelectorAll('.btns p'));
let fontStyle = Array.from(document.getElementsByClassName('fontStyle'));
let categoryStyle = Array.from(document.getElementsByClassName('categoryDropdown'));
let fontStyle2 = Array.from(document.getElementsByClassName('fontStyle2'));
let wordBlock = Array.from(document.getElementsByClassName('wordBlock'));
let selectedWord = document.getElementById('selectedWord');
let acardeon = Array.from(document.getElementsByClassName('acardeon'));
let setOutlineSolid = Array.from(document.getElementsByClassName('setOutlineSolid'));
let wordsParent = document.getElementById('wordsParent');
let basicFullSet = Array.from(document.getElementsByClassName('basicFullSet'));

menuItem.forEach((item) => {
    item.addEventListener('click', function() {
        menuItem.forEach((items) => {
            items.getElementsByClassName('overlay')[0].classList.remove('active');
            items.querySelector('a').classList.remove('active');
        });
        item.getElementsByClassName('overlay')[0].classList.toggle('active');
        item.querySelector('a').classList.toggle('active');
    })
})

function searchItems(e) {
    setTimeout(() => {
        stickyContent.classList.toggle('active');
        e.nextElementSibling.querySelector('.overlay').classList.remove('active');
        e.nextElementSibling.querySelector('a').classList.remove('active');
        e.nextElementSibling.querySelector('.close').classList.remove('show');
        e.nextElementSibling.querySelector('.HamIcon').classList.remove('closed');
        e.querySelector('.close').classList.toggle('show')
        e.querySelector('.searchIcon').classList.toggle('closed')
    }, 300);
    e.getElementsByClassName('overlay')[0].classList.toggle('active');
    e.querySelector('a').classList.toggle('active');
}

function menuItems(e) {
    setTimeout(() => {
        stickyContent.classList.remove('active');
        e.previousElementSibling.querySelector('.searchIcon').classList.remove('closed');
        e.previousElementSibling.querySelector('.close').classList.remove('show');
        e.previousElementSibling.getElementsByClassName('overlay')[0].classList.remove('active');
        e.previousElementSibling.querySelector('a').classList.remove('active');
        e.querySelector('.close').classList.toggle('show');
        e.querySelector('.HamIcon').classList.toggle('closed')
    }, 300);
    e.getElementsByClassName('overlay')[0].classList.toggle('active');
    e.querySelector('a').classList.toggle('active');
}

function activeScroll() {
    document.querySelector('body').classList.add('active');
}

function removeScroll() {
    document.querySelector('body').classList.remove('active');
}
listTitle.forEach((list) => {
    list.addEventListener('click', function() {
        lists.forEach((item) => { item.classList.remove('open') });
        list.nextElementSibling.classList.add('open');
    })
})
document.querySelector(".listTitle").addEventListener("click", function(ev) {
    ev.target.parentNode.nextElementSibling.classList.add("open")
})
document.querySelector("body").addEventListener('click', function(e) {
    if (e.target.isEqualNode(document.body)) {
        lists.forEach((item) => { item.classList.remove('open') });
        return;
    }
    if (e.target.classList.contains('innerDropdown') || e.target.querySelector(".innerDropdown") || e.target.classList.contains('dropdownTitle') || e.target.closest(".dropdownTitle")) {} else {
        if (document.querySelector('.open')) {
            lists.forEach((item) => { item.classList.remove('open') });
        }
    }
});
lists2.forEach((list2) => {
    list2.addEventListener('click', function() {
        list2.parentElement.parentElement.parentElement.classList.remove('open')
    })
})

categoryStyle.forEach((item) => {
    item.addEventListener('click', function() {
        item.querySelector('.radioShape').classList.add('active');
    })
})
dropdownTitle.forEach((item) => {
        item.addEventListener('click', function() {
            dropdownList.forEach((items) => { items.classList.remove('open') })
            item.nextElementSibling.classList.add('open');
            item.nextElementSibling.querySelector('.activeDropdownTitle').addEventListener('click', function() {
                item.nextElementSibling.classList.remove('open');
            })
        })
    })
    // 
var fonts = [];
fontFamily.forEach((item) => {
    item.addEventListener('click', function(e) {
        if (fonts.includes(item.dataset.family)) {
            fonts.splice(fonts.indexOf(item.dataset.family), 1)
        } else {
            fonts.push(item.dataset.family);
            document.querySelector("body").style.fontFamily = fonts;
        }
    })
})
PersonalityStyle.forEach((item) => {
    let itemValue = item.dataset.size;
    let itemNumberValue = Number(itemValue);
    item.addEventListener('click', function() {
        item.querySelector('.radioShape').classList.toggle('active');
        let itemValue = item.dataset.font;
        item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.fontWeight = itemValue;
        sizeInput.forEach((size) => {
            size.value = itemNumberValue;
        })
        inputValue.forEach((sizeTitle) => {
            sizeTitle.textContent = itemNumberValue;
        });
    })
})
themes.forEach((item) => {
    item.addEventListener('click', function() {
        item.nextElementSibling.classList.toggle('active');
    })
})

themeItems.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabValue = tab.dataset.value;
        document.querySelector('body').style.backgroundColor = tabValue;
        document.querySelector('.stickyContent').style.backgroundColor = tabValue;
        tab.parentElement.classList.remove('active');
        document.querySelector('body').classList.remove('dark')
        document.querySelectorAll('.overlay,.fontPage,.dropdownTitle,.btns p,.justify svg,.sectionThree p,.rangeInputValue,.reset,.fontSizeTitle,.logoName,.typedText,.cards> .card,.menu>div').forEach(item => item.classList.remove('dark'));

    })
})

function darkmode() {
    stickyContent.classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
    document.querySelectorAll('.overlay,.fontPage,.dropdownTitle,.btns p,.justify svg,.sectionThree p,.rangeInputValue,.reset,.fontSizeTitle,.logoName,.typedText,.cards> .card,.menu>div').forEach(item => item.classList.toggle('dark'));
}

viewType.forEach((item) => {
    item.addEventListener('click', function() {
        let itemValue = item.dataset.value;
        item.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.cards').forEach((card) => {
            card.style.display = itemValue;
        })
    })
})


function changeAllSize(e) {
    let inputVlue = e.value;
    let inputNumberVlue = Number(e.value);
    e.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.sizeInput').forEach((size) => {
        size.value = inputNumberVlue;
    })
    e.parentElement.querySelector('.SingleInputValue').textContent = inputVlue;
    e.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.typedText').forEach((item) => {
        item.style.fontSize = inputNumberVlue + 'px';
    })
    SingleInputValue.forEach((item) => {
        item.textContent = inputVlue;
    })
    inputValue.forEach((sizeTitle) => {
        sizeTitle.textContent = inputNumberVlue;
    })
}
justifyIcon.forEach((item) => {
    item.addEventListener('click', function() {
        let itemJustifye = item.dataset.justify;
        justifyIcon.forEach((svgs) => {
            svgs.classList.remove('active');
        })
        item.classList.add('active');
        typedText.forEach((items) => {
            items.style.textAlign = itemJustifye;
        })
    })
})
weightInput.forEach((item) => {
    item.addEventListener('input', function() {
        item.previousElementSibling.querySelector('.inputValue').textContent = item.value;
        item.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.textAreas').forEach((textarea) => {
            textarea.style.fontWeight = item.value;
        })
    })
})
leadingInput.forEach((item) => {
    item.addEventListener('input', function() {
        item.previousElementSibling.querySelector('.leadingValue').textContent = item.value;
        item.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.textAreas').forEach((textarea) => {
            textarea.style.lineHeight = item.value + 'em';
        })
    })
})
sizeInput.forEach((item) => {
    item.addEventListener('input', function() {
        itemValue = item.value;
        let itemNumberValue = Number(itemValue);
        item.previousElementSibling.querySelector('.inputValue').textContent = item.value;
        item.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.textAreas').forEach((textarea) => {
            textarea.style.fontSize = itemNumberValue + 'px';
        })
    })
})

function yourText(e) {
    let yourTextValue = e.value;
    typedText.forEach((items) => {
        items.value = yourTextValue;
    })
}
fontSize.forEach((item) => {
    item.addEventListener('click', function() {
        let itemValue = item.dataset.size;
        let itemNumberValue = Number(itemValue);
        item.parentElement.querySelectorAll('.radioShape').forEach((radioShapes) => {
            radioShapes.classList.remove('active');
        })
        item.querySelector('.radioShape').classList.add('active');
        item.parentElement.parentElement.parentElement.parentElement.nextElementSibling.value = itemNumberValue;
        item.parentElement.previousElementSibling.querySelector('.SingleInputValue').textContent = itemNumberValue;
        item.parentElement.querySelector('.SingleInputValue').textContent = itemNumberValue;
        item.parentElement.parentElement.parentElement.previousElementSibling.querySelector('.SingleInputValue').textContent = itemNumberValue;
        typedText.forEach((items) => {
            items.style.fontSize = itemNumberValue + 'px';
        })
        sizeInput.forEach((size) => {
            size.value = itemNumberValue;
            size.previousElementSibling.querySelector('.inputValue').textContent = itemNumberValue;
        })
    })
})
tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        tabs.forEach(allTabs => allTabs.classList.remove('active'));
        tab.classList.add('active');
        let tabId = tab.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})


btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        btns.forEach(allBtns => allBtns.classList.remove('active'));
        btn.classList.add('active');
        let btnId = btn.dataset.id;
        typedText.forEach((item) => {
            let contentId = item.dataset.id;
            if (btnId === contentId) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })
})

function stylesNo(event) {
    let rangeValue = event.value;
    event.nextElementSibling.querySelector('.topValue').textContent = rangeValue;
}

function Weight(event) {
    let rangeValue = event.value;
    event.nextElementSibling.querySelector('.topValue').textContent = rangeValue;
}
fontStyle.forEach((items) => {
    items.addEventListener('click', function() {
        items.parentElement.querySelectorAll('.radioShape').forEach((radios) => { radios.classList.remove('active') });
        items.querySelector('.radioShape').classList.add('active');
        let itemStyle = items.dataset.style;
        let itemWeight = items.dataset.weight;
        items.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.typedText').forEach((item) => {
            item.style.fontWeight = itemWeight;
            item.style.fontStyle = itemStyle;
        });
        items.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.fontHeading').forEach((styleHead) => {
            styleHead.textContent = items.querySelector('p').textContent;
        });
        items.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'none'
    })
})
fontStyle2.forEach((items) => {
    items.addEventListener('click', function() {
        items.parentElement.querySelectorAll('.radioShape').forEach((radios) => { radios.classList.remove('active') });
        items.querySelector('.radioShape').classList.add('active');
        let itemStyle = items.dataset.style;
        let itemWeight = items.dataset.weight;
        items.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.word').style.fontWeight = itemWeight;
        items.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.word').style.fontStyle = itemStyle;
        items.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.wordBlock').forEach((item) => {
            item.style.fontWeight = itemWeight;
            item.style.fontStyle = itemStyle;
        });
        items.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.fontHeading').forEach((styleHead) => {
            styleHead.textContent = items.querySelector('p').textContent;
        });
        items.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display = 'none'
    })
})
wordBlock.forEach((item) => {
    item.addEventListener('click', function() {
        itemContent = item.textContent;
        selectedWord.textContent = item.textContent;
        document.querySelector('.word').textContent = itemContent;
        wordBlock.forEach((items) => { items.classList.remove('active') })
        item.classList.add('active')
    })
})
setOutlineSolid.forEach((item) => {
    item.addEventListener('click', function() {
        itemStroke = item.dataset.stroke;
        if (itemStroke == 'transparent') {
            document.querySelector('.word').classList.add('outline');
        } else if (itemStroke == 'black') {
            document.querySelector('.word').classList.remove('outline');
        }
        setOutlineSolid.forEach((items) => { items.classList.remove('active') })
        item.classList.add('active')
    })
})
basicFullSet.forEach((item) => {
    item.addEventListener('click', function() {
        itemSet = item.dataset.set;
        if (itemSet == 'basic') {
            FullSetParent.classList.remove('active');
            hideFullSett.style.display = 'none';
            showFullSett.style.display = 'block';
        } else if (itemSet == 'full') {
            FullSetParent.classList.add('active');
            showFullSett.style.display = 'none';
            hideFullSett.style.display = 'block';
        }
        basicFullSet.forEach((items) => { items.classList.remove('active') })
        item.classList.add('active')
    })
})
acardeon.forEach((item) => {
    item.addEventListener('click', function() {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('.arrowAcardeon').classList.toggle('active');
    })
})


function showFullSet(e) {
    FullSetParent.classList.add('active');
    e.style.display = 'none';
    document.getElementById('hideFullSett').style.display = 'block'
}

function hideFullSet(e) {
    FullSetParent.classList.remove('active');
    e.style.display = 'none'
    document.getElementById('showFullSett').style.display = 'block'
}

function grid(e) {
    e.previousElementSibling.classList.remove('active');
    e.classList.add('active');
    ClosedSource.forEach((item) => { item.style.display = 'none' });
    rightCardHeader.forEach((item) => { item.style.width = '51%' });
    e.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.hoverShow').forEach((item) => {
        item.style.opacity = '0';
        item.style.position = 'absolute'
    });
    e.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.ViewFamily').forEach((item) => {
        item.style.display = 'none'
    })
}

function list(e) {
    e.nextElementSibling.classList.remove('active');
    e.classList.add('active');
    ClosedSource.forEach((item) => { item.style.display = 'block' });
    rightCardHeader.forEach((item) => { item.style.width = '24%' });
    e.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.hoverShow').forEach((item) => {
        item.style.opacity = '100%';
        item.style.position = 'static'
    });
    e.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.ViewFamily').forEach((item) => {
        item.style.display = 'block'
    })
}