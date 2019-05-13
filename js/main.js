class Tab {
    constructor(tab){
        this.tab = tab;
        this.all = document.querySelector(`.all[data-tab= '${this.tab.detaset.tab}]`);
    }
}

const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => {
    new Tab(tab);
})