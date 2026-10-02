var DEFAULT_CARD_TRANSACTIONS = [
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

var DEFAULT_TRANSACTIONS = [
    { date: 'Hoje, 01 de outubro de 2026', items: [
        { title: 'Débito de financiamento', time: '19:16 · Débito', amount: '- R$ 32.484,56', type: 'bill', tagText: 'DÉBITO DE FINANCIAMENTO' },
        { title: 'DF TUR 01/10', time: '19:15 · Pix', amount: '+ R$ 60.000,00', type: 'pix-in' }
    ] },
    { date: '30 de outubro de 2026', dayBalance: 'Saldo do dia: - R$ 32.484,56', items: [
        { title: 'MATHEUS TADEO ZILMANN DA SILVA', time: '15:30 · Pix', amount: '- R$ 5.000,00', type: 'pix-out' }
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

const DEFAULT_BALANCE = '27.515,44';

let cardTransactions = [...DEFAULT_CARD_TRANSACTIONS];
let transactions = [...DEFAULT_TRANSACTIONS];
let currentBalance = DEFAULT_BALANCE;
let currentUserName = 'Vitor';
let currentBank = 'nubank';
let itauCompany = 'Mz Transportes Ltda';
let itauAccount = 'Ag 8668 Cc 99853-0 | HELEN KATIA';
let isVisible = true;
let itauTypeFilter = 'all';

// Persistência Local
function loadPersistedData() {
    const savedBalance = localStorage.getItem('nu_balance');
    const savedTransactions = localStorage.getItem('nu_transactions');
    const savedUserName = localStorage.getItem('nu_user_name');
    const savedVisibility = localStorage.getItem('nu_visibility');
    const savedBank = localStorage.getItem('active_bank');
    const savedCompany = localStorage.getItem('itau_company');
    const savedAccount = localStorage.getItem('itau_account');

    currentBalance = '27.515,44';
    localStorage.setItem('nu_balance', currentBalance);
    if (savedTransactions) {
        transactions = JSON.parse(savedTransactions);
        transactions = transactions.map(group => ({
            ...group,
            date: group.date.includes('22 de setembro') ? group.date.replace('22 de setembro', '30 de outubro') : group.date,
            dayBalance: (group.date.includes('30 de outubro') || group.date.includes('22 de setembro')) ? 'Saldo do dia: - R$ 32.484,56' : group.dayBalance,
            items: group.items.map(item => {
                if (item.title && item.title.startsWith('Pix enviado - ')) {
                    const cleanName = item.title.replace('Pix enviado - ', '').replace('...', '').trim();
                    if (cleanName && isNaN(cleanName.replace(/\D/g, ''))) {
                        return { ...item, title: cleanName, tagText: 'PIX ENVIADO' };
                    }
                }
                return item;
            })
        })).filter(group => group.items.length > 0);
        
        const hasDebitoFin = transactions.some(g => g.items && g.items.some(i => i.title && i.title.toLowerCase().includes('financiamento')));
        if (!hasDebitoFin) {
            transactions = [...DEFAULT_TRANSACTIONS];
        }
        localStorage.setItem('nu_transactions', JSON.stringify(transactions));
    }
    if (savedUserName) currentUserName = savedUserName;
    if (savedVisibility !== null) isVisible = savedVisibility === 'true';
    if (savedBank) currentBank = savedBank;
    if (savedCompany) itauCompany = savedCompany;
    if (savedAccount) itauAccount = savedAccount;

    updateBalanceUI();
    updateUserNameUI();
    updateItauHeaderUI();
    updateBankUI();
    applyVisibilityUI();
    navigateTo('home');
}

function savePersistedData() {
    localStorage.setItem('nu_balance', currentBalance);
    localStorage.setItem('nu_transactions', JSON.stringify(transactions));
    localStorage.setItem('nu_user_name', currentUserName);
    localStorage.setItem('nu_visibility', isVisible);
    localStorage.setItem('active_bank', currentBank);
    localStorage.setItem('itau_company', itauCompany);
    localStorage.setItem('itau_account', itauAccount);
}

function updateBalanceUI() {
    document.querySelectorAll('.account-balance-value').forEach(el => {
        el.innerText = currentBalance;
    });
}

function updateUserNameUI() {
    const greetingEl = document.getElementById('user-name-text');
    if (greetingEl) {
        greetingEl.innerText = `Olá, ${currentUserName}`;
    }
}

function updateItauHeaderUI() {
    const compEl = document.getElementById('itau-company-text');
    const accEl = document.getElementById('itau-account-info-text');
    const avatarEl = document.getElementById('itau-avatar-initials');

    if (compEl) compEl.innerText = itauCompany || 'Mz Transportes Ltda';
    if (accEl) accEl.innerText = itauAccount || 'Ag 8668 Cc 99853-0 | HELEN KATIA';

    if (avatarEl) {
        const parts = (itauCompany || currentUserName || 'MT').trim().split(' ').filter(p => p);
        const init1 = parts[0] ? parts[0][0].toUpperCase() : 'M';
        const init2 = parts.length > 1 ? parts[1][0].toUpperCase() : 'T';
        avatarEl.innerText = `${init1}${init2}`;
    }
}

function setBank(bank) {
    currentBank = bank;
    savePersistedData();
    updateBankUI();
    navigateTo('home');
    showToast(`Design alterado para ${bank === 'itau' ? 'Itaú PJ' : 'Nubank'}`);
}

function updateBankUI() {
    const btnNu = document.getElementById('btn-bank-nubank');
    const btnItau = document.getElementById('btn-bank-itau');
    const extraFields = document.getElementById('itau-extra-fields');
    const floatingNav = document.querySelector('.floating-nav-container');

    if (currentBank === 'itau') {
        if (btnNu) {
            btnNu.classList.remove('active');
            btnNu.style.borderColor = '#E2E8F0';
            btnNu.style.background = 'white';
            btnNu.style.color = '#334155';
        }
        if (btnItau) {
            btnItau.classList.add('active');
            btnItau.style.borderColor = '#000B29';
            btnItau.style.background = '#F0F3F8';
            btnItau.style.color = '#000B29';
        }
        if (extraFields) extraFields.style.display = 'block';
        if (floatingNav) floatingNav.style.display = 'none';
    } else {
        if (btnItau) {
            btnItau.classList.remove('active');
            btnItau.style.borderColor = '#E2E8F0';
            btnItau.style.background = 'white';
            btnItau.style.color = '#334155';
        }
        if (btnNu) {
            btnNu.classList.add('active');
            btnNu.style.borderColor = '#820AD1';
            btnNu.style.background = '#F8F4FF';
            btnNu.style.color = '#820AD1';
        }
        if (extraFields) extraFields.style.display = 'none';
        if (floatingNav) floatingNav.style.display = 'flex';
    }
    updateThemeColor();
}

function updateThemeColor(screenId) {
    let color = '#820AD1';
    if (currentBank === 'itau') {
        const activeScreen = document.querySelector('.screen:not(.hidden)');
        const sId = screenId || (activeScreen ? activeScreen.id.replace('screen-itau-', '').replace('screen-', '') : '');
        if (sId === 'home' || sId === 'itau-home') color = '#000929';
        else if (sId === 'extrato' || sId === 'itau-extrato') color = '#F1F5F8';
        else color = '#F1F5F8';
    } else {
        color = '#820AD1';
    }

    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', color);
    }
}

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

    const filteredData = data.map((group, gIdx) => ({
        ...group,
        items: group.items.map((item, iIdx) => ({ ...item, gIdx, iIdx })).filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                 item.amount.toLowerCase().includes(currentSearch.toLowerCase());
            
            let matchesType = true;
            if (!isCard) {
                if (currentTypeFilter === 'in') matchesType = item.amount.startsWith('+') || item.type === 'pix-in';
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
            const isPositive = item.amount.startsWith('+') || item.type === 'card-in' || item.type === 'pix-in';
            const isCanceled = item.type === 'canceled';
            const isBillMsg = item.type === 'bill-closed' || item.type === 'bill-due';
            const isPayment = item.type === 'payment';
            
            const iconStyle = isPositive ? 'background: #EBF7EF; color: #269144;' : 
                              isCanceled ? 'color: #767676;' : 
                              isBillMsg ? 'background: #FEE7E7; color: #E53935;' :
                              isPayment ? 'background: #EBF7EF; color: #269144;' : '';

            // Lógica de Pressão Longa para Edição
            let pressTimer;
            const startPress = (e) => {
                if (isCard) return;
                div.classList.add('pressing');
                pressTimer = setTimeout(() => {
                    div.classList.remove('pressing');
                    div.classList.toggle('editing-item');
                    if (navigator.vibrate) navigator.vibrate(50);
                }, 800);
            };
            const clearPress = () => {
                clearTimeout(pressTimer);
                div.classList.remove('pressing');
            };

            div.onmousedown = startPress;
            div.ontouchstart = startPress;
            div.onmouseup = clearPress;
            div.onmouseleave = clearPress;
            div.ontouchend = clearPress;

            div.innerHTML = `
                <div class="transaction-icon" style="${iconStyle}">
                    <i data-lucide="${getIcon(item.type)}"></i>
                </div>
                <div class="transaction-info">
                    <div class="transaction-title">${item.title}</div>
                    <div class="transaction-meta">${item.time}</div>
                </div>
                <div class="transaction-amount-container">
                    <div class="transaction-amount ${isPositive ? 'amount-positive' : ''}" style="${isCanceled ? 'color: #767676; text-decoration: line-through;' : ''}">${item.amount}</div>
                    ${!isCard ? `<div class="delete-btn" onclick="confirmDelete(event, ${item.gIdx}, ${item.iIdx})"><i data-lucide="trash-2"></i></div>` : ''}
                </div>
            `;
            div.onclick = () => {
                if (!div.classList.contains('editing-item')) {
                    showToast('Detalhes em breve');
                }
            };
            container.appendChild(div);
        });

        if (isCard && index === filteredData.length - 1) {
            const endMsg = document.createElement('div');
            endMsg.style = 'padding: 40px 24px; text-align: center; color: var(--nu-text-sub); font-size: 14px; line-height: 1.5;';
            endMsg.innerHTML = 'Para ver extratos mais antigos, por favor, verifique com o banco.';
            container.appendChild(endMsg);
        }
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderTransactions() {
    renderTransactionsCore('transactions-container', transactions, false);
}

function renderItauTransactions() {
    const container = document.getElementById('itau-transactions-container');
    if (!container) return;
    container.innerHTML = '';

    const filteredData = transactions.map((group, gIdx) => ({
        ...group,
        items: group.items.map((item, iIdx) => ({ ...item, gIdx, iIdx })).filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                 item.amount.toLowerCase().includes(currentSearch.toLowerCase());
            
            let matchesType = true;
            if (itauTypeFilter === 'in') matchesType = item.amount.startsWith('+') || item.type === 'pix-in';
            if (itauTypeFilter === 'out') matchesType = item.amount.startsWith('-') || (!item.amount.startsWith('+') && item.type !== 'pix-in');
            if (itauTypeFilter === 'fut') matchesType = item.type === 'bill-due';
            if (itauTypeFilter === 'cons') matchesType = true;

            return matchesSearch && matchesType;
        })
    })).filter(group => group.items.length > 0);

    if (filteredData.length === 0) {
        container.innerHTML = '<div style="padding: 40px 0; text-align: center; color: #64748B; font-size: 14px;">Nenhum lançamento encontrado.</div>';
        return;
    }

    filteredData.forEach((group) => {
        const header = document.createElement('div');
        header.style = 'font-size: 14px; font-weight: 700; color: #0F172A; margin: 18px 0 8px 0;';
        header.innerText = group.date;
        container.appendChild(header);

        if (group.dayBalance || group.date.includes('30 de outubro') || group.date.includes('22 de setembro')) {
            const sub = document.createElement('div');
            sub.style = 'font-size: 13px; color: #475569; margin-bottom: 10px; font-weight: 500;';
            sub.innerText = ((group.date.includes('30 de outubro') || group.date.includes('22 de setembro')) ? 'Saldo do dia: - R$ 32.484,56' : group.dayBalance) || 'Saldo do dia: - R$ 32.484,56';
            container.appendChild(sub);
        }

        group.items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'itau-trans-row interactive';
            row.style = 'display: flex; align-items: flex-start; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #E2E8F0; position: relative;';
            
            // Lógica de Pressão Longa para Exibir Exclusão
            let pressTimer;
            const startPress = (e) => {
                row.classList.add('pressing');
                pressTimer = setTimeout(() => {
                    row.classList.remove('pressing');
                    row.classList.toggle('editing-item');
                    if (navigator.vibrate) navigator.vibrate(50);
                }, 800);
            };
            const clearPress = () => {
                clearTimeout(pressTimer);
                row.classList.remove('pressing');
            };

            row.onmousedown = startPress;
            row.ontouchstart = startPress;
            row.onmouseup = clearPress;
            row.onmouseleave = clearPress;
            row.ontouchend = clearPress;
            
            const isPositive = item.amount.startsWith('+') || item.type === 'pix-in';
            const cleanAmountStr = item.amount.replace('+ ', '').replace('- ', '');
            
            let tagText = item.tagText || 'PIX ENVIADO';
            if (!item.tagText) {
                if (item.type === 'pix-in' || isPositive) tagText = 'PIX RECEBIDO';
                else if (item.type === 'bill') tagText = 'PAGAMENTO DÉBITO';
                else if (item.type === 'store') tagText = 'COMPRA LOJA';
            }

            const iconSvg = isPositive ? `
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            ` : `
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="21" y1="8" x2="3" y2="8"></line>
                    <polyline points="7 4 3 8 7 12"></polyline>
                    <line x1="3" y1="16" x2="21" y2="16"></line>
                    <polyline points="17 12 21 16 17 20"></polyline>
                </svg>
            `;

            row.innerHTML = `
                <div style="display: flex; align-items: flex-start; gap: 14px; flex: 1; min-width: 0;">
                    <div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                        ${iconSvg}
                    </div>
                    <div style="flex: 1; min-width: 0; padding-right: 10px;">
                        <div style="font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.3px;">${tagText}</div>
                        <div style="font-size: 14px; font-weight: 700; color: #0F172A; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; margin-top: 3px;">${item.title}</div>
                        <div class="transaction-amount ${isPositive ? 'amount-positive' : ''}" style="font-size: 14px; font-weight: 700; margin-top: 4px; color: ${isPositive ? '#16A34A' : '#C5221F'};">
                            ${isPositive ? '+ ' : '- '}${cleanAmountStr}
                        </div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0; margin-top: 12px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <button class="delete-btn-itau" style="background: transparent; border: none; color: #DC2626; cursor: pointer; padding: 4px;" title="Excluir lançamento" onclick="confirmDelete(event, ${item.gIdx}, ${item.iIdx})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `;
            container.appendChild(row);
        });
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function confirmDelete(event, gIdx, iIdx) {
    event.stopPropagation();
    if (confirm('Deseja realmente excluir esta transação do extrato?')) {
        deleteTransaction(gIdx, iIdx);
    }
}

function deleteTransaction(gIdx, iIdx) {
    transactions[gIdx].items.splice(iIdx, 1);
    
    // Remover grupo de data se estiver vazio
    if (transactions[gIdx].items.length === 0) {
        transactions.splice(gIdx, 1);
    }
    
    savePersistedData();
    renderTransactions();
    renderItauTransactions();
    showToast('Transação excluída');
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
    applyVisibilityUI();
    savePersistedData();
}

function applyVisibilityUI() {
    const eyeWrapper = document.getElementById('eye-toggle');
    if (eyeWrapper) {
        const eyeIcon = eyeWrapper.querySelector('i') || eyeWrapper.querySelector('svg');
        if (eyeIcon) {
            eyeIcon.setAttribute('data-lucide', isVisible ? 'eye' : 'eye-off');
        }
    }

    const itauEyeIcon = document.getElementById('itau-extrato-eye-icon');
    if (itauEyeIcon) {
        itauEyeIcon.setAttribute('data-lucide', isVisible ? 'eye' : 'eye-off');
    }
    
    const targets = ['.balance-value', '.account-balance-value', '.balance-pill-value'];
    targets.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (isVisible) el.classList.remove('blur-balance');
            else el.classList.add('blur-balance');
        });
    });
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Logic para Configurações
function saveNewData() {
    const newBalance = document.getElementById('input-balance').value;
    const newUserName = document.getElementById('input-username').value;
    const newCompany = document.getElementById('input-itau-company').value;
    const newAccount = document.getElementById('input-itau-account').value;

    const transTitle = document.getElementById('trans-title').value;
    const transAmount = document.getElementById('trans-amount').value;
    const transDate = document.getElementById('trans-date').value;
    const transTime = document.getElementById('trans-time').value;
    const transType = document.getElementById('trans-type').value;

    if (newBalance) currentBalance = newBalance;
    if (newUserName) currentUserName = newUserName;
    if (newCompany) itauCompany = newCompany;
    if (newAccount) itauAccount = newAccount;

    if (transTitle && transAmount && transDate) {
        let formattedAmount = transAmount;
        if (!transAmount.includes('R$')) {
            formattedAmount = transAmount.startsWith('+') ? `+ R$ ${transAmount.replace('+', '').trim()}` : `- R$ ${transAmount.replace('-', '').trim()}`;
        }

        const newItem = {
            title: transTitle,
            time: `${transTime || '12:00'} · ${transType === 'pix-in' || transType === 'pix-out' ? 'Pix' : 'Débito'}`,
            amount: formattedAmount,
            type: transType
        };

        const existingGroup = transactions.find(g => g.date.toLowerCase() === transDate.toLowerCase());
        if (existingGroup) {
            existingGroup.items.unshift(newItem);
        } else {
            transactions.unshift({ date: transDate, items: [newItem] });
        }
    }

    savePersistedData();
    updateBalanceUI();
    updateUserNameUI();
    updateItauHeaderUI();
    renderTransactions();
    renderItauTransactions();
    showToast('Alterações salvas com sucesso!');
    navigateTo('home');
}

function resetToDefaults() {
    if (confirm('Deseja realmente restaurar todos os dados para o padrão original?')) {
        localStorage.clear();
        location.reload();
    }
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
    const config = document.getElementById('screen-config');
    const pix = document.getElementById('screen-pix');
    const pixTransfer = document.getElementById('screen-pix-transfer');
    const pixComprovante = document.getElementById('screen-pix-comprovante');
    const itauHome = document.getElementById('screen-itau-home');
    const itauExtrato = document.getElementById('screen-itau-extrato');

    [home, extrato, cartao, config, pix, pixTransfer, pixComprovante, itauHome, itauExtrato].forEach(s => {
        if (s) s.classList.add('hidden');
    });

    const floatingNav = document.querySelector('.floating-nav-container');
    if (floatingNav) {
        if (currentBank === 'itau' && (screenId === 'home' || screenId === 'extrato')) {
            floatingNav.style.display = 'none';
        } else {
            floatingNav.style.display = 'flex';
        }
    }

    const statusBar = document.querySelector('.status-bar');
    if (statusBar) {
        if (currentBank === 'itau' && screenId === 'extrato') {
            statusBar.style.color = '#0F172A';
            statusBar.querySelectorAll('svg, path, rect').forEach(el => el.setAttribute('stroke', '#0F172A'));
            const battFill = statusBar.querySelector('.battery-fill');
            if (battFill) battFill.style.background = '#0F172A';
        } else {
            statusBar.style.color = '#FFFFFF';
            statusBar.querySelectorAll('svg, path, rect').forEach(el => el.setAttribute('stroke', '#FFFFFF'));
            const battFill = statusBar.querySelector('.battery-fill');
            if (battFill) battFill.style.background = '#FFFFFF';
        }
    }

    updateThemeColor(screenId);

    if (screenId === 'extrato') {
        if (currentBank === 'itau') {
            if (itauExtrato) itauExtrato.classList.remove('hidden');
            renderItauTransactions();
        } else {
            if (extrato) extrato.classList.remove('hidden');
            renderTransactions();
        }
        applyVisibilityUI();
    } else if (screenId === 'cartao') {
        if (cartao) cartao.classList.remove('hidden');
        renderCardTransactions();
        applyVisibilityUI();
    } else if (screenId === 'config') {
        if (config) config.classList.remove('hidden');
        document.getElementById('input-balance').value = currentBalance;
        document.getElementById('input-username').value = currentUserName;
        document.getElementById('input-itau-company').value = itauCompany;
        document.getElementById('input-itau-account').value = itauAccount;
        updateBankUI();
    } else if (screenId === 'pix') {
        if (pix) pix.classList.remove('hidden');
        applyVisibilityUI();
    } else if (screenId === 'pix-transfer') {
        if (pixTransfer) pixTransfer.classList.remove('hidden');
        applyVisibilityUI();
        document.getElementById('input-transfer-amount').value = '';
        document.getElementById('input-transfer-key').value = '';
        document.getElementById('input-transfer-dest-name').value = '';
        document.getElementById('input-transfer-orig-name').value = currentUserName;
        document.getElementById('input-transfer-orig-cpf').value = '***.344.313-**';

        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const dateInput = document.getElementById('input-transfer-date');
        const timeInput = document.getElementById('input-transfer-time');
        if (dateInput) dateInput.value = `${year}-${month}-${day}`;
        if (timeInput) timeInput.value = `${hours}:${minutes}:${seconds}`;
    } else if (screenId === 'pix-comprovante') {
        if (pixComprovante) pixComprovante.classList.remove('hidden');
        applyVisibilityUI();
    } else {
        // Home
        if (currentBank === 'itau') {
            if (itauHome) itauHome.classList.remove('hidden');
            updateItauHeaderUI();
        } else {
            if (home) home.classList.remove('hidden');
        }
        applyVisibilityUI();
    }
}

// Event Listeners
document.getElementById('btn-bank-nubank').onclick = () => setBank('nubank');
document.getElementById('btn-bank-itau').onclick = () => setBank('itau');

document.getElementById('eye-toggle').onclick = (e) => { e.stopPropagation(); toggleVisibility(); };
const itauEyeHome = document.getElementById('itau-eye-toggle-home');
if (itauEyeHome) itauEyeHome.onclick = (e) => { e.stopPropagation(); toggleVisibility(); };

const itauEyeExtrato = document.getElementById('itau-extrato-eye-btn');
if (itauEyeExtrato) itauEyeExtrato.onclick = (e) => { e.stopPropagation(); toggleVisibility(); };

document.getElementById('btn-pix').onclick = () => navigateTo('pix');
document.getElementById('btn-saldo').onclick = () => navigateTo('extrato');
document.getElementById('btn-credit').onclick = () => navigateTo('cartao');

// Itaú Event Handlers
const btnItauUser = document.getElementById('btn-itau-user');
if (btnItauUser) btnItauUser.onclick = () => navigateTo('config');

const btnItauToExtrato = document.getElementById('btn-itau-to-extrato');
if (btnItauToExtrato) btnItauToExtrato.onclick = () => navigateTo('extrato');

const btnItauBackExtrato = document.getElementById('btn-itau-back-extrato');
if (btnItauBackExtrato) btnItauBackExtrato.onclick = () => navigateTo('home');

const btnItauPixHome = document.getElementById('btn-itau-pix-home');
if (btnItauPixHome) btnItauPixHome.onclick = () => navigateTo('pix');

const btnItauExtratoPix = document.getElementById('btn-itau-extrato-pix');
if (btnItauExtratoPix) btnItauExtratoPix.onclick = () => navigateTo('pix');

// Itaú Navigation Tabs
['itau-nav-home', 'itau-nav-home-2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.onclick = () => navigateTo('home');
});

