class Calculator {
    constructor(){
        this.upperValue  = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset       = 0;
    }

    clearValue(){
        this.upperValue.textContent  = '0';
        this.resultValue.textContent = '0';
    }

    checkLastDigit (input, upperValue, reg){
        if((
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length - 1))
        )){
            return true;
        }else{
            return false;
        }
    }
        sum(n1, n2){
            return parseFloat(n1) + parseFloat(n2)
        }
        subtraction(n1, n2){
            return parseFloat(n1) - parseFloat(n2)
        }
        multiplication(n1, n2){
            return parseFloat(n1) * parseFloat(n2)
        }
        division(n1, n2){
            return parseFloat(n1) / parseFloat(n2)
        }
        


      // atualiza valores 
    refreshValue(total){
        this.upperValue.textContent  = total;
        this.resultValue.textContent = total;
    }

    resolution(){
          // explode uma string e um array 
        let upperValueArray = (this.upperValue.textContent).split(" ");
          // resultado da operação - cria a variavel result e inicia ela com o valor 0
        let result = 0;
        
          // crio um loop pra percorrer os dados do array
        for (let i = 0; i <= upperValueArray.length; i++) {
            
            let operation  = 0;
            let actualItem = upperValueArray[i];
            
            if (actualItem == "x") {
                result = calc.multiplication(upperValueArray[i - 1], upperValueArray [ i + 1 ]);
            } else if(actualItem == "/"){
                result = calc.division(upperValueArray[i - 1], upperValueArray[i +1]);
            } else if (!upperValueArray.includes('x') && !upperValueArray.includes('/')) {
                if (actualItem == "+") {
                result = calc.sum(upperValueArray[i - 1], upperValueArray [ i + 1 ]);
            } else if (actualItem == "-") {
                result = calc.subtraction(upperValueArray[i - 1], upperValueArray [ i + 1 ]);
            }
        }
              // atuliza valores do array
            if (operation) {
                upperValueArray[i - 1] = result;
                upperValueArray.splice[i,2];

                i = 0;
            }


            if (result) {
                calc.reset = 1;
            } 
              // atualizar os totais 
            calc.refreshValue(result);
        }
    }
    
      // adicionando um metodo pra ser referenciado no evento click
        btnPress(){
            let input = this.textContent;                  // textContent e o texto que tem dentro do botão
            let upperValue = calc.upperValue.textContent;  // obtem o valor de testo do botão
                                                           // verificar se tem só numeros
            var reg = new RegExp('^\\d+$');

              // se precisar resetar limpa o display
            if(calc.reset && reg.test(input)) {
                upperValue = '0';
            }
              // limpa a prop de reset 
            calc.reset = 0;

              // calc.upperValue.textContent = input; // verifica os dados de entrada

              // ativa o metodo pra limpar o display
            if(this.textContent == 'AC'){
                calc.clearValue();

            } else if(input == "="){
                    calc.resolution();
            } else {

              // checa se precisa adicionar ou não
            if(calc.checkLastDigit(input, upperValue, reg)){
                return false;
            }

              // adiciona espaços aos operadores
            if(!reg.test(input)){
                input = ` ${input} `;
            }

            if (upperValue == "0") {
                calc.upperValue.textContent = input;
            }else{
                calc.upperValue.textContent += input;
            }
        }

    }
}

        // iniciando o objeto
        //criando o objeto calculator
        let calc = new Calculator;

        // rastrear todos os botões com o querySelectorAll

        let buttons = document.querySelectorAll('.btn');

        console.log(buttons)

        // adicionando evento de "click" para os botões, atrelando todos eles com o laço de repetição

        for(let i = 0; buttons.length > i; i++){
            buttons[i].addEventListener('click', calc.btnPress);  // adicionando o metodo pra poder ser executado o click (dinâmico)
        }