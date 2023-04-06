const lighttheme="light.css";
const darktheme="dark.css";
const sunIcon="sun_icon.png";
const moonIcon="moon_icon.png"
const theme=document.getElementById("theme");
const themeicon=document.getElementById("themeicon");
const ob1=document.getElementById("ob1");
function theme_change()
{
    setTimeout(function(){
        ob1.innerHTML="CALCULATOR"
    },3000);
    if(theme.getAttribute("href") === lighttheme)
    {
        theme.setAttribute("href",darktheme);
        themeicon.setAttribute("src",sunIcon);
        ob1.innerHTML="DARK MODE";
    }
    else
    {
        theme.setAttribute("href",lighttheme);
        themeicon.setAttribute("src",moonIcon);
        ob1.innerHTML="LIGHT MODE";
    }
}
function empty()
{
    const clear=document.getElementById("result");
    clear.value="";
}
function last_element_delete()
{
    lst = document.getElementById("result");
    b="";
    ans1=lst.value;
    for(i=0;i<lst.value.length-1;i++)
    {
        b+=ans1[i];
    }
    lst.value=b;
}
res=document.getElementById("result");
function screen(e)
{
    //number
    if(e=="0")
    {
        res.value+="0";
    }
    else if(e=="1")
    {
        res.value+="1";
    }
    else if(e=="2")
    {
        res.value+="2";
    }
    else if(e=="3")
    {
        res.value+="3";
    }
    else if(e=="4")
    {
        res.value+="4";
    }
    else if(e=="5")
    {
        res.value+="5";
    }
    else if(e=="6")
    {
        res.value+="6";
    }
    else if(e=="7")
    {
        res.value+="7";
    }
    else if(e=="8")
    {
        res.value+="8";
    }
    else if(e=="9")
    {
        res.value+="9";
    }

    //operator
    if(e=="+")
    {
        res.value+="+";
    }
    else if(e=="-")
    {
        res.value+="-";
    }
    else if(e=="*")
    {
        res.value+="*";
    }
    else if(e=="/")
    {
        res.value+="/";
    }

    //decimal
    if(e==".")
    {
        res.value+=".";
    }

    //calculate
    if(e=="=")
    {
        calculate(res.value);
    }
}
function calculate(expression)
{
    let ans2=eval(expression);
    res.value=ans2;
}