['itau-nav-extrato', 'itau-nav-extrato-2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.onclick = () => navigateTo('extrato');
});

['itau-nav-menu', 'itau-nav-menu-2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.onclick = () => navigateTo('config');
});

// Itaú Filter Tabs
const itauFilters = {
    'itau-filter-all': 'all',
    'itau-filter-cons': 'cons',
    'itau-filter-in': 'in',
    'itau-filter-out': 'out',
    'itau-filter-fut': 'fut'
};

Object.keys(itauFilters).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.onclick = function() {
            document.querySelectorAll('.itau-tab').forEach(t => {
                t.classList.remove('active');
                t.style.borderBottom = 'none';
                t.style.fontWeight = '500';
                t.style.color = '#64748B';
            });
            this.classList.add('active');
            this.style.borderBottom = '3px solid #EC6608';
            this.style.fontWeight = '700';
            this.style.color = '#0F172A';
            itauTypeFilter = itauFilters[id];
            renderItauTransactions();
        };
    }
});

document.querySelectorAll('.btn-back-global').forEach(btn => {
    btn.onclick = () => navigateTo('home');
});
document.getElementById('search-input').oninput = (e) => {
    currentSearch = e.target.value;
    renderTransactions();
    renderItauTransactions();
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
    const el = document.getElementById(id);
    if (el) {
        el.onclick = function() {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            currentTypeFilter = filters[id];
            renderTransactions();
        };
    }
});

