const transactions = [
    { date: '01 Abr', items: [
        { title: 'Mori Da Praia', time: '19:55 · Pix', amount: 'R$ 125,78', type: 'pix-out' },
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '19:47 · Pix', amount: '+ R$ 400,00', type: 'pix-in' }
    ] },
    { date: '31 Mar', items: [
        { title: 'Vitor Ferrari', time: '00:37 · Pix', amount: '+ R$ 200,00', type: 'pix-in' }
    ] },
    { date: '29 Mar', items: [
        { title: 'Vitor Ferrari', time: '22:17 · Pix', amount: '+ R$ 0,01', type: 'pix-in' },
        { title: 'Mz Transportes Ltda', time: '17:37 · Pix', amount: '+ R$ 2,00', type: 'pix-in' },
        { title: 'Mz Transportes Ltda', time: '14:50 · Pix', amount: '+ R$ 5,00', type: 'pix-in' },
        { title: 'Mz Transportes Ltda', time: '13:24 · Pix', amount: 'R$ 3,00', type: 'pix-out' },
        { title: 'Mz Transportes Ltda', time: '12:56 · Pix', amount: 'R$ 5,00', type: 'pix-out' },
        { title: 'Mario Cesar Machado Junior', time: '12:18 · Pix', amount: 'R$ 90,00', type: 'pix-out' },
        { title: 'Rodrigo Dias Damasceno', time: '15:07 · Pix', amount: '+ R$ 80,00', type: 'pix-in' }
    ] },
    { date: '20 Mar', items: [
        { title: 'Nathalia Marina Schmitt Carpin', time: '15:33 · Pix', amount: 'R$ 4.000,00', type: 'pix-out' },
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '15:32 · Pix', amount: 'R$ 5.000,00', type: 'pix-out' }
    ] },
    { date: '13 Fev', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '13:10 · Pix', amount: 'R$ 9.155,21', type: 'pix-out' },
        { title: 'Aurea Estetica Avancada', time: '13:09 · Pix', amount: '+ R$ 9.151,00', type: 'pix-in' }
    ] },
    { date: '06 Fev', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '15:10 · Pix', amount: 'R$ 18.303,00', type: 'pix-out' },
        { title: 'Aurea Estetica Avancada', time: '15:07 · Pix', amount: '+ R$ 18.302,00', type: 'pix-in' }
    ] }
];

let isVisible = true;
let currentSearch = '';
let currentTypeFilter = 'all';

function getIcon(type) {
    switch(type) {
        case 'bill': return 'smartphone';
        case 'pix-in': return 'arrow-down-left';
        case 'pix-out': return 'arrow-up-right';
        case 'store': return 'shopping-bag';
        case 'installments': return 'hand-coins';
        case 'canceled': return 'slash';
        default: return 'circle';
    }
}

function renderTransactions() {
    const container = document.getElementById('transactions-container');
    container.innerHTML = '';

    const filteredData = transactions.map(group => ({
        ...group,
        items: group.items.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                 item.amount.toLowerCase().includes(currentSearch.toLowerCase());
            
            let matchesType = true;
            if (currentTypeFilter === 'in') matchesType = item.amount.startsWith('+');
            if (currentTypeFilter === 'out') matchesType = !item.amount.startsWith('+') && item.type !== 'canceled';
            
            return matchesSearch && matchesType;
        })
    })).filter(group => group.items.length > 0);

    filteredData.forEach(group => {
        const header = document.createElement('div');
        header.className = 'date-header';
        header.innerText = group.date;
        container.appendChild(header);

        group.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'transaction-item interactive';
            const isPositive = item.amount.startsWith('+');
            const isCanceled = item.type === 'canceled';
            
            div.innerHTML = `
                <div class="transaction-icon" style="${isPositive ? 'background: #EBF7EF; color: #269144;' : ''} ${isCanceled ? 'color: #E53935;' : ''}">
                    <i data-lucide="${getIcon(item.type)}"></i>
                </div>
                <div class="transaction-info">
                    <div class="transaction-title">${item.title}</div>
                    <div class="transaction-meta">${item.time}</div>
                </div>
                <div class="transaction-amount ${isPositive ? 'amount-positive' : ''}" style="${isCanceled ? 'color: #767676; text-decoration: line-through;' : ''}">${item.amount}</div>
            `;
            div.onclick = () => showToast('Detalhes em breve');
            container.appendChild(div);
        });
    });
    lucide.createIcons();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2500);
}

function toggleVisibility() {
    isVisible = !isVisible;
    const eyeWrapper = document.getElementById('eye-toggle');
    const eyeIcon = eyeWrapper.querySelector('i');
    eyeIcon.setAttribute('data-lucide', isVisible ? 'eye' : 'eye-off');
    
    document.querySelectorAll('.balance-value').forEach(el => {
        if (isVisible) el.classList.remove('blur-balance');
        else el.classList.add('blur-balance');
    });
    
    lucide.createIcons();
}

// Live Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const timeEl = document.getElementById('status-time');
    if (timeEl) timeEl.innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Carousel Simulation
let activeDot = 0;
setInterval(() => {
    const dots = document.querySelectorAll('.dot');
    if (dots.length) {
        dots.forEach((dot, i) => dot.classList.toggle('active', i === activeDot));
        activeDot = (activeDot + 1) % dots.length;
    }
}, 3000);

// Screen Navigation
function navigateTo(screenId) {
    const home = document.getElementById('screen-home');
    const extrato = document.getElementById('screen-extrato');
    if (screenId === 'extrato') {
        extrato.classList.remove('hidden');
        renderTransactions();
    } else {
        extrato.classList.add('hidden');
    }
}

// Event Listeners
document.getElementById('eye-toggle').onclick = (e) => { e.stopPropagation(); toggleVisibility(); };
document.getElementById('btn-saldo').onclick = () => navigateTo('extrato');
document.getElementById('btn-back').onclick = () => navigateTo('home');
document.getElementById('search-input').oninput = (e) => {
    currentSearch = e.target.value;
    renderTransactions();
};

// Filter Pills Logic
const filters = {
    'filter-all': 'all',
    'filter-in': 'in',
    'filter-out': 'out'
};

Object.keys(filters).forEach(id => {
    document.getElementById(id).onclick = function() {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        currentTypeFilter = filters[id];
        renderTransactions();
    };
});

// Generic Actions
const interactiveIds = ['btn-user', 'btn-pix', 'btn-pagar', 'btn-loan', 'btn-recharge', 'btn-boxes', 'btn-credit', 'btn-extra-credit', 'btn-insurance', 'btn-organize'];
interactiveIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.onclick = () => showToast('Funcionalidade em desenvolvimento');
});

// Bottom Nav
document.querySelectorAll('.nav-item').forEach(nav => {
    nav.onclick = function() {
        document.querySelectorAll('.nav-item').forEach(n => {
            n.classList.remove('active');
            const circle = n.querySelector('.nav-circle');
            if (circle) circle.style.background = 'transparent';
        });
        this.classList.add('active');
        if (this.id === 'nav-home') {
            const circle = this.querySelector('.nav-circle');
            if (circle) circle.style.background = '#EEE5FF';
            navigateTo('home');
        } else {
            showToast('Página não disponível');
        }
    };
});

// Init
renderTransactions();
lucide.createIcons();
