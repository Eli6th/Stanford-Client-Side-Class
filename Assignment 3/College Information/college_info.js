var univArray = new Array(
    {name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
    {name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
    {name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
    {name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
    {name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
    {name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
    {name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
    {name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
    {name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
    {name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
    );

function display(display_schools) {
    var college_table = document.getElementById("colleges_data");
    
    deleteTableRows(1, college_table.rows.length, college_table);
    for (var school = 0; school < display_schools.length; school++) {
        var newRow = college_table.insertRow(college_table.rows.length);
        newRow.classList.add('zebra');

        var nickname = newRow.insertCell(0);
        var SAT_high = newRow.insertCell(1);
        var SAT_low = newRow.insertCell(2);
        var tuition = newRow.insertCell(3);

        nickname.classList.add('college_point');
        SAT_high.classList.add('college_point');
        SAT_low.classList.add('college_point');
        tuition.classList.add('college_point');
        tuition.classList.add('price');

        nickname.innerHTML = display_schools[school].nickname;
        SAT_high.innerHTML = display_schools[school].SATh;
        SAT_low.innerHTML = display_schools[school].SATl;
        tuition.innerHTML = display_schools[school].tuition;
    }
}
function deleteTableRows(start, end, table) {
    for (var i = start; i < end; i++) {
        table.deleteRow(start);
    }
}

function compare(chosenSchoolType, max_tuition, SAT_high, SAT_low) {
    var display_schools = [];
    for (var i = 0; i < univArray.length; i++) {
        var shouldAdd = true;
        if (chosenSchoolType != undefined && chosenSchoolType != 'dc' && chosenSchoolType != univArray[i].ownership) {
            alert("Stopped 1");
            shouldAdd = false;
        }

        if (max_tuition != "" && max_tuition <= univArray[i].tuition) {
            alert("Stopped 2");
            shouldAdd = false;
        }
                
        if (SAT_high != "" && SAT_high <= univArray[i].SATh) {
            alert("Stopped 3");
            shouldAdd = false;
        }

        if (SAT_low != "" && SAT_low >= univArray[i].SATl) {
            alert("Stopped 4");
            shouldAdd = false;
        }
        
        if (shouldAdd) {
            display_schools.push(univArray[i]);
        }
    }

    return display_schools;
}

function search() {
    var school_types = document.getElementsByName('school_type');
    var chosenSchoolType;
    for (var i = 0; i < school_types.length; i++) {
        if (school_types[i].checked) {
            chosenSchoolType = school_types[i].id;
            alert(chosenSchoolType);
        }
    }

    var max_tuition = document.getElementById('max_tuition').value;
    var fMax_tuition = parseFloat(max_tuition);

    var SAT_high = document.getElementById('max_high_sat').value;
    var fSAT_high = parseFloat(SAT_high);

    var SAT_low = document.getElementById('max_low_sat').value;
    var fSAT_low = parseFloat(SAT_low);

    alert("Max tuition: " + max_tuition);
    alert("High SAT: " + SAT_high);
    alert("Low SATn: " + SAT_low);
    alert("School Type: " + chosenSchoolType);

    var display_schools = compare(chosenSchoolType, fMax_tuition, fSAT_high, fSAT_low);
    display(display_schools);
}