

const divsBoxPortfolio = document.querySelectorAll('#portfolio > div > .row:first-child + .row > .col > div');
const divsBoxPortfolioChilds = document.querySelectorAll('#portfolio > div > row:first-child + .row > .col > div > p');


function mouseoverEvent(NodeList, backgroundColor){
    NodeList.forEach(node => {
        node.addEventListener('mouseover', () => {
            let span = node.querySelector('p > span');
            node.style.background = backgroundColor;
            span.style.color = '#000';
            
        })
    })
};

function mouseoutEvent(NodeList){
    
    NodeList.forEach(node => {
        let span = node.querySelector('p > span');
        node.addEventListener('mouseout', () => {
        node.style.background = '';
        span.style.color = '#fff';
        })
    })    
};

mouseoverEvent(divsBoxPortfolio, "#7fe0de");
mouseoutEvent(divsBoxPortfolio);