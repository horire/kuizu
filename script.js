const answerInput = document.querySelector('#answer-input');
const answerCheck = document.querySelector('#answer-check');
const True = document.querySelector('#answer-true');
const Fale = document.querySelector('#answer-fale');
const RetryButton = document.querySelector('#retry');
const Next = document.querySelector('#next');


const check = () => {
    if (answerInput.value === '東京') {
        True.classList.remove('delete');
        Next.classList.remove('delete');

    } else {
        Fale.classList.remove('delete');
        RetryButton.classList.remove('delete');
    }
}

const Retry = () => {

    if (True.classList.contains('delete') === false) {
        True.classList.add('delete');

    } else {
        Fale.classList.add('delete');
    }

    if(RetryButton.classList.contains('delete') === false){
        RetryButton.classList.add('delete');
    }
}



answerCheck.addEventListener('click', check);
RetryButton.addEventListener('click', Retry);