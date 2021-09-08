<?php

if(isset($_GET['c']))
{

    $index = $_GET['c'];
    
    $file = fopen("texte (ISO-8859-15).txt","r");
    fseek($file, $index);
    $c = fgetc($file);
    fclose($file);

    if($c == "")
    {
        $c ='[EOF]';
    }

    print($c);
}