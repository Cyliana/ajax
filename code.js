function init()
{
    let c = 0;
    
    recupererCaractere(c);
}

function recupererCaractere(c)
{
    let ajax = new XMLHttpRequest();
    ajax.open("GET","server.php?c="+c, true);
    
    ajax.onreadystatechange = ()=>
    {
        if (ajax.readyState === 4 && ajax.status === 200)
        {
            if(ajax.responseText != '[EOF]')
            {
                if(ajax.responseText == "\n")
                {
                    document.body.innerHTML += "<br>";
                }
                else
                {
                    document.body.innerHTML += ajax.responseText;
                }

                c++;
                recupererCaractere(c);
            }
        }
    }
    ajax.send()
}
