const IsuImg = document.querySelector('#Issue-img');
const IsuImgO = document.querySelector('#Issue-img-oo');
const IsuImgT = document.querySelector('#Issue-img-to');
const answerInput = document.querySelector('#answer-input');
const answerCheck = document.querySelector('#answer-check');
const True = document.querySelector('#answer-true');
const Fale = document.querySelector('#answer-fale');
const RetryButton = document.querySelector('#retry');
const Next = document.querySelector('#next');


const check = () => {
    if (answerInput.value === '北海道') {
        True.classList.remove('delete');
        Next.classList.remove('delete');

    } else if (answerInput.value === '大阪府' && IsuImg.src === IsuImgO.src) {
        True.classList.remove('delete');
        Next.classList.remove('delete');
    } else if (answerInput.value === '東京都' && IsuImgO.src === IsuImgT.src) {
        True.classList.remove('delete');
    }
    else {
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

    if (RetryButton.classList.contains('delete') === false) {
        RetryButton.classList.add('delete');
    }
}

const nextIssue = () => {
    IsuImg.src = IsuImgO.src;
    True.classList.add('delete');
    Next.classList.add('delete');
    if (IsuImg.src === IsuImgO.src) {
        IsuImgO.src = IsuImgT.src;
    }

}

answerCheck.addEventListener('click', check);
RetryButton.addEventListener('click', Retry);
Next.addEventListener('click', nextIssue);