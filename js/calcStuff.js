 function ConvertGPA(form) {
    var temp;

    if ((form.oldgpa.value == null || form.oldgpa.value.length == 0)) {
      return;
    }

    if (!checkNumber(form.oldgpa, 0, 11, "oldgpa")) {
      form.oldgpa.value = "Invalid";
      return;
    }

    temp    = eval(form.oldgpa.value)/(eval(form.scale.value));
    temp2 = parseFloat(Math.round((temp * 4) * 100) / 100).toFixed(2);
    form.ngpa.value = temp2;
  }

  function checkNumber(input, min, max, msg) {
    msg = msg + " field has invalid data: " + input.value;

    var str = input.value;

    for (var i = 0; i < str.length; i++) {
      var ch = str.substring(i, i + 1)
      if ((ch < "0" || "9" < ch) && ch != '.') {
        alert(msg);
        return false;
      }
    }

    var num = 0 + str;

    if (num < min || max < num) {
      alert(msg + " not in range [" + min + ".." + max + "]");
      return false;
    }

    input.value = str;
    return true;
  }

  function computeGradenum2(input) {
    var gradenum=input;

    var thegrade=input;

    if (thegrade=="A"  || thegrade=="a") gradenum=4;

    if (thegrade=="A-" || thegrade=="a-") gradenum=3.67;

    if (thegrade=="B+"  || thegrade=="b+") gradenum=3.34;

    if (thegrade=="B" || thegrade=="b") gradenum=3;

    if (thegrade=="B-" || thegrade=="b-") gradenum=2.67;

    if (thegrade=="C+"  || thegrade=="c+") gradenum=2.34;

    if (thegrade=="C"  || thegrade=="c") gradenum=2;

    if (thegrade=="C-"  || thegrade=="c-") gradenum=1.67;

    if (thegrade=="D+"  || thegrade=="d+") gradenum=1.34;

    if (thegrade=="D" || thegrade=="d") gradenum=1;

    if (thegrade=="D-"  || thegrade=="d-") gradenum=.67;

    if (thegrade=="E" || thegrade=="e" ) gradenum=0;

    return gradenum;
  }


  function computeField(input) {
    if (input.value != null && input.value.length != 0)

    input.value = "" + eval(input.value);

    computeForm(input.form);
  }

  function computesumForm(form) {
    var formcount=6;
    var formnum =-1;
    for(i=0;formnum==-1;i++)
      if (document.forms[i] == form)
      formnum=i;
      //alert("found the form it's #"+formnum);

      document.forms[formnum].gradepoints.value=document.forms[formnum-(formcount+1)].gradepoints.value;

      document.forms[formnum].units.value=document.forms[formnum-(formcount+1)].units.value;;

      document.forms[formnum].grade.value=document.forms[formnum-(formcount+1)].grade.value;



      for(var i=formnum-formcount; i<formnum; i++) {

        if (!(document.forms[i].units.value == null || document.forms[i].units.value.length == 0)) {

        if (!(document.forms[i].units.value == null || document.forms[i].units.value.length == 0)) {

        var temp=computeField(document.forms[i].gradepoints);

        var temp=computeField(document.forms[i].units);

        var temp=computeForm(document.forms[i]);

        if (!(document.forms[i].gradepoints.value == 0))

        document.forms[formnum].gradepoints.value = eval(document.forms[formnum].gradepoints.value)+(eval(document.forms[i].gradepoints.value));    



        if (!(document.forms[i].units.value == 0))

        document.forms[formnum].units.value = eval(document.forms[formnum].units.value)+(eval(document.forms[i].units.value));    
      }
    }
  }

  //assigning a gpa for form #formnum, which is the big total at the bottom
  if (!(document.forms[formnum].units.value == 0))

  document.forms[formnum].grade.value=(eval(document.forms[formnum].gradepoints.value)/(eval(document.forms[formnum].units.value)));
  }