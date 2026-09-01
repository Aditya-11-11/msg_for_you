const message = [

`hello,
Mast ahes na ?`,

`sorry tula khich contact thevaycha nastana me contact krtoy ani tehi asa tyastathi pn he shevatch, hya nantr kadhich tras nhi denar. gele don mahine jase gelet tasach pudhe pn chalu rahil.`,

`aaj tras detoy tyala thod karan hot

Congratulations.....

finally Ex-BFE banteys, I belive changlach job bhetala asel. mala aavdhel janun gheyla konti company konti post etc etc jr tu zhalel srw thod bajula thevun sangu shklis tr ani nhi sangitls tri thik ahe... Evdh srw zhalyavr punha khi mala share karav as nhi vadhnar tula so its okk.`,

`tula asa samj hoil aata ki me tuzi chowkshi keli pn me khrch tuzi direct kiva indirect kashich chowkshi keli nhwti jevha mala he gosht samjali, Me thoda surprice zhalo ani aanad pn zhala finally bfe mdhun sutlis mhnun. Call kela hota tevha fdss madhl kon kon gel he bolt astana samorunch mala sangitl ki tu dekhil resign kelays as. trust tr nasel mazyavr tya movie chya goshti mule karn te goshti ftk tin janana mahit hoti tyat tu swtha ahes ani jagdish sir jyani nhi sangitl tuzyamate so urlo mich pn tri please possible asel tr vishwas thev hyavr.

me naav nahi ghetlay konakadhun kalal te pn jr tula vishawas nasel basat mazyavr te naav dekhil sangel. aata nhi bolloy karn ragat tyla bolyla gelis tr te mhnle me ithli gosht tidhe krto jyacha mala tri kahich frk nhi padat unless and untill tu ahes.`,

`Aso zhal khup khi... srw visrun navin survat kruya ka, unblock kr as nhi bolnar.. te deserve nsel krt me. Kush raha. Navin job new life new collegues new location enjoy kr

congratulations once again and all the best for future endeavors...

ani sorry je khi zhal tyasathi khupch jast tras dila na tula... and thank you very much..

take care

miss you ... tuzya peksha hi jast sobatche divas khup miss krto... but hoil savay..`,

`chalo bahot hua msg ka motive new job hota train track change nko karyla...

all the best

ani he chochlates enjoy kr... yacha pn ek bhari seen zhalay aaj coincidence asel pn itke ki vichru nko.. aso punha train track sodel.

byy

Congrats once again and all the best yaar....`,

`are ajun ek hot office no vr block ahe I guess. tu jashil ani te tasch rahil ani koni baghitl tr tula vichrl vaigre chukun tula tr ugach tuzya life madhe nav yeych maz bfe mdhun gelyavr pn mhnun...

chal aata pakka byy

take care anuja`
];


const messageBox = document.getElementById("message");
const cursor = document.querySelector(".cursor");


/*
    Typing settings
*/

const typingSpeed = 55;       // Slower typing speed
const paragraphPause = 1600;  // Pause between paragraphs


/*
    Type one paragraph
*/

function typeParagraph(text) {

    return new Promise((resolve) => {

        const paragraph = document.createElement("div");

        paragraph.className = "paragraph";

        messageBox.appendChild(paragraph);

        let index = 0;


        function typeCharacter() {

            if (index < text.length) {

                paragraph.textContent += text.charAt(index);

                index++;

                /*
                    NO automatic scrolling.
                    The reader controls scrolling manually.
                */

                setTimeout(typeCharacter, typingSpeed);

            } else {

                setTimeout(resolve, paragraphPause);

            }
        }

        typeCharacter();

    });
}


/*
    Start the message
*/

async function startMessage() {

    for (const paragraph of message) {

        await typeParagraph(paragraph);

    }

    /*
        Message finished
    */

    cursor.style.animation = "blink 1s infinite";
}

const continueBtn = document.getElementById("continueBtn");
const intro = document.getElementById("intro");
const messagePage = document.getElementById("messagePage");

continueBtn.addEventListener("click", () => {

    intro.style.display = "none";
    messagePage.style.display = "block";

    startMessage();

});
