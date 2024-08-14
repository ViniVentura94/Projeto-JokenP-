
    // Selecionando os botões
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    
    // Selecionando os elementos para exibir o resultado, mãos e pontuações
    const resultDisplay = document.getElementById('result');
    const playerScoreDisplay = document.getElementById('player-score');
    const machineScoreDisplay = document.getElementById('machine-score');
    const playerHand = document.getElementById('player-hand');
    const machineHand = document.getElementById('machine-hand');
    const playerChoiceDiv = document.querySelector('.player-choice');
    const machineChoiceDiv = document.querySelector('.machine-choice');
    
    let playerScore = 0;
    let machineScore = 0;

    // Função para gerar a escolha da máquina
    function getMachineChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Função para determinar o vencedor e aplicar as cores de fundo
    function determineWinner(playerChoice, machineChoice) {
        playerChoiceDiv.classList.remove('winner', 'loser');
        machineChoiceDiv.classList.remove('winner', 'loser');

        if (playerChoice === machineChoice) {
            resultDisplay.textContent = 'Empate!';
            return 'draw';
        } else if (
            (playerChoice === 'rock' && machineChoice === 'scissors') ||
            (playerChoice === 'scissors' && machineChoice === 'paper') ||
            (playerChoice === 'paper' && machineChoice === 'rock')
        ) {
            playerScore++;
            resultDisplay.textContent = 'Você ganhou!';
            playerChoiceDiv.classList.add('winner');
            machineChoiceDiv.classList.add('loser');
            return 'player';
        } else {
            machineScore++;
            resultDisplay.textContent = 'A Máquina ganhou!';
            playerChoiceDiv.classList.add('loser');
            machineChoiceDiv.classList.add('winner');
            return 'machine';
        }
    }

    // Função para atualizar as mãos
    function updateHands(playerChoice, machineChoice) {
        const handSymbols = {
            'rock': '&#x270A',
            'paper': '&#x270B',
            'scissors': '&#x270C'
        };
        playerHand.innerHTML = handSymbols[playerChoice];
        machineHand.innerHTML = handSymbols[machineChoice];
    }

    // Função principal para jogar
    function playGame(playerChoice) {
        const machineChoice = getMachineChoice();
        const result = determineWinner(playerChoice, machineChoice);
        
        // Atualizando as mãos com animação
        playerHand.classList.add('shake-animation');
        machineHand.classList.add('shake-animation');

        setTimeout(() => {
            playerHand.classList.remove('shake-animation');
            machineHand.classList.remove('shake-animation');
            updateHands(playerChoice, machineChoice);

            // Atualizando o resultado com animação
            resultDisplay.classList.add('result-animated');
            playerScoreDisplay.textContent = playerScore;
            machineScoreDisplay.textContent = machineScore;

            // Removendo a classe de animação após um tempo
            setTimeout(() => {
                resultDisplay.classList.remove('result-animated');
            }, 1000);
        }, 500);
    }

    // Adicionando event listeners aos botões
    rockButton.addEventListener('click', () => playGame('rock'));
    paperButton.addEventListener('click', () => playGame('paper'));
    scissorsButton.addEventListener('click', () => playGame('scissors'));