// Config Screen Actions
document.getElementById('btn-user').onclick = () => navigateTo('config');
document.getElementById('btn-save-config').onclick = saveNewData;
document.getElementById('btn-reset-config').onclick = resetToDefaults;
document.getElementById('btn-back-config').onclick = () => navigateTo('home');

// Pix Actions
document.querySelectorAll('.pix-action-item').forEach(item => {
    item.onclick = function() {
        const label = this.querySelector('.action-label').innerText;
        if (label === 'Transferir') {
            navigateTo('pix-transfer');
        } else {
            showToast('Funcionalidade em breve');
        }
    }
});

document.querySelector('.btn-back-pix').onclick = () => navigateTo('pix');
document.querySelector('.btn-close-comprovante').onclick = () => navigateTo('home');

// Máscara de Moeda para Transferência
document.getElementById('input-transfer-amount').oninput = function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = (value / 100).toFixed(2) + '';
    value = value.replace(".", ",");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    e.target.value = value;
};

// Botão de definir data/hora para agora
const btnTransferNow = document.getElementById('btn-transfer-now');
if (btnTransferNow) {
    btnTransferNow.onclick = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const dateInput = document.getElementById('input-transfer-date');
        const timeInput = document.getElementById('input-transfer-time');
        if (dateInput) dateInput.value = `${year}-${month}-${day}`;
        if (timeInput) timeInput.value = `${hours}:${minutes}:${seconds}`;
        showToast('Data e horário atualizados para agora');
    };
}

