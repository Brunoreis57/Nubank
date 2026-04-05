const cardTransactions = [
    { date: '28 Mar', items: [
        { title: 'Limite convertido em saldo n...', time: '15:04 · em 4x', amount: 'R$ 80,02', type: 'card-in' }
    ] },
    { date: '27 Mar', items: [
        { title: 'Uber', time: '01:55', amount: 'R$ 43,95', type: 'app' }
    ] },
    { date: '24 Mar', items: [
        { title: 'Desfrutaravida', time: '02:43', amount: 'R$ 17,33', type: 'store' },
        { title: 'Desfrutaravida', time: '02:39', amount: 'R$ 8,93', type: 'store' },
        { title: 'iFood', time: '01:40 · em 2x', amount: 'R$ 86,24', type: 'app' }
    ] },
    { date: '22 Mar', items: [
        { title: 'Desfrutaravida', time: '22:42', amount: 'R$ 8,93', type: 'store' }
    ] },
    { date: '20 Mar', items: [
        { title: 'Pagamento recebido', time: 'Você pagou R$ 331,82', amount: '', type: 'payment' }
    ] },
    { date: '10 Mar', items: [
        { title: 'Fatura fechada', time: 'Vence em 17/03', amount: '', type: 'bill-closed' }
    ] },
    { date: '25 Fev', items: [
        { title: 'Renegociação de pendên...', time: '00:00 · em 6x', amount: 'R$ 1.990,95', type: 'renegotiation' }
    ] },
    { date: '20 Fev', items: [
        { title: 'Pagamento recebido', time: 'Você pagou R$ 75,85', amount: '', type: 'payment' }
    ] },
    { date: '10 Fev', items: [
        { title: 'Fatura fechada', time: 'Vence em 18/02', amount: '', type: 'bill-closed' }
    ] },
    { date: '27 Jan', items: [
        { title: 'Pagamento recebido', time: 'Você pagou R$ 286,00', amount: '', type: 'payment' }
    ] },
    { date: '10 Jan', items: [
        { title: 'Fatura fechada', time: 'Vence em 19/01', amount: '', type: 'bill-closed' }
    ] },
    { date: '07 Jan', items: [
        { title: 'Renegociação de pendên...', time: '00:00 · em 8x', amount: 'R$ 2.288,05', type: 'renegotiation' }
    ] },
    { date: '03 Jan', items: [
        { title: 'Pagamento recebido', time: 'Você pagou R$ 79,90', amount: '', type: 'payment' }
    ] },
    { date: '16 Dez 2025', items: [
        { title: 'Fatura vence amanhã', time: '', amount: '', type: 'bill-due' }
    ] },
    { date: '15 Dez 2025', items: [
        { title: 'Pagamento recebido', time: 'Você pagou R$ 130,00', amount: '', type: 'payment' }
    ] },
    { date: '01 Dez 2025', items: [
        { title: 'Renegociação de pendên...', time: '00:00 · em 10x', amount: 'R$ 2.575,88', type: 'renegotiation' }
    ] },
    { date: '21 Nov 2025', items: [
        { title: 'Limite convertido em saldo n...', time: '14:05 · em 12x', amount: 'R$ 162,39', type: 'card-in' }
    ] },
    { date: '19 Nov 2025', items: [
        { title: 'Pagamento recebido', time: 'Você pagou R$ 213,41', amount: '', type: 'payment' },
        { title: 'Emporio Seletto Tecnol', time: '21:38', amount: 'R$ 24,90', type: 'store' },
        { title: 'Fabiano Amorim da Silva', time: '18:22', amount: 'R$ 109,84', type: 'app' }
    ] },
    { date: '16 Nov 2025', items: [
        { title: 'Fatura vence amanhã', time: '', amount: '', type: 'bill-due' }
    ] }
];

