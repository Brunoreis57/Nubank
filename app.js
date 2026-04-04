const transactions = [
    { date: '01 Abr', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '19:47 · Pix', amount: '+ R$ 400,00', type: 'pix-in' }
    ] },
    { date: '31 Mar', items: [
        { title: 'Vitor Ferrari', time: '00:37 · Pix', amount: '+ R$ 200,00', type: 'pix-in' }
    ] },
    { date: '29 Mar', items: [
        { title: 'Rodrigo Dias Damasceno', time: '15:07 · Pix', amount: '+ R$ 80,00', type: 'pix-in' },
        { title: 'Consumidor Positivo Ltda', time: '02:00 · Pix', amount: 'R$ 50,00', type: 'pix-out' },
        { title: 'Vitor Ferrari', time: '22:17 · Pix', amount: '+ R$ 0,01', type: 'pix-in' }
    ] },
    { date: '28 Mar', items: [
        { title: 'Bmp Sociedade De Credito Direto...', time: '22:35 · Pix', amount: '+ R$ 50,00', type: 'pix-in' },
        { title: 'Isabela Santos Siqueira De Carvalho', time: '15:30 · Pix', amount: 'R$ 200,00', type: 'pix-out' },
        { title: 'Limite convertido em saldo', time: 'Usando limite do cartão', amount: 'R$ 65,00', type: 'pix-out' }
    ] },
    { date: '27 Mar', items: [
        { title: 'Alice Regina Cruz', time: '07:00 · Pix', amount: 'R$ 1.200,00', type: 'pix-out' },
        { title: 'Mv Centro Automotivo E Barb...', time: '06:59 · Pix', amount: '+ R$ 1.200,00', type: 'pix-in' }
    ] },
    { date: '26 Mar', items: [
        { title: 'Ibis Sao Paulo Congonh', time: '21:21 · Débito', amount: 'R$ 36,00', type: 'bill' },
        { title: 'Smart Home Comercio E Locacao...', time: '08:55 · Pix', amount: 'R$ 12,00', type: 'pix-out' },
        { title: 'Banco Pan', time: '08:37 · Boleto', amount: 'R$ 151,63', type: 'bill' }
    ] },
    { date: '24 Mar', items: [
        { title: 'Isabela Santos Siqueira De Carvalho', time: '15:30 · Pix', amount: 'R$ 250,00', type: 'pix-out' }
    ] },
    { date: '23 Mar', items: [
        { title: 'Ciapark Estacionamento', time: '13:39 · Débito', amount: 'R$ 3,00', type: 'bill' },
        { title: 'DesfrutarAVida', time: '00:55 · Débito', amount: 'R$ 13,55', type: 'bill' }
    ] },
    { date: '21 Mar', items: [
        { title: 'Drogarias Ultra Popular', time: '20:12 · Débito', amount: 'R$ 25,03', type: 'bill' },
        { title: 'Farma Vida', time: '13:22 · Pix', amount: 'R$ 56,33', type: 'pix-out' }
    ] },
    { date: '20 Mar', items: [
        { title: 'Parcela paga', time: 'Renegociação', amount: 'R$ 154,44', type: 'bill' },
        { title: 'Jose Adailson Dos Santos', time: '19:22 · Pix', amount: 'R$ 50,00', type: 'pix-out' },
        { title: 'Nathalia Marina Schmitt Carpin', time: '15:33 · Pix', amount: 'R$ 4.000,00', type: 'pix-out' },
        { title: 'Pagamento da fatura', time: '15:32', amount: 'R$ 331,82', type: 'bill' },
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '15:32 · Pix', amount: 'R$ 5.000,00', type: 'pix-out' }
    ] },
    { date: '23 Fev', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '21:58 · Pix', amount: '+ R$ 50,00', type: 'pix-in' },
        { title: 'Droga Raia', time: '15:34 · Pix', amount: 'R$ 21,18', type: 'pix-out' }
    ] },
    { date: '20 Fev', items: [
        { title: 'Pagueveloz', time: '16:16 · Pix', amount: 'R$ 75,85', type: 'pix-out' },
        { title: 'Entrada da renegociação', time: 'Renegociação', amount: '+ R$ 94,69', type: 'pix-in' }
    ] },
    { date: '03 Jan', items: [
        { title: 'Pagamento da fatura', time: '07:45', amount: 'R$ 79,90', type: 'bill' }
    ] },
    { date: '02 Jan', items: [
        { title: 'Maico Rodrigues da Costa', time: '13:51 · Pix', amount: 'R$ 3,00', type: 'pix-out' },
        { title: 'Lidia Maria Moreira Mund', time: '13:31 · Pix', amount: 'R$ 30,00', type: 'pix-out' }
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