// Botão para gerar ID de Transação aleatório
const btnGenTxid = document.getElementById('btn-gen-txid');
if (btnGenTxid) {
    btnGenTxid.onclick = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        const dateCompact = `${year}${month}${day}${hh}${mm}`;
        const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase() + Math.random().toString(36).substring(2, 8).toUpperCase();
        const txidInput = document.getElementById('input-transfer-txid');
        if (txidInput) {
            txidInput.value = `E60701190${dateCompact}${randomSuffix}`.substring(0, 32);
            showToast('ID de transação gerado!');
        }
    };
}

// Botão para gerar Código de Autenticação aleatório
const btnGenAuth = document.getElementById('btn-gen-auth');
if (btnGenAuth) {
    btnGenAuth.onclick = () => {
        const chars = '0123456789ABCDEF';
        let result = '';
        for (let i = 0; i < 40; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        const authInput = document.getElementById('input-transfer-auth');
        if (authInput) {
            authInput.value = result;
            showToast('Autenticação gerada!');
        }
    };
}

// Botão para gerar Controle aleatório
const btnGenControl = document.getElementById('btn-gen-control');
if (btnGenControl) {
    btnGenControl.onclick = () => {
        const randomDigits = Math.floor(1000000000000 + Math.random() * 9000000000000).toString().padStart(12, '0');
        const controlInput = document.getElementById('input-transfer-control');
        if (controlInput) {
            controlInput.value = `000${randomDigits}`;
            showToast('Controle gerado!');
        }
    };
}

document.getElementById('btn-finish-transfer').onclick = function() {
    const amount = document.getElementById('input-transfer-amount').value;
    const key = document.getElementById('input-transfer-key').value;
    const bank = document.getElementById('input-transfer-bank').value;
    const destName = document.getElementById('input-transfer-dest-name').value.trim() || 'MATHEUS TADEO ZILMANN DA SILVA';
    const origName = document.getElementById('input-transfer-orig-name').value || currentUserName;
    const origCpf = document.getElementById('input-transfer-orig-cpf').value || '***.344.313-**';
    const origBank = document.getElementById('input-transfer-orig-bank').value || 'NU PAGAMENTOS - IP';
    const origAgencyAccount = (document.getElementById('input-transfer-orig-agency-account') ? document.getElementById('input-transfer-orig-agency-account').value : '') || '8668/0099853-0';
    const dateVal = document.getElementById('input-transfer-date').value;
    const timeVal = document.getElementById('input-transfer-time').value;

    if (!amount || !key) {
        showToast('Preencha o valor e a chave Pix');
        return;
    }

    // Formatar valor com separador de milhar
    let numericAmount = parseFloat(amount.replace('.', '').replace(',', '.'));
    let formattedAmount = numericAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    // Atualizar comprovante Nubank
    document.getElementById('comp-amount').innerText = formattedAmount;
    document.getElementById('comp-dest-key').innerText = key;
    document.getElementById('comp-dest-name').innerText = destName;
    document.getElementById('comp-dest-bank').innerText = bank === 'Nubank' ? 'NU PAGAMENTOS - IP' : bank;
    document.getElementById('comp-orig-name').innerText = origName;
    document.getElementById('comp-orig-cpf').innerText = origCpf;

    const customTxid = document.getElementById('input-transfer-txid') ? document.getElementById('input-transfer-txid').value.trim() : '';
    const customAuth = document.getElementById('input-transfer-auth') ? document.getElementById('input-transfer-auth').value.trim() : '';
    const customControl = document.getElementById('input-transfer-control') ? document.getElementById('input-transfer-control').value.trim() : '';

    let transferDate = new Date();
    if (dateVal) {
        const parts = dateVal.split('-');
        if (parts.length === 3) {
            const y = parseInt(parts[0], 10);
            const m = parseInt(parts[1], 10) - 1;
            const d = parseInt(parts[2], 10);
            transferDate.setFullYear(y, m, d);
        }
    }
    if (timeVal) {
        const tParts = timeVal.split(':');
        const hh = parseInt(tParts[0], 10) || 0;
        const mm = parseInt(tParts[1], 10) || 0;
        const ss = parseInt(tParts[2], 10) || 0;
        transferDate.setHours(hh, mm, ss);
    }

    const monthsUpper = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
    const monthsShort = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    const day = transferDate.getDate();
    const monthIndex = transferDate.getMonth();
    const year = transferDate.getFullYear();
    const hh = String(transferDate.getHours()).padStart(2, '0');
    const mm = String(transferDate.getMinutes()).padStart(2, '0');
    const ss = String(transferDate.getSeconds()).padStart(2, '0');

    const formattedDate = `${day} ${monthsUpper[monthIndex]} ${year}`;
    const formattedTime = `${hh}:${mm}:${ss}`;
    document.getElementById('comp-datetime').innerText = `${formattedDate} - ${formattedTime}`;

    // Gerar ID de transação realista incorporando a data e hora selecionadas se não especificado pelo usuário
    const dateCompact = `${year}${String(monthIndex + 1).padStart(2, '0')}${String(day).padStart(2, '0')}${hh}${mm}`;
    const randomSuffix = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 6);
    const transId = customTxid || `E18236120${dateCompact}s${randomSuffix}`;
    document.getElementById('comp-id').innerText = transId;
    document.getElementById('comp-id-footer').innerText = transId;

    // Atualizar comprovante modelo C6 Bank
    updateC6Comprovante({
        amount: formattedAmount,
        key: key,
        bank: bank,
        destName: destName,
        origName: origName,
        origCpf: origCpf,
        transferDate: transferDate,
        transId: transId,
        customAuth: customAuth
    });

    // Atualizar comprovante modelo Itaú
    updateItauComprovante({
        amount: formattedAmount,
        key: key,
        bank: bank,
        destName: destName,
        origName: origName,
        origCpf: origCpf,
        origAgencyAccount: origAgencyAccount,
        transferDate: transferDate,
        transId: transId,
        customAuth: customAuth,
        customControl: customControl
    });

    // Selecionar modelo de comprovante escolhido
    const selectedModel = document.getElementById('input-transfer-model') ? document.getElementById('input-transfer-model').value : 'nubank';
    switchReceiptModel(selectedModel);

    // Atualizar saldo (subtrair)
    let cleanAmount = parseFloat(amount.replace(',', '.'));
    let cleanBalance = parseFloat(currentBalance.replace('.', '').replace(',', '.'));
    
    if (!isNaN(cleanAmount)) {
        let newBalanceNum = cleanBalance - cleanAmount;
        currentBalance = newBalanceNum.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        updateBalanceUI();
        
        // Adicionar ao extrato com a data e horário definidos
        const monthsFull = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const currentYear = new Date().getFullYear();
        const today = new Date();
        const isToday = (transferDate.getDate() === today.getDate() && 
                        transferDate.getMonth() === today.getMonth() && 
                        transferDate.getFullYear() === today.getFullYear());
        
        let dateGroupStr = '';
        if (isToday) {
            dateGroupStr = `Hoje, ${String(day).padStart(2, '0')} de ${monthsFull[monthIndex]} de ${year}`;
        } else {
            dateGroupStr = (year === currentYear)
                ? `${String(day).padStart(2, '0')} de ${monthsFull[monthIndex]}`
                : `${String(day).padStart(2, '0')} de ${monthsFull[monthIndex]} de ${year}`;
        }

        const newItem = {
            title: destName || 'Transferência enviada',
            time: `${hh}:${mm} · Pix`,
            amount: `- R$ ${formattedAmount}`,
            type: 'pix-out',
            tagText: 'PIX ENVIADO'
        };

        const existingGroup = transactions.find(g => g.date.toLowerCase() === dateGroupStr.toLowerCase());
        if (existingGroup) {
            existingGroup.items.unshift(newItem);
        } else {
            transactions.unshift({ date: dateGroupStr, items: [newItem] });
        }
        savePersistedData();
        renderTransactions();
        if (typeof renderItauTransactions === 'function') {
            renderItauTransactions();
        }
    }

    navigateTo('pix-comprovante');
    showToast('Transferência realizada!');
};

