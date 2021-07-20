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
        newRow.insertCell(0).innerHTML = display_schools[school].nickname;
        newRow.insertCell(1).innerHTML = display_schools[school].SATh;
        newRow.insertCell(2).innerHTML = display_schools[school].SATl;
        newRow.insertCell(3).innerHTML = display_schools[school].tuition;
    }
    format(college_table);
}
function deleteTableRows(start, end, table) {
    for (var i = start; i < end; i++) {
        table.deleteRow(start);
    }
}
function format(college_table) {
    var college_rows = document.getElementsByClassName("zebra");

    for (var i = 0; i < college_rows.length; i++) {
        college_rows[i].style.borderLeft = "1px solid black";
        college_rows[i].style.borderRight = "1px solid black";
    }
}
function readInputs() {
    var school_types = document.getElementsByName('school_type');
    var chosenSchoolType;
    for (var i = 0; i < school_types.length; i++) {
        if (school_types[i].checked) {
            chosenSchoolType = school_types[i];
        }
    }


}
function search() {

}