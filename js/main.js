//tab-navaigator = tabs
//link = link
//content = tab

class Link{
    constructor(link){
        this.link = link;
        this.tab = document.querySelector(`.tab[data-tab= '${this.link.dataset.tab}']`);
        this.tab = new Tab(this.tab);
        this.link.addEventListener('click', this.handleClick.bind(this))
    }
    handleClick(){
        this.tab.toggleTab();
    }
}

class Tab {
    constructor(tab){
        this.contentTab = tab;
    }
    toggleTab(){
        this.contentTab.classList.toggle('change');
    }
}

const links = document.querySelectorAll('.link')

links.forEach(link =>{
    new Link(link);
})