function updateC6Comprovante({ amount, key, bank, destName, origName, origCpf, transferDate, transId, customAuth }) {
    const defaultAuth = (Math.random().toString(36).substring(2, 10) + 
                         Math.random().toString(36).substring(2, 10) + 
                         Math.random().toString(36).substring(2, 10)).toUpperCase().substring(0, 26);
    const authCode = customAuth || defaultAuth;
    
    document.getElementById('c6-comp-auth').innerText = authCode;
    document.getElementById('c6-comp-id').innerText = transId || ('E31872495' + Math.random().toString(36).substring(2, 15));
    document.getElementById('c6-dest-name').innerText = destName;
    
    // Formatar iniciais
    const nameParts = destName.trim().split(' ').filter(p => p.length > 0);
    const firstInitial = nameParts[0] ? nameParts[0][0].toUpperCase() : 'M';
    const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1][0].toUpperCase() : 'S';
    document.getElementById('c6-dest-avatar').innerText = `${firstInitial}${lastInitial}`;
    
    const origParts = origName.trim().split(' ').filter(p => p.length > 0);
    const origFirst = origParts[0] ? origParts[0][0].toUpperCase() : 'M';
    const origLast = origParts.length > 1 ? origParts[origParts.length - 1][0].toUpperCase() : 'S';
    document.getElementById('c6-orig-avatar').innerText = `${origFirst}${origLast}`;

    // Mapeamento de bancos
    let bankFormatted = '380 - PICPAY';
    if (bank === 'Nubank') bankFormatted = '260 - Nu Pagamentos S.A.';
    else if (bank === 'C6 Bank') bankFormatted = '336 - Banco C6 S.A.';
    else if (bank === 'Itaú' || bank === 'Itaú Unibanco') bankFormatted = '341 - Banco Itaú Unibanco S.A.';
    else if (bank === 'Bradesco') bankFormatted = '237 - Banco Bradesco S.A.';
    else if (bank === 'Santander') bankFormatted = '033 - Banco Santander (Brasil) S.A.';
    else if (bank === 'Banco do Brasil') bankFormatted = '001 - Banco do Brasil S.A.';
    else if (bank === 'Inter') bankFormatted = '077 - Banco Inter S.A.';
    else if (bank === 'PicPay') bankFormatted = '380 - PicPay Servicos S.A.';
    else if (bank === 'CORA SCFI' || bank === 'Cora') bankFormatted = '403 - Cora Sociedade de Crédito, Financiamento e Investimento S.A.';
    else bankFormatted = bank;

    document.getElementById('c6-dest-bank').innerText = bankFormatted;
    document.getElementById('c6-comp-key').innerText = key;
    document.getElementById('c6-comp-cpf').innerText = origCpf || '***.564.969-**';
    document.getElementById('c6-comp-amount').innerText = `R$ ${amount}`;
    document.getElementById('c6-orig-name').innerText = origName.toUpperCase();

    // Data formatada curta: 14/09/2026<br>16:42
    const dd = String(transferDate.getDate()).padStart(2, '0');
    const mm = String(transferDate.getMonth() + 1).padStart(2, '0');
    const yyyy = transferDate.getFullYear();
    const hh = String(transferDate.getHours()).padStart(2, '0');
    const min = String(transferDate.getMinutes()).padStart(2, '0');

    const shortDateTime = `${dd}/${mm}/${yyyy}<br>${hh}:${min}`;
    document.getElementById('c6-comp-timeline-date1').innerHTML = shortDateTime;
    document.getElementById('c6-comp-timeline-date2').innerHTML = shortDateTime;

    // Data formatada longa: segunda-feira, 14 de setembro de 2026, 16:42
    const daysOfWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const monthsFull = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const dayName = daysOfWeek[transferDate.getDay()];
    const fullDateStr = `${dayName}, ${transferDate.getDate()} de ${monthsFull[transferDate.getMonth()]} de ${yyyy}, ${hh}:${min}`;
    document.getElementById('c6-comp-full-datetime').innerText = fullDateStr;
}

