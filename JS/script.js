//console.log('test_JS');

ajoutCompetences("languages","HTML","5");
ajoutCompetences("languages","CSS","5");
ajoutCompetences("languages","JavaScript","4");
ajoutCompetences("languages","C#","4");
ajoutCompetences("languages","PHP","4");
ajoutCompetences("languages","C++","3");
ajoutCompetences("languages","MySQL","3");
ajoutCompetences("languages","C","3");
ajoutCompetences("languages","Java","2");
ajoutCompetences("languages","Angular","1");

ajoutCompetences("logiciels","Oracle VM VirtualBox","5");
ajoutCompetences("logiciels","FileZilla","5");
ajoutCompetences("logiciels","WordPress","5");
ajoutCompetences("logiciels","GitHub","4");
ajoutCompetences("logiciels","Visual Studio","4");
ajoutCompetences("logiciels","Cisco Packet Tracer","2");
ajoutCompetences("logiciels","DBeaver","2");
ajoutCompetences("logiciels","Eclipse Java","2");
ajoutCompetences("logiciels","Angular & Node.js","1");


ajoutCompetences("systemes","Serveur Linux","3");

ajoutCompetences("bureautique","Word","5");
ajoutCompetences("bureautique","Excel & Macros (VBA)","5");
ajoutCompetences("bureautique","PowerPoint","5");

ajoutCompetences("notation2","TEST1","4");
ajoutCompetences("notation2","TEST2","5");




function ajoutCompetences(id,nom,nb)
{
    document.getElementById(id).innerHTML += "<li>"+nom+"</li>";
    id +="-notes";
    ajoutNiveau(id,nb);
}

function ajoutNiveau(id,nb)
{
    switch (nb) {
        case '1':
            document.getElementById(id).innerHTML += "<div><input type=\"checkbox\" id=\"check_1\" checked disabled><input type=\"checkbox\" id=\"check_2\" disabled><input type=\"checkbox\" id=\"check_3\" disabled><input type=\"checkbox\" id=\"check_4\" disabled><input type=\"checkbox\" id=\"check_5\" disabled></div>";
          break;
        case '2':
            document.getElementById(id).innerHTML += "<div><input type=\"checkbox\" id=\"check_1\" checked disabled><input type=\"checkbox\" id=\"check_2\" checked disabled><input type=\"checkbox\" id=\"check_3\" disabled><input type=\"checkbox\" id=\"check_4\" disabled><input type=\"checkbox\" id=\"check_5\" disabled></div>";
          break;
        case '3':
            document.getElementById(id).innerHTML += "<div><input type=\"checkbox\" id=\"check_1\" checked disabled><input type=\"checkbox\" id=\"check_2\" checked disabled><input type=\"checkbox\" id=\"check_3\" checked disabled><input type=\"checkbox\" id=\"check_4\" disabled><input type=\"checkbox\" id=\"check_5\" disabled></div>";
          break;
        case '4':
            document.getElementById(id).innerHTML += "<div><input type=\"checkbox\" id=\"check_1\" checked disabled><input type=\"checkbox\" id=\"check_2\" checked disabled><input type=\"checkbox\" id=\"check_3\" checked disabled><input type=\"checkbox\" id=\"check_4\" checked disabled><input type=\"checkbox\" id=\"check_5\" disabled></div>";
          break;
        case '5':
            document.getElementById(id).innerHTML += "<div><input type=\"checkbox\" id=\"check_1\" checked disabled><input type=\"checkbox\" id=\"check_2\" checked disabled><input type=\"checkbox\" id=\"check_3\" checked disabled><input type=\"checkbox\" id=\"check_4\" checked disabled><input type=\"checkbox\" id=\"check_5\" checked disabled></div>";
          break;
        default:
            document.getElementById(id).innerHTML += "<div><input type=\"checkbox\" id=\"check_1\" disabled><input type=\"checkbox\" id=\"check_2\" disabled><input type=\"checkbox\" id=\"check_3\" disabled><input type=\"checkbox\" id=\"check_4\" disabled><input type=\"checkbox\" id=\"check_5\" disabled></div>";
            console.log('FAIL -> ajoutNiveau -> pas bon.');
    }

}

