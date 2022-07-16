var overview = document.getElementById('overview');
var textanim = false;
document.getElementById("overview_head").style.opacity = 0;
document.getElementById("overview_text1").style.opacity = 0;
document.getElementById("overview_text2").style.opacity = 0;

document.getElementById("version_head").style.opacity = 0;
document.getElementById("version_text1").style.opacity = 0;
document.getElementById("version_text2").style.opacity = 0;


var omnix = document.getElementById('omnix');
var omnixanim = false;
document.getElementById('li1').style.opacity = 0;
document.getElementById('li2').style.opacity = 0;
document.getElementById('li3').style.opacity = 0;
document.getElementById('li4').style.opacity = 0;
document.getElementById('li5').style.opacity = 0;
document.getElementById('li6').style.opacity = 0;
document.getElementById('nfthub').style.opacity = 0;

var roadmap = document.getElementById('roadmap');
document.getElementById('roadmaphead').style.opacity = 0;
var roadmapanim = false;

var roadmap1 = document.getElementById('roadmap1');
document.getElementById('roadmap1title').style.opacity = 0;
document.getElementById('roadmap1image').style.opacity = 0;
document.getElementById('roadmap1head').style.opacity = 0;
document.getElementById('roadmap1text').style.opacity = 0;
document.getElementById('roadmap1line').style.opacity = 0;
var roadmapanim1 = false;


var roadmap2 = document.getElementById('roadmap2');
document.getElementById('roadmap2title').style.opacity = 0;
document.getElementById('roadmap2image').style.opacity = 0;
document.getElementById('roadmap2head').style.opacity = 0;
document.getElementById('roadmap2text').style.opacity = 0;
document.getElementById('roadmap2line').style.opacity = 0;
var roadmapanim2 = false;

var roadmap3 = document.getElementById('roadmap3');
document.getElementById('roadmap3title').style.opacity = 0;
document.getElementById('roadmap3image').style.opacity = 0;
document.getElementById('roadmap3head').style.opacity = 0;
document.getElementById('roadmap3text').style.opacity = 0;
document.getElementById('roadmap3line').style.opacity = 0;
var roadmapanim3 = false;

var roadmap4 = document.getElementById('roadmap4');
document.getElementById('roadmap4title').style.opacity = 0;
document.getElementById('roadmap4image').style.opacity = 0;
document.getElementById('roadmap4head').style.opacity = 0;
document.getElementById('roadmap4text').style.opacity = 0;
document.getElementById('roadmap4line').style.opacity = 0;
var roadmapanim4 = false;

var roadmap5 = document.getElementById('roadmap5');
document.getElementById('roadmap5title').style.opacity = 0;
document.getElementById('roadmap5image').style.opacity = 0;
document.getElementById('roadmap5head').style.opacity = 0;
document.getElementById('roadmap5text').style.opacity = 0;
document.getElementById('roadmap5line').style.opacity = 0;
var roadmapanim5 = false;

var roadmap6 = document.getElementById('roadmap6');
document.getElementById('roadmap6title').style.opacity = 0;
document.getElementById('roadmap6image').style.opacity = 0;
document.getElementById('roadmap6head').style.opacity = 0;
document.getElementById('roadmap6text').style.opacity = 0;
var roadmapanim6 = false;

if(overview.offsetTop>0){
    setInterval(f, 500)
}

window.addEventListener("wheel", async(event) => {
    if(overview.offsetTop>0){
        f();
    }
});