function updateItauComprovante({ amount, key, bank, destName, origName, origCpf, origAgencyAccount, transferDate, transId, customAuth, customControl }) {
    const monthsLower = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const dd = String(transferDate.getDate()).padStart(2, '0');
    const mmIndex = transferDate.getMonth();
    const yyyy = transferDate.getFullYear();
    const headerDateStr = `${dd} ${monthsLower[mmIndex]} de ${yyyy}`;
    
    const dateFormattedShort = `${dd}/${String(mmIndex + 1).padStart(2, '0')}/${yyyy}`;

    const dateHeaderEl = document.getElementById('itau-comp-date-header');
    if (dateHeaderEl) dateHeaderEl.innerText = headerDateStr;
    
    // Pagador
    const origNameEl = document.getElementById('itau-orig-name');
    if (origNameEl) origNameEl.innerText = (origName || 'MZ TRANSPORTES LTDA').toUpperCase();
    
    const origCpfEl = document.getElementById('itau-orig-cpf');
    if (origCpfEl) origCpfEl.innerText = origCpf || '35.267.862/0001-60';

    const origAccEl = document.getElementById('itau-orig-agency-account');
    if (origAccEl) origAccEl.innerText = origAgencyAccount || '8668/0099853-0';

    // Recebedor
    const destNameEl = document.getElementById('itau-dest-name');
    if (destNameEl) destNameEl.innerText = (destName || 'MATHEUS TADEO ZILMANN DA SILVA').toUpperCase();

    const destKeyEl = document.getElementById('itau-dest-key');
    if (destKeyEl) destKeyEl.innerText = key || '06956496984';

    let maskedDestCpf = '***564969**';
    const cleanKeyDigits = key ? key.replace(/\D/g, '') : '';
    if (cleanKeyDigits.length === 11) {
        maskedDestCpf = `***${cleanKeyDigits.substring(3, 9)}**`;
    }
    const destCpfEl = document.getElementById('itau-dest-cpf');
    if (destCpfEl) destCpfEl.innerText = maskedDestCpf;

    let destBankFormatted = bank;
    if (bank === 'Nubank') destBankFormatted = 'NU PAGAMENTOS - IP';
    else if (bank === 'C6 Bank' || bank === 'C6') destBankFormatted = 'BCO C6 S.A.';
    else if (bank === 'Itaú' || bank === 'Itaú Unibanco') destBankFormatted = 'ITAÚ UNIBANCO S.A.';
    else if (bank === 'Bradesco') destBankFormatted = 'BCO BRADESCO S.A.';
    else if (bank === 'Santander') destBankFormatted = 'BCO SANTANDER (BRASIL) S.A.';
    else if (bank === 'Banco do Brasil') destBankFormatted = 'BANCO DO BRASIL S.A.';
    else if (bank === 'Inter') destBankFormatted = 'BCO INTER S.A.';
    else if (bank === 'PicPay') destBankFormatted = 'PICPAY SERVICOS S.A.';
    else if (bank === 'CORA SCFI' || bank === 'Cora') destBankFormatted = 'CORA SCFI S.A.';

    const destBankEl = document.getElementById('itau-dest-bank');
    if (destBankEl) destBankEl.innerText = destBankFormatted;

    // Transação
    const compAmountEl = document.getElementById('itau-comp-amount');
    if (compAmountEl) compAmountEl.innerText = `R$ ${amount}`;

    const compDateEl = document.getElementById('itau-comp-date');
    if (compDateEl) compDateEl.innerText = dateFormattedShort;

    const defaultHexAuth = (transId || Math.random().toString(36)).toUpperCase().replace(/[^A-Z0-9]/g, '');
    const defaultAuth = (defaultHexAuth + '155E41B2CAC12EB82A7C83CAD2E4BAAE44960B68').substring(0, 40);
    const authFull = customAuth || defaultAuth;
    const compAuthEl = document.getElementById('itau-comp-auth');
    if (compAuthEl) compAuthEl.innerText = authFull;
    
    const compIdEl = document.getElementById('itau-comp-id');
    if (compIdEl) compIdEl.innerText = transId || ('E60701190202610011626DY5W' + Math.random().toString(36).substring(2, 9).toUpperCase());

    const defaultControl = Math.floor(100000000000000 + Math.random() * 900000000000000).toString();
    const controlVal = customControl || defaultControl;
    const compControlEl = document.getElementById('itau-comp-control');
    if (compControlEl) compControlEl.innerText = controlVal;

    // Página 2: Data e Hora no formato "01/10/2026 às 13:26:57.589421"
    const hh = String(transferDate.getHours()).padStart(2, '0');
    const min = String(transferDate.getMinutes()).padStart(2, '0');
    const ss = String(transferDate.getSeconds()).padStart(2, '0');
    const micros = Math.floor(100000 + Math.random() * 900000).toString();
    const page2Text = `${dateFormattedShort} às ${hh}:${min}:${ss}.${micros}`;
    const page2El = document.getElementById('itau-page2-datetime');
    if (page2El) page2El.innerText = page2Text;
}

