//push Yes btn
btnYes.onclick = () => {
    text.style.display="none";
    start.style.display="block";
    fifty.addEventListener("click", fun50);
    people.addEventListener("click", peopleHelp);
    phone.addEventListener("click", callFriend);
    startGame(i = 0, harcer, patasxanner);
};

let harcer = [
    "1. Ինչ կստանանք տվյալ գործողությունների արդյունքում՝ 4+32/16-2*6/4 :",
    "2. Ո՞ր թվականին է Հայաստանը ընդունել քրիստոնեությունը որպես պետական կրոն:",
    "3. Ո՞րն է աշխարհի ամենաերկար գետը:",
    "4. Ո՞ր կղզին է անվանվել ի պատիվ հայտնի հոլանդացի ծովագնացի:",
    "5. Քանի՞ ծով է ողողում Բալկանյան թերակղզին:",
    "6. Ո՞ր քիմիական տարրն է անվանվել ի պատիվ ստորգետնյա չար թզուկի:",
    "7. Աշխարհի ամենափոքր գիրքի չափն 0,75 x 0,75մմ Է, ունի 22 Էջ, այն արտադրվել է...:",
    "8. Աշխարհի ամենամեծ կետը ունի 30 մետր երկարություն և կշռում է 150 տոննա: Ո՞րն է այն:",
    "9. Լյումիեր եղբայրները ո՞ր թվականին են  հայտնագործել «Շարժվող լուսանկարները»:",
    "10. Սոդան կամ Նատրիումի հիդրոկարբոնատը կիրառվում է առօրյայա կենցաղում: Ո՞րն է այն:",
    "11. Մարդու մարմնի որ մասն է ակտիվանալու դեպքում մեծանում 10 անգամ:",
    "12. Աշխարհի ամենաշոգ վայրը ԱՄՆ-ում է գնվում, որտեղ ջերմաստիճանը հասնում է 56.7C:",
    "13. Ո՞րն է աշխարհի ամենաբարձր կետը:",
    "14. Ո՞րն է աշխարհի ամենահին քաղաքը:",
    "15. Ո՞ր երկրում են բնակիչները ամենաշատը սուրճ օգտագործում՝ օրական 400 մգ:",
];
let patasxanner = [
    ["1. 3", "2. 6", "3. 12", "4. 4"],
    ["1. 331", "2. 405", "3. 301", "4. 406"],
    ["1. Նեղոս", "2. Ամազոն", "3. Յանցզի", "4. Զամբեզի"],
    ["1. Թասմանիա", "2. Մադագասկար", "3. Սումատրա", "4. Կալիմանթան"],
    ["1. 5", "2. 3", "3. 4", "4. 6"],
    ["1. Բերիլիում", "2. Երկաթ", "3. Կոբալտ", "4. Հաֆնիում"],
    ["1. Հայաստանում", "2. Հունաստանում", "3. Չինաստանում", "4. Ճապոնիայում"],
    ["1. Գրենլանդական կետ", "2. Կապույտ կետ", "3. Ողնաթև", "4. Ճիշտ կետ"],
    ["1. 1895", "2. 1889", "3. 1878", "4. 1869"],
    ["1. CaCO3", "2. Na2CO3", "3. NH4HCO3", "4. NаНСО3"],
    ["1. Թոքերը", "2. Ականջաթաղանթը", "3. Աչքի բիբը", "4. Սրտանոթային համակարգը"],
    ["1. Մահվան մարգագետին", "2. Արևելյան կայարան", "3. Մակ-Մերդոն", "4. Յումա"],
    ["1. Չոգորի", "2. Կանչենջանգա", "3. Էվերեստ", "4. Մակալու"],
    ["1. Մումբայ", "2. Դանիա", "3. Հռոմ", "4. Դամասկոս"],
    ["1. Բրազիլիա", "2. Շվեդիա", "3. Մարոկո", "4. Ֆրանսիա"],
];
let right = ["1", "3", "2", "1", "4", "3", "4", "2", "1", "2", "3", "1", "3", "4", "2"];

//harc u patasxan dashter@ lracnox
function startGame(i, harcer, patasxanner) {
    let patasxn = document.querySelectorAll("#patasxn > button");
    harc.innerText = harcer[i];
    harc.setAttribute("data",i);
    for (let j = 0; j < 4; j++){
        patasxn[j].innerText = patasxanner[i][j];
        patasxn[j].style.display="inline-block"
    }
    patasxn.forEach(x => x.onclick = function (event) {
        x.style.backgroundColor = "#F5F342";
        setTimeout(()=> cheackAnsver(event.target, i), 800);
    });
}
//cheack Ansver
function cheackAnsver(btn, i) {
    if(btn.getAttribute("id") === right[i]){
        btn.style.backgroundColor = "#1aff0e";
        if (i < harcer.length-1){
            setTimeout(function () {
                startGame(i+1, harcer, patasxanner);
                btn.style.backgroundColor ="";
            },800);
        }
        setTimeout(function () {
            ol.children[14-i].style.backgroundColor = "blue";
            gumar.innerText = ol.children[14-i].innerHTML;

        },800);
        if (i===harcer.length-1){
            setTimeout(function() {
                alert("Դուք հաղթեցիք 5.000.000դրամ");
                location.reload()
            },1000)
        }
    }  else {
        btn.style.backgroundColor = "red";
        setTimeout(function () {
            alert("End Game");
            location.reload()
        },500);
    }
}

//50:50 help
function fun50() {
    let count=0;
    let harciHamar = harc.getAttribute("data");
    let patasxn = document.querySelectorAll("#patasxn > button");
    for (let i=0;i<patasxn.length;i++){
        if (patasxn[i].getAttribute("id")!==right[harciHamar]){
            patasxn[i].style.display="none";
            count++
        }
        if (count===2)break
    }
    fifty.removeEventListener("click", fun50);
}

//dshlichi ognutyun help
function peopleHelp() {
    dahOgn.style.display = "block";
    btnLogo.style.display = "none";
    let harciHamar = harc.getAttribute("data");
    let patasxn = document.querySelectorAll("#patasxn > button");
    let dahOgnbtn = document.querySelectorAll("#dahOgn > div");
    for (let i=0; i< patasxn.length;i++){
        if (patasxn[i].getAttribute("id") === right[harciHamar]){
            dahOgnbtn[i].style.width = "70%";
        }
    }
    people.removeEventListener("click", peopleHelp);
}

//close dahlichi ognutyun help window
document.getElementById("close").onclick = function () {
    dahOgn.style.display = "none";
    btnLogo.style.display = "block";

};

//phone friend
function callFriend() {
    phoneogn.style.display = "block";
    btnLogo.style.display = "none";
    phone.removeEventListener("click", callFriend);
}
//close call friend help window
document.getElementById("phoneClose").onclick = function () {
    phoneogn.style.display = "none";
    btnLogo.style.display = "block";
};
