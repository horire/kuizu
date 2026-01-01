const img = document.querySelector('img');
const ImgAll = document.querySelectorAll('.Issue-img');
const IsuImg = document.querySelector('#Issue-img');
const Level = document.querySelector('#level');
const LevelIcon = document.querySelector('#level-icon');
const IsuImgO = document.querySelector('#Issue-img-oo');
const IsuImgT = document.querySelector('#Issue-img-to');
const AnswerTitle = document.querySelector('#answer-title');
const answerInput = document.querySelector('#answer-input');
const answerCheck = document.querySelector('#answer-check');
const True = document.querySelector('#answer-true');
const AnswerLasTtrue = document.querySelector('#answer-last-true');
const Fale = document.querySelector('#answer-fale');
const RetryButton = document.querySelector('#retry');
const Next = document.querySelector('#next');
const Back = document.querySelector('#back');
const SiteTitle = document.querySelector('#site-title');
const AboutSiteText = document.querySelector('#about-site-text');
const KeyFrames = {
    translate: ['0 50px', '0'],
    opacity: [0, 1],
}
const Options = {
    duration: 2000,
    easing: 'ease',
    fill: 'forwards',
}
const Options2 = {
    duration: 2000,
    delay: 100,
    easing: 'ease',
    fill: 'forwards',
}
const animation = () => {
    SiteTitle.animate(KeyFrames, Options);
    AboutSiteText.animate(KeyFrames, Options2);
}




window.addEventListener('load', animation);



console.log(ImgAll);
const check = () => {
    if (answerInput.value === '北海道' && ImgAll[0].alt === '出題画像1' || answerInput.value === 'ほっかいどう' && ImgAll[0].alt === '出題画像1') {
        True.classList.remove('delete');
        Next.classList.remove('delete');
    } else if (answerInput.value === '大阪府' && ImgAll[0].alt === '出題画像2' || answerInput.value === '大阪' && ImgAll[0].alt === '出題画像2' || answerInput.value === 'おおさかふ' && ImgAll[0].alt === '出題画像2' || answerInput.value === 'おおさか' && ImgAll[0].alt === '出題画像2') {
        True.classList.remove('delete');
        Next.classList.remove('delete');

    } else if (answerInput.value === '東京都' && ImgAll[0].alt === '出題画像3' || answerInput.value === '東京' && ImgAll[0].alt === '出題画像3' || answerInput.value === 'とうきょうと' && ImgAll[0].alt === '出題画像3' || answerInput.value === 'とうきょう' && ImgAll[0].alt === '出題画像3') {
        True.classList.remove('delete');
        AnswerLasTtrue.classList.remove('delete');
        Back.classList.remove('delete');
    }
    else {
        Fale.classList.remove('delete');
        RetryButton.classList.remove('delete');
    }

    AnswerTitle.classList.add('delete');
    answerInput.classList.add('delete');
    answerCheck.classList.add('delete');
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
    AnswerTitle.classList.remove('delete');
    answerInput.classList.remove('delete');
    answerCheck.classList.remove('delete');
}

const nextIssue = () => {
    if (img.alt === '出題画像1') {
        IsuImg.src = IsuImgO.src;
        img.alt = '出題画像2';
        Level.textContent = 'level 2';
        LevelIcon.textContent = '★★☆';



    } else {
        IsuImg.src = IsuImgT.src;
        img.alt = '出題画像3';
        Level.textContent = 'level 3';
        LevelIcon.textContent = '★★★';
    }

    True.classList.add('delete');
    Next.classList.add('delete');
    AnswerTitle.classList.toggle('delete');
    answerCheck.classList.toggle('delete');
    answerInput.classList.toggle('delete');
}

const TOP = () => {
    console.log(ImgAll[0])
    console.log(IsuImg.src)
    ImgAll[0].src = 'images/ho-img.png';
    AnswerTitle.classList.toggle('delete');
    answerCheck.classList.toggle('delete');
    answerInput.classList.toggle('delete');
    True.classList.add('delete');
    AnswerLasTtrue.classList.add('delete');
    Back.classList.add('delete');
    img.alt = '出題画像1';
    Level.textContent = 'level 1';
    LevelIcon.textContent = '★☆☆';

}

answerCheck.addEventListener('click', check);
RetryButton.addEventListener('click', Retry);
Next.addEventListener('click', nextIssue);
Back.addEventListener('click', TOP);