function switchReceiptModel(model) {
    const nubankEl = document.getElementById('pdf-content');
    const c6El = document.getElementById('c6-pdf-content');
    const itauEl = document.getElementById('itau-pdf-content');
    const tabNubank = document.getElementById('tab-model-nubank');
    const tabC6 = document.getElementById('tab-model-c6');
    const tabItau = document.getElementById('tab-model-itau');

    if (model === 'c6') {
        if (nubankEl) nubankEl.classList.add('hidden');
        if (itauEl) itauEl.classList.add('hidden');
        if (c6El) c6El.classList.remove('hidden');
        if (tabNubank) {
            tabNubank.style.background = 'transparent';
            tabNubank.style.color = '#666';
        }
        if (tabItau) {
            tabItau.style.background = 'transparent';
            tabItau.style.color = '#666';
        }
        if (tabC6) {
            tabC6.style.background = '#000';
            tabC6.style.color = 'white';
        }
    } else if (model === 'itau') {
        if (nubankEl) nubankEl.classList.add('hidden');
        if (c6El) c6El.classList.add('hidden');
        if (itauEl) itauEl.classList.remove('hidden');
        if (tabNubank) {
            tabNubank.style.background = 'transparent';
            tabNubank.style.color = '#666';
        }
        if (tabC6) {
            tabC6.style.background = 'transparent';
            tabC6.style.color = '#666';
        }
        if (tabItau) {
            tabItau.style.background = '#000066';
            tabItau.style.color = 'white';
        }
    } else {
        if (c6El) c6El.classList.add('hidden');
        if (itauEl) itauEl.classList.add('hidden');
        if (nubankEl) nubankEl.classList.remove('hidden');
        if (tabC6) {
            tabC6.style.background = 'transparent';
            tabC6.style.color = '#666';
        }
        if (tabItau) {
            tabItau.style.background = 'transparent';
            tabItau.style.color = '#666';
        }
        if (tabNubank) {
            tabNubank.style.background = 'var(--nu-purple)';
            tabNubank.style.color = 'white';
        }
    }
}

// Model Tab Event Handlers
const tabModelNubank = document.getElementById('tab-model-nubank');
if (tabModelNubank) {
    tabModelNubank.onclick = () => switchReceiptModel('nubank');
}

const tabModelC6 = document.getElementById('tab-model-c6');
if (tabModelC6) {
    tabModelC6.onclick = () => switchReceiptModel('c6');
}

const tabModelItau = document.getElementById('tab-model-itau');
if (tabModelItau) {
    tabModelItau.onclick = () => switchReceiptModel('itau');
}

document.getElementById('btn-schedule-transfer').onclick = () => {
    const dateVal = document.getElementById('input-transfer-date').value;
    const timeVal = document.getElementById('input-transfer-time').value;
    if (dateVal) {
        const parts = dateVal.split('-');
        const formatted = `${parts[2]}/${parts[1]}/${parts[0]}`;
        showToast(`Agendado para ${formatted}${timeVal ? ' às ' + timeVal.substring(0, 5) : ''}!`);
    } else {
        showToast('Agendamento realizado com sucesso!');
    }
    setTimeout(() => navigateTo('home'), 1500);
};