const transactions = [

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
    { date: '11 Mar', items: [
        { title: 'Guilherme Dos Santos Reinbrecht...', time: '21:26 · Pix', amount: 'R$ 15,00', type: 'pix-out' },
        { title: 'Nathalia Marina Schmitt Carpin', time: '21:26 · Pix', amount: '+ R$ 0,20', type: 'pix-in' },
        { title: 'Roberto Correa Martins', time: '09:11 · Pix', amount: 'R$ 10,00', type: 'pix-out' }
    ] },
    { date: '05 Mar', items: [
        { title: 'Luiz Henrique Braga', time: '14:22 · Pix', amount: '+ R$ 200,00', type: 'pix-in' }
    ] },
    { date: '04 Mar', items: [
        { title: 'Diego de Sousa Correa', time: '21:17 · Pix', amount: 'R$ 8,00', type: 'pix-out' },
        { title: 'Cheflera Trindade', time: '18:38 · Pix', amount: '+ R$ 180,00', type: 'pix-in' }
    ] },
    { date: '02 Mar', items: [
        { title: 'Real Classic Hotel', time: '11:23 · Pix', amount: 'R$ 49,50', type: 'pix-out' },
        { title: 'Heitor Correia Santos', time: '00:51 · Pix', amount: 'R$ 20,00', type: 'pix-out' },
        { title: 'Petrox', time: '00:35 · Débito', amount: 'R$ 8,99', type: 'bill' },
        { title: 'Moises Dos Santos Jesus', time: '00:17 · Pix', amount: 'R$ 20,00', type: 'pix-out' }
    ] },
    { date: '01 Mar', items: [
        { title: 'Moises Dos Santos Jesus', time: '00:59 · Pix', amount: 'R$ 30,00', type: 'pix-out' }
    ] },
    { date: '28 Fev', items: [
        { title: 'Edivaldo Alves Da Costa', time: '23:16 · Pix', amount: 'R$ 21,92', type: 'pix-out' },
        { title: 'Jm Distribuidora', time: '20:05 · Pix', amount: 'R$ 21,00', type: 'pix-out' },
        { title: 'Jm Distribuidora', time: '19:21 · Pix', amount: 'R$ 29,00', type: 'pix-out' },
        { title: 'RioMar Aracaju', time: '15:38 · Pix', amount: 'R$ 11,00', type: 'store' },
        { title: 'Cbp Turismo Eventos Ltda', time: '11:50 · Pix', amount: 'R$ 11,00', type: 'pix-out' }
    ] },
    { date: '27 Fev', items: [
        { title: 'Real Classic Hotel', time: '22:53 · Pix', amount: 'R$ 300,00', type: 'pix-out' },
        { title: 'Vivo', time: '16:38 · Boleto', amount: 'R$ 79,73', type: 'bill' },
        { title: 'Nancy Caroline Da Silv...', time: '16:36 · Pix', amount: 'R$ 75,00', type: 'pix-out' }
    ] },
    { date: '26 Fev', items: [
        { title: 'Rpb Conveniências Ii', time: '21:52 · Débito', amount: 'R$ 23,98', type: 'bill' },
        { title: 'Cbp Turismo Eventos Ltda', time: '11:44 · Pix', amount: 'R$ 300,00', type: 'pix-out' }
    ] },
    { date: '25 Fev', items: [
        { title: 'McDonald\'s', time: '21:47 · Pix', amount: 'R$ 85,80', type: 'pix-out' },
        { title: 'Diego Martins Rodrigues Da Costa', time: '11:40 · Pix', amount: 'R$ 100,00', type: 'pix-out' },
        { title: 'Valor recebido de Investimentos', time: 'Investimento', amount: '+ R$ 180,07', type: 'pix-in' }
    ] },
    { date: '24 Fev', items: [
        { title: '99', time: '13:25 · Pix', amount: 'R$ 7,50', type: 'pix-out' },
        { title: '99', time: '13:16 · Pix', amount: 'R$ 9,70', type: 'pix-out' },
        { title: 'Real Classic Hotel', time: '12:54 · Pix', amount: 'R$ 5,50', type: 'pix-out' },
        { title: 'Jaime Carlos Tramontini Gomes J...', time: '10:38 · Pix', amount: 'R$ 500,00', type: 'pix-out' }
    ] },
    { date: '23 Fev', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '21:58 · Pix', amount: '+ R$ 50,00', type: 'pix-in' },
        { title: 'Droga Raia', time: '15:34 · Pix', amount: 'R$ 21,18', type: 'store' },
        { title: 'Cbp Turismo Eventos Ltda', time: '15:18 · Pix', amount: 'R$ 97,13', type: 'pix-out' },
        { title: 'Resgate fundo', time: 'Nu Reserva Imediata', amount: 'R$ 104,66', type: 'pix-out' }
    ] },
    { date: '20 Fev', items: [
        { title: 'Luiz Henrique Braga', time: '10:15 · Pix', amount: '+ R$ 200,00', type: 'pix-in' },
        { title: 'Pagueveloz', time: '16:16 · Pix', amount: 'R$ 75,85', type: 'pix-out' },
        { title: 'Entrada da renegociação', time: 'Renegociação', amount: '+ R$ 94,69', type: 'pix-in' },
        { title: 'Valor Mensal Programado', time: 'Nu Reserva Imediata', amount: 'R$ 100,00', type: 'pix-out' },
        { title: 'Aeroloja', time: '07:28 · Pix', amount: 'R$ 60,80', type: 'pix-out' }
    ] },
    { date: '13 Fev', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '11:20 · Pix', amount: 'R$ 13.726,50', type: 'pix-out' }
    ] },
    { date: '12 Fev', items: [
        { title: 'Aurea Estetica Avancada', time: '15:00 · Pix', amount: '+ R$ 13.726,50', type: 'pix-in' }
    ] },
    { date: '10 Fev', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '08:29 · Pix', amount: 'R$ 8.235,90', type: 'pix-out' },
        { title: 'Aurea Estetica Avancada', time: '08:28 · Pix', amount: '+ R$ 8.235,90', type: 'pix-in' }
    ] },
    { date: '06 Fev', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '15:10 · Pix', amount: 'R$ 18.303,00', type: 'pix-out' },
        { title: 'Aurea Estetica Avancada', time: '15:07 · Pix', amount: '+ R$ 18.302,00', type: 'pix-in' }
    ] },
    { date: '28 Jan', items: [
        { title: 'Roberto Correa Martins', time: '13:07 · Pix', amount: 'R$ 10,00', type: 'pix-out' }
    ] },
    { date: '27 Jan', items: [
        { title: 'Aurea Estetica Avancada', time: '17:32 · Pix', amount: 'R$ 3.700,00', type: 'pix-out' },
        { title: 'Pagamento da fatura', time: '17:31', amount: 'R$ 286,00', type: 'bill' }
    ] },
    { date: '18 Jan', items: [
        { title: 'Marcelo Henrique Palma...', time: '15:00 · Pix', amount: 'R$ 6,00', type: 'pix-out' }
    ] },
    { date: '08 Jan', items: [
        { title: 'Torre De Papel', time: '18:04 · Pix', amount: 'R$ 2,00', type: 'pix-out' }
    ] },
    { date: '03 Jan', items: [
        { title: 'Pagamento da fatura', time: '07:45', amount: 'R$ 79,90', type: 'bill' }
    ] },
    { date: '02 Jan', items: [
        { title: 'Maico Rodrigues da Costa', time: '13:51 · Pix', amount: 'R$ 3,00', type: 'pix-out' },
        { title: 'Lidia Maria Moreira Mund', time: '13:31 · Pix', amount: 'R$ 30,00', type: 'pix-out' }
    ] },
    { date: '01 Jan', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '17:30 · Pix', amount: 'R$ 5.000,00', type: 'pix-out' },
        { title: 'Prime Solucoes Comercio E S...', time: '16:27 · Pix', amount: '+ R$ 9.000,00', type: 'pix-in' }
    ] },
    { date: '30 DEZ 2025', items: [
        { title: 'Lucas da Silva', time: '22:28 · Pix', amount: '+ R$ 120,00', type: 'pix-in' }
    ] },
    { date: '16 DEZ 2025', items: [
        { title: 'Matheus Tadeo Zilmann Da Silva', time: '10:06 · Pix', amount: 'R$ 23.002,50', type: 'pix-out' },
        { title: 'Aurea Estetica Avancada', time: '10:04 · Pix', amount: '+ R$ 23.002,50', type: 'pix-in' }
    ] },
    { date: '15 DEZ 2025', items: [
        { title: 'Pagamento da fatura', time: '07:43', amount: 'R$ 130,00', type: 'bill' }
    ] },
    { date: '13 DEZ 2025', items: [
        { title: 'Kassio Jorge Lopes', time: '20:54 · Pix', amount: 'R$ 5,00', type: 'pix-out' },
        { title: 'Paulo Roberto Neves', time: '17:30 · Pix', amount: 'R$ 61,59', type: 'pix-out' }
    ] },
    { date: '12 DEZ 2025', items: [
        { title: 'Nathalia Marina Schmitt Carpin', time: '18:05 · Pix', amount: 'R$ 5,00', type: 'pix-out' },
        { title: 'Cheflera Trindade', time: '18:01 · Pix', amount: 'R$ 10,00', type: 'pix-out' }
    ] },
    { date: '11 DEZ 2025', items: [
        { title: 'Roni da Cruz', time: '22:53 · Pix', amount: '+ R$ 60,00', type: 'pix-in' },
        { title: 'Roni da Cruz', time: '22:28 · Pix', amount: 'R$ 450,00', type: 'pix-out' },
        { title: 'Ramon Murilo da Silva', time: '22:26 · Pix', amount: '+ R$ 600,00', type: 'pix-in' }
    ] },
    { date: '10 DEZ 2025', items: [
        { title: 'FutebolCard', time: '15:37 · Pix', amount: 'R$ 40,00', type: 'pix-out' },
        { title: 'FutebolCard', time: '14:10 · Pix', amount: 'R$ 40,00', type: 'pix-out' },
        { title: 'Rodrigo Dias Damasceno', time: '14:10 · Pix', amount: '+ R$ 80,00', type: 'pix-in' }
    ] },
    { date: '28 NOV 2025', items: [
        { title: 'Jaqueline Martins Coelho', time: '19:00 · Pix', amount: 'R$ 10,00', type: 'pix-out' }
    ] },
    { date: '26 NOV 2025', items: [
        { title: 'Shopee', time: '14:35 · Pix', amount: 'R$ 19,00', type: 'pix-out' },
        { title: 'Roberto Correa Martins', time: '13:25 · Pix', amount: 'R$ 20,00', type: 'pix-out' },
        { title: 'Nathalia Marina Schmitt Carpin', time: '11:12 · Pix', amount: 'R$ 6.500,00', type: 'pix-out' },
        { title: 'Parcelas pagas', time: 'MV', amount: 'R$ 143,46', type: 'bill' }
    ] },
    { date: '22 NOV 2025', items: [
        { title: 'Facebook', time: '09:46 · Pix', amount: 'R$ 80,00', type: 'store' }
    ] },
    { date: '21 NOV 2025', items: [
        { title: 'Nathalia Marina Schmitt Carpin', time: '14:08 · Pix', amount: 'R$ 1.100,00', type: 'pix-out' },
        { title: 'GOWD', time: '14:07 · Pix', amount: '+ R$ 1.008,50', type: 'pix-in' },
        { title: 'Limite convertido em saldo', time: 'Limite Cartão', amount: 'R$ 65,00', type: 'pix-out' }
    ] },
    { date: '04 NOV 2025', items: [
        { title: 'Parcela paga', time: 'Renegociação', amount: 'R$ 160,46', type: 'bill' },
        { title: 'Leandro Alves da Silva', time: '10:59 · Pix', amount: '+ R$ 6.850,00', type: 'pix-in' }
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
        case 'app': return 'layout-grid';
        case 'payment': return 'file-check-2';
        case 'bill-closed': return 'calendar';
        case 'bill-due': return 'calendar';
        case 'renegotiation': return 'refresh-cw';
        case 'card-in': return 'credit-card';
        default: return 'circle';
    }
}

