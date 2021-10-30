let kepek=[1955, 1965, 1969, 1981, 1990, 1992, 1993, 1995];
let a=0;
let ma=0;
let nevek=[1955, 1965, 1969, 1981, 1990, 1992, 1993, 1995];
let leiras=["Ezen a képen egy 1955 évi versenyautó láthat", "Ezen a képen már 1965-ben járunk, ahol már modernebb autók köröztek.", "Ebben az évben ilyengyönyörű előzéseknek is szemtanúi lehettünk.",  "Nagyot változtak az autókerre az évre", " Nem tudok már mit kitalálni, csak írok valamit.", " Ide is kell írni valamit, hogy legyen változás.", " Utolsó előtti kép, már nincs sok hátra.", "És ez az utolsó kép, ezzel talán a weboldal is elkészült."];

function keret () {
    $('.mframe').attr('src', '/pics/'+kepek[a]+'.jpg');
    $('.nyil2').css("margin-left",50+a*125+"px");
    $('h3').text (nevek[a]);
    $('p').text (leiras[a]);
    if (a==0) {$('#elso').css('border' , '2px solid red');
    } else {$('#elso').css('border' , '1px solid gray');}
    if (a==1) {$('#masodik').css('border' , '2px solid red');
    } else {$('#masodik').css('border' , '1px solid gray');}
    if (a==2) {$('#harmadik').css('border' , '2px solid red');
    } else {$('#harmadik').css('border' , '1px solid gray');}
    if (a==3) {$('#negyedik').css('border' , '2px solid red');
    } else {$('#negyedik').css('border' , '1px solid gray');}
    if (a==4) {$('#otodik').css('border' , '2px solid red');
    } else {$('#otodik').css('border' , '1px solid gray');}
    if (a==5) {$('#hatodik').css('border' , '2px solid red');
    } else {$('#hatodik').css('border' , '1px solid gray');}
    if (a==6) {$('#hetedik').css('border' , '2px solid red');
    } else {$('#hetedik').css('border' , '1px solid gray');}
    if (a==7) {$('#nyolcadik').css('border' , '2px solid red');
    } else {$('#nyolcadik').css('border' , '1px solid gray');}
}

$(".bal").click(()=> {
    a = a-1;
    if (a<0) {a=7
    } 
    keret();
})

$(".jobb").click(()=> {
    a = a+1;
    if (a>7) {a=0
    } 
    keret();
})

$("#elso").click(()=> {
    a = 0;
    keret();
})

$("#masodik").click(()=> {
    a = 1;
    keret();
})

$("#harmadik").click(()=> {
    a = 2;
    keret();
})

$("#negyedik").click(()=> {
    a = 3;
    keret();
})

$("#otodik").click(()=> {
    a = 4;
    keret();
})

$("#hatodik").click(()=> {
    a = 5;
    keret();
})

$("#hetedik").click(()=> {
    a = 6;
    keret();
})

$("#nyolcadik").click(()=> {
    a = 7;
    keret();
})