document.getElementById('btn-share-pdf').onclick = function() {
    generatePDF();
};

const btnShareImg = document.getElementById('btn-share-img');
if (btnShareImg) {
    btnShareImg.onclick = function() {
        generateImage();
    };
}

document.getElementById('btn-share-pdf-top').onclick = function() {
    generateImage();
};

function generatePDF() {
    const targetEl = document.querySelector('#screen-pix-comprovante .receipt-card:not(.hidden)') || document.getElementById('pdf-content');
    const isC6 = targetEl.id === 'c6-pdf-content';
    const isItau = targetEl.id === 'itau-pdf-content';

    let pdfFilename = 'comprovante-nubank.pdf';
    let bankName = 'Nubank';
    if (isC6) { pdfFilename = 'comprovante-c6bank.pdf'; bankName = 'C6 Bank'; }
    else if (isItau) { pdfFilename = 'comprovante-itau.pdf'; bankName = 'Itaú'; }
    
    // Ocultar botões que não devem sair no PDF
    document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'none');

    const opt = {
        margin:       isItau ? [8, 5, 8, 5] : [10, 5, 10, 5],
        filename:     pdfFilename,
        image:        { type: 'jpeg', quality: 1.0 },
        html2canvas:  { scale: 3, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: [102.6, 265], orientation: 'portrait' },
        pagebreak:    { mode: ['css', 'legacy'], before: '.html2pdf__page-break' }
    };
    
    showToast(`Gerando comprovante ${bankName} em PDF...`);
    
    // Usar html2pdf para gerar o PDF e então decidir se compartilha ou baixa
    const worker = html2pdf().set(opt).from(targetEl).toPdf().get('pdf');
    
    worker.then(pdf => {
        const blob = pdf.output('blob');
        const file = new File([blob], pdfFilename, { type: 'application/pdf' });

        // Tentar compartilhamento nativo
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
                files: [file],
                title: `Comprovante ${bankName}`,
                text: 'Segue o comprovante da minha transferência Pix.'
            })
            .then(() => {
                showToast('PDF compartilhado com sucesso!');
                document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'flex');
            })
            .catch((error) => {
                console.error('Erro ao compartilhar:', error);
                // Fallback para download se o usuário cancelar ou der erro
                pdf.save();
                document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'flex');
            });
        } else {
            // Fallback para download direto se não suportar Share API
            pdf.save();
            showToast('PDF baixado com sucesso!');
            document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'flex');
        }
    });
}

function generateImage() {
    const targetEl = document.querySelector('#screen-pix-comprovante .receipt-card:not(.hidden)') || document.getElementById('pdf-content');
    const isC6 = targetEl.id === 'c6-pdf-content';
    const isItau = targetEl.id === 'itau-pdf-content';

    let imgFilename = 'comprovante-nubank.png';
    let bankName = 'Nubank';
    if (isC6) { imgFilename = 'comprovante-c6bank.png'; bankName = 'C6 Bank'; }
    else if (isItau) { imgFilename = 'comprovante-itau.png'; bankName = 'Itaú'; }

    const scrollContainer = document.getElementById('screen-pix-comprovante');
    
    // Salvar posição de scroll original e rolar até o topo para captura limpa
    const originalScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;
    if (scrollContainer) scrollContainer.scrollTop = 0;

    // Ocultar botões no-pdf
    document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'none');

    showToast(`Gerando imagem ${bankName}...`);

    const h2c = (typeof html2canvas !== 'undefined') ? html2canvas : (window.html2canvas || null);

    if (!h2c) {
        showToast('Biblioteca de imagem não disponível');
        document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'flex');
        return;
    }

    // Obter altura total real incluindo todo o conteúdo de Origem e Rodapé
    const fullHeight = Math.max(targetEl.scrollHeight, targetEl.offsetHeight, 950);
    const fullWidth = targetEl.offsetWidth || 350;

    h2c(targetEl, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#FFFFFF',
        logging: false,
        width: fullWidth,
        height: fullHeight,
        windowWidth: fullWidth,
        windowHeight: fullHeight,
        scrollY: 0,
        scrollX: 0,
        onclone: (clonedDoc) => {
            const clonedActive = clonedDoc.querySelector(`#${targetEl.id}`);
            if (clonedActive) {
                clonedActive.style.height = 'auto';
                clonedActive.style.minHeight = 'auto';
                clonedActive.style.maxHeight = 'none';
                clonedActive.style.overflow = 'visible';
            }
            const clonedScreen = clonedDoc.getElementById('screen-pix-comprovante');
            if (clonedScreen) {
                clonedScreen.style.height = 'auto';
                clonedScreen.style.overflow = 'visible';
            }
            clonedDoc.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'none');
        }
    }).then(canvas => {
        // Restaurar exibição dos botões e posição de scroll
        document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'flex');
        if (scrollContainer) scrollContainer.scrollTop = originalScrollTop;

        canvas.toBlob(blob => {
            if (!blob) {
                showToast('Erro ao gerar imagem');
                return;
            }
            const file = new File([blob], imgFilename, { type: 'image/png' });

            // Tentar compartilhamento nativo via Web Share API
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({
                    files: [file],
                    title: isC6 ? 'Comprovante C6 Bank' : 'Comprovante Nubank',
                    text: 'Segue o comprovante da minha transferência Pix.'
                })
                .then(() => showToast('Imagem compartilhada com sucesso!'))
                .catch((error) => {
                    console.error('Erro ao compartilhar imagem:', error);
                    downloadBlobFile(blob, imgFilename);
                    showToast('Imagem baixada!');
                });
            } else {
                downloadBlobFile(blob, imgFilename);
                showToast('Imagem baixada com sucesso!');
            }
        }, 'image/png', 1.0);
    }).catch(err => {
        console.error('Erro html2canvas:', err);
        document.querySelectorAll('.no-pdf').forEach(el => el.style.display = 'flex');
        if (scrollContainer) scrollContainer.scrollTop = originalScrollTop;
        showToast('Erro ao gerar imagem');
    });
}

function downloadBlobFile(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Generic Actions
const interactiveIds = ['btn-pagar', 'btn-loan', 'btn-recharge', 'btn-boxes', 'btn-extra-credit', 'btn-insurance', 'btn-organize'];
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
window.addEventListener('DOMContentLoaded', () => {
    try {
        loadPersistedData();
        renderTransactions();
        lucide.createIcons();
    } catch (e) {
        console.error('Erro ao inicializar:', e);
    }
});
