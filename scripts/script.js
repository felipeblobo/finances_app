//Open and close modal

const Modal = {
  openClose() {
    let novaTransacao = document.querySelector(".modal-overlay");
    novaTransacao.classList.toggle("active");
  },
};


const changeColorCard = {
  
  colorCard() {
  const cardTotal = document.querySelector('.card.total');
  
  if (Transaction.total() < 0) {
  cardTotal.classList.add('redCard') 
  
  } else {
  cardTotal.classList.remove('redCard')
  }
  } }

//Armazenamento

const Storage = {

  get() {
    return JSON.parse(localStorage.getItem('devtransaction')) || [];
  },

  set(transactions) {
    localStorage.setItem("devtransaction", JSON.stringify(transactions));
  }
};

//Global values

const Transaction = {
  all: Storage.get(),
 
  
  add(transaction) {
    Transaction.all.push(transaction);
    App.reload();
  },

  remove(index) {
      Transaction.all.splice(index, 1)
      App.reload();
  },

  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
    return income;
  },

  outcomes() {
    let outcome = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        outcome += transaction.amount;
      }
    });
    return outcome;
  },

  total() {
    return Transaction.incomes() + Transaction.outcomes();
  },
};

//Show transactions in javascript

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.dataset = index;
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
    
    DOM.transactionsContainer.appendChild(tr);  
  },

  innerHTMLTransaction(transaction, index) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utilities.formatCurrency(transaction.amount);

    const html = `
                
                <td class="description">${transaction.description}</td>
                <td class=${CSSclass}>${amount}</td>
                <td class="date">${transaction.date}</td>
                <td>
                  <img onclick='Transaction.remove(${index})' src="./images/assets/minus.svg" alt="imagem de menos" />
                </td>
             
        `;
    return html;
  },

  updateBalance() {
    document.getElementById(
      "incomeDisplay"
    ).innerHTML = Utilities.formatCurrency(Transaction.incomes());
    document.getElementById(
      "expenseDisplay"
    ).innerHTML = Utilities.formatCurrency(Transaction.outcomes());
    document.getElementById(
      "totalDisplay"
    ).innerHTML = Utilities.formatCurrency(Transaction.total());
  },

  clearTransactions() {
      DOM.transactionsContainer.innerHTML = "";
  }
};

const Utilities = {

  formatDate(date) {
    const splittedDate = date.split('-')
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
  },

  formatAmount(value) {


    value = Number(value) * 100
    return Math.round(value)
  },

  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return signal + value;
  },
};

//Prepare to show data (resumo) about transactions

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    validateFields() {
      const {description, amount, date} = Form.getValues()
      
      if(description.trim() === '' || amount.trim() === '' || date.trim() === '') {
        throw new Error('Por favor, preencha todos os campos.')
      }
    },
    
    formatValues() {
      let {description, amount, date} = Form.getValues()

      amount = Utilities.formatAmount(amount)

      date = Utilities.formatDate(date)

      return {
        description,
        amount,
        date
      }

    },  

    saveTransaction(transaction) {
      Transaction.add(transaction)
    },

    clearFields() {
      Form.description.value = ""
      Form.amount.value = ""
      Form.date.value = ""
    },
    
    submit(event) {
        event.preventDefault()

        try {
        
         Form.validateFields() //valida os campos
         const transaction = Form.formatValues() //formata os valores       
         Form.saveTransaction(transaction)  //salva a transação
         Form.clearFields()         //limpa os campos do form
         Modal.openClose()            //fecha o modal
         

        } catch (error) {
          alert(error.message)
        }
    }
};


const App = {
  
  init() {
    Transaction.all.forEach((transaction, index) => {
        DOM.addTransaction(transaction, index);
        
    })
      
    DOM.updateBalance()
    changeColorCard.colorCard();
    Storage.set(Transaction.all)
  },

  reload() {
      DOM.clearTransactions();
      App.init();
  },
};


App.init();

