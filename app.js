const wcag21 = document.querySelector(".wcag21")

// Background Colors of "body".
const darkBodyBackground = `#222831`
const yellowBodyBackground = `yellow`
const greenBodyBackground = `#39FF14`
// Text Colors.
const lightText = `#EEEEEE`
const darkText = `#222831`
// Background Colors for "main" 's  children.
const linesGrayBackground = `#393E46`
const linesYellowBackground = `#fff9ae`
const linesGreenBackground = `#4dff4d`
const linesBasicGreenBackground = `green`


// Event listener to parent element (prevents from multiple use of event listneres to all btns in navigation).
wcag21.addEventListener("click", e => {
    // If clicked, run contrast's functions.
    e.target.classList.contains("dark-theme") ? setTheme(darkBodyBackground, lightText, linesGrayBackground) : null
    e.target.classList.contains("yellow-theme") ? setTheme(yellowBodyBackground, darkText, linesYellowBackground) : null
    e.target.classList.contains("green-theme") ? setTheme(greenBodyBackground, darkText, linesGreenBackground) : null
    
    // If clicked, run bigger font's functions.
    e.target.classList.contains("incr1") ? setFontSize(`1.5rem`, `1.1rem`, `0.9rem`, `1.3rem`, `1rem`, `0.7rem`, `0.95rem`, `1.4rem`) : null
    e.target.classList.contains("incr2") ? setFontSize(`1.7rem`, `1.3rem`, `1.1rem`, `1.5rem`, `1.2rem`, `0.9rem`, `1.05rem`, `1.6rem`) : null
    e.target.classList.contains("incr3") ? setFontSize(`2rem`, `1.6rem`, `1.4rem`, `1.8rem`, `1.5rem`, `1.2rem`, `1.35rem`, `1.9rem`) : null

    //If clicked, run spacing functions.
    e.target.classList.contains("ltrSpace") ? setLetterSpacing(`3px`) : null
    e.target.classList.contains("lineH") ? setLineHeight(`30px`) : null

    
})
    

const setTheme = (bodyBg, textColor, linesBg, forReset1, forReset2) => {

    const outsideTextColor = `--outside-color`
    const insideTextColor = `--inside-color`
    const firstLineBackground = `--first-line-child-bg`
    const secondLineBackground = `--second-line-child-bg`
    const navHoverTextColor = `--nav-hover-color`


    document.body.style.backgroundColor = bodyBg
    document.documentElement.style.setProperty(outsideTextColor, textColor)
    document.documentElement.style.setProperty(insideTextColor, textColor)
    document.documentElement.style.setProperty(firstLineBackground, linesBg)
    document.documentElement.style.setProperty(secondLineBackground, linesBg)
    document.documentElement.style.setProperty(navHoverTextColor, textColor)
  
}


const setFontSize = (lg, bul, fws, navft, fl, slinebt, newsAl, alTel) => {
    const logoTitle = `--logo-title-size`
    const bulietyn = `--bulietyn-size`
    const footerWodomierzSlineTopTitle = `--footer-wodomierz-sline-title-size`
    const navFlineTitle = `--nav-fline-title-size`
    const fline = `--fline-small-size`
    const slineBottomTitle = `--sline-bottom-title`
    const newsAlarmTel = `--news-alarm-tel-size`
    const alarmTelTitle = `--alarm-tel-title`

    document.documentElement.style.setProperty(logoTitle, lg)
    document.documentElement.style.setProperty(bulietyn, bul)
    document.documentElement.style.setProperty(footerWodomierzSlineTopTitle, fws)
    document.documentElement.style.setProperty(navFlineTitle, navft)
    document.documentElement.style.setProperty(fline, fl)
    document.documentElement.style.setProperty(slineBottomTitle, slinebt)
    document.documentElement.style.setProperty(newsAlarmTel, newsAl)
    document.documentElement.style.setProperty(alarmTelTitle, alTel)
}

const setLetterSpacing = (num) => {
    const letterSpace = `--letter-spacing`
    document.documentElement.style.setProperty(letterSpace, num)
}
const setLineHeight = (num) => {
    const lineHeight = `--line-height`
    document.documentElement.style.setProperty(lineHeight, num)
}