function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}
async function f() {
    if(overview.offsetTop>0){
        if(overview.offsetTop < window.pageYOffset + 500 && textanim == false){
            textanim = true;
            //version part
            document.getElementById("version_head").style.opacity = 1;
            var text = document.getElementById('version_head');
            var newDom = '';
            var animationDelay = 5;
            for(let i = 0; i <text.innerHTML.length; i++)
            {
                newDom += '<span class="Home_charHead__EIWfi">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
            }
            text.innerHTML = newDom;
            var length = text.children.length;
    
            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
    
    
            let delayres = await delay(100); 
    
            document.getElementById("version_text1").style.opacity = 1;
            var text = document.getElementById('version_text1');
            var temp = text.innerHTML;
            var newDom = '';
            var animationDelay = 1;
            for(let i = 0; i <text.innerHTML.length; i++)
            {
                newDom += '<span class="Home_char__KeR7S">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
            }
    
            text.innerHTML = newDom;
            var length = text.children.length;
    
            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
            delayres = await delay(100); 
            text.innerHTML = temp;
    
            document.getElementById("version_text2").style.opacity = 1;
            var text = document.getElementById('version_text2');
            var temp = text.innerHTML;
            var newDom = '';
            var animationDelay = 1;
            for(let i = 0; i <text.innerHTML.length; i++)
            {
                newDom += '<span class="Home_char__KeR7S">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
            }
    
            text.innerHTML = newDom;
            var length = text.children.length;
    
            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
    
            delayres = await delay(100); 
            text.innerHTML = temp;
    
            //overview part
            document.getElementById("overview_head").style.opacity = 1;
            var text = document.getElementById('overview_head');
            var newDom = '';
            var animationDelay = 5;
            for(let i = 0; i <text.innerHTML.length; i++)
            {
                newDom += '<span class="Home_charHead__EIWfi">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
            }
            text.innerHTML = newDom;
            var length = text.children.length;
    
            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
    
    
            delayres = await delay(100); 
    
            document.getElementById("overview_text1").style.opacity = 1;
            var text = document.getElementById('overview_text1');
            var temp = text.innerHTML;
            var newDom = '';
            var animationDelay = 1;
            for(let i = 0; i <text.innerHTML.length; i++)
            {
                newDom += '<span class="Home_char__KeR7S">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+  '</span>';
            }
    
            text.innerHTML = newDom;
            var length = text.children.length;
    
            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
            delayres = await delay(100); 
            text.innerHTML = temp;

            document.getElementById("overview_text2").style.opacity = 1;
            var text = document.getElementById('overview_text2');
            var temp = text.innerHTML;
            var newDom = '';
            var animationDelay = 1;
            for(let i = 0; i <text.innerHTML.length; i++)
            {
                newDom += '<span class="Home_char__KeR7S">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+  '</span>';
            }
    
            text.innerHTML = newDom;
            var length = text.children.length;
    
            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
            delayres = await delay(100); 
            text.innerHTML = temp;
        }

        if(roadmap.offsetTop<window.pageYOffset + 800 && roadmapanim == false ){
            roadmapanim = true;
            document.getElementById('roadmaphead').style.opacity = 1;
            var text = document.getElementById('roadmaphead');
            var newDom = '';
            var animationDelay = 5;
            for(let i = 0; i <text.innerHTML.length; i++)
            {
                newDom += '<span class="Home_charHead__EIWfi">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
            }
            text.innerHTML = newDom;
            var length = text.children.length;
    
            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
        }
        if(roadmap1.offsetTop<window.pageYOffset + 600  && roadmapanim1 == false ){
            animation('roadmap1title','roadmap1image','roadmap1head','roadmap1text','roadmap1line')
            roadmapanim1 = true;
        }
        if(roadmap2.offsetTop<window.pageYOffset + 600  && roadmapanim2 == false ){
            animation('roadmap2title','roadmap2image','roadmap2head','roadmap2text','roadmap2line')
            roadmapanim2 = true;
        }
        if(roadmap3.offsetTop<window.pageYOffset + 600  && roadmapanim3 == false ){
            animation('roadmap3title','roadmap3image','roadmap3head','roadmap3text','roadmap3line')
            roadmapanim3 = true;
        }
        if(roadmap4.offsetTop<window.pageYOffset + 600  && roadmapanim4 == false  ){
            animation('roadmap4title','roadmap4image','roadmap4head','roadmap4text','roadmap4line')
            roadmapanim4 = true;
        }
        if(roadmap5.offsetTop<window.pageYOffset + 600  && roadmapanim5 == false ){
            animation('roadmap5title','roadmap5image','roadmap5head','roadmap5text','roadmap5line')
            roadmapanim5 = true;
        }
        if(roadmap6.offsetTop<window.pageYOffset + 600  && roadmapanim6 == false ){
            animation('roadmap6title','roadmap6image','roadmap6head','roadmap6text','roadmap6line')
            roadmapanim6 = true;
        }
    }

}
async function  animation(animtitle, animimage, animhead, animtext, animline) {
    document.getElementById(animtitle).style.opacity = 1;
    var text = document.getElementById(animtitle);
    var temp = text.innerHTML;
    var newDom = '';
    var animationDelay = 5;
    for(let i = 0; i <text.innerHTML.length; i++)
    {
        newDom += '<span class="Home_charHead__EIWfi">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    let delayres = await delay(100); 
    text.innerHTML = temp;

    document.getElementById(animimage).style.opacity = 1;
    document.getElementById(animimage).classList.add('Home_animImg__TmLoY');

    document.getElementById(animhead).style.opacity = 1;
    var text = document.getElementById(animhead);
    var temp = text.innerHTML;
    var newDom = '';
    var animationDelay = 5;
    for(let i = 0; i <text.innerHTML.length; i++)
    {
        newDom += '<span class="Home_charHead__EIWfi">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }


    delayres = await delay(100); 
    text.innerHTML = temp;



    document.getElementById(animtext).style.opacity = 1;
    var text = document.getElementById(animtext);
    var temp = text.innerHTML;
    var newDom = '';
    var animationDelay = 1;
    for(let i = 0; i <text.innerHTML.length; i++)
    {
        newDom += '<span class="Home_char__KeR7S">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;

    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    delayres = await delay(100); 
    text.innerHTML = temp;
    
    if(animline != "roadmap6line"){
        document.getElementById(animline).style.opacity = 1;
        document.getElementById(animline).classList.add('Home_animImg__TmLoY');
    }
}