function renderTransactionsCore(containerId, data, isCard = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    const filteredData = data.map(group => ({
        ...group,
        items: group.items.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                 item.amount.toLowerCase().includes(currentSearch.toLowerCase());
            
            let matchesType = true;
            if (!isCard) {
                if (currentTypeFilter === 'in') matchesType = item.amount.startsWith('+');
                if (currentTypeFilter === 'out') matchesType = !item.amount.startsWith('+') && item.type !== 'canceled';
            }
            
            return matchesSearch && matchesType;
        })
    })).filter(group => group.items.length > 0);

    filteredData.forEach((group, index) => {
        const header = document.createElement('div');
        header.className = 'date-header';
        header.innerText = group.date;
        container.appendChild(header);

        group.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'transaction-item interactive';
            const isPositive = item.amount.startsWith('+') || item.type === 'card-in';
            const isCanceled = item.type === 'canceled';
            const isBillMsg = item.type === 'bill-closed' || item.type === 'bill-due';
            const isPayment = item.type === 'payment';
            
            const iconStyle = isPositive ? 'background: #EBF7EF; color: #269144;' : 
                              isCanceled ? 'color: #E53935;' : 
                              isBillMsg ? 'background: #FEE7E7; color: #E53935;' :
                              isPayment ? 'background: #EBF7EF; color: #269144;' : '';

            div.innerHTML = `
                <div class="transaction-icon" style="${iconStyle}">
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

        // Add end message if it's the last group and we're on the card screen
        if (isCard && index === filteredData.length - 1) {
            const endMsg = document.createElement('div');
            endMsg.style = 'padding: 40px 24px; text-align: center; color: var(--nu-text-sub); font-size: 14px; line-height: 1.5;';
            endMsg.innerHTML = 'Para ver extratos mais antigos, por favor, verifique com o banco.';
            container.appendChild(endMsg);
        }
    });
    lucide.createIcons();
}

function renderTransactions() {
    renderTransactionsCore('transactions-container', transactions, false);
}

function renderCardTransactions() {
    renderTransactionsCore('card-transactions-container', cardTransactions, true);
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
    const cartao = document.getElementById('screen-cartao');
    
    // Hide all first
    home.classList.add('hidden');
    extrato.classList.add('hidden');
    cartao.classList.add('hidden');

    if (screenId === 'extrato') {
        extrato.classList.remove('hidden');
        renderTransactions();
    } else if (screenId === 'cartao') {
        cartao.classList.remove('hidden');
        renderCardTransactions();
    } else {
        home.classList.remove('hidden');
    }
}

// Event Listeners
document.getElementById('eye-toggle').onclick = (e) => { e.stopPropagation(); toggleVisibility(); };
document.getElementById('btn-saldo').onclick = () => navigateTo('extrato');
document.getElementById('btn-credit').onclick = () => navigateTo('cartao');
document.querySelectorAll('.btn-back-global').forEach(btn => {
    btn.onclick = () => navigateTo('home');
});
document.getElementById('search-input').oninput = (e) => {
    currentSearch = e.target.value;
    renderTransactions();
};

document.querySelectorAll('.search-input-card').forEach(input => {
    input.oninput = (e) => {
        currentSearch = e.target.value;
        renderCardTransactions();
    };
});

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
const interactiveIds = ['btn-user', 'btn-pix', 'btn-pagar', 'btn-loan', 'btn-recharge', 'btn-boxes', 'btn-extra-credit', 'btn-insurance', 'btn-organize'];
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
