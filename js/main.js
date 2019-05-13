class Tab {
    constructor(tab){
        this.tab = tab;
        this.all = document.querySelector(`.all[data-tab= '${this.tab.detaset.tab}]`);
        this.all = new Tab(this.all)
        this.tab.addEventListener('click', 
        this.handleClick.bind(this))
    }
    handleClick(){
        this.all.toggleContent();
    }
}
class All {
    constructor(all){
        this.contentTab = all;
    }
    toggleContent(){
        this.contentTab.classList.toggle('')
    }
}

const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    new Tab(tab);
})