
/* -----------------------Getting Name -----------------*/
function myName()
{
    var myname = document.getElementById('name').value;
    document.getElementById('name').remove();
    document.getElementById('nname').innerHTML =myname;

}

/* -----------------------Getting DOB -----------------*/
function myDOB()
{
    var mydob = document.getElementById('DOB').value;
    document.getElementById('DOB').remove();
    document.getElementById('ndob').innerHTML = mydob;

}

/* -----------------------Getting School Name -----------------*/
function mySchool()
{
    var myschool = document.getElementById('school').value;
    document.getElementById('school').remove();
    document.getElementById('nschool').innerHTML = myschool; 

}

/* ---------------------converting grade into GPA----------------*/
function gradepoint(mygrade)
{
    if(mygrade == 'A+')
    {
        return 4;
    }

    else if(mygrade == 'A')
    {
        return 3.6;
    }

     else if(mygrade == 'B+')
    {
        return 3.2;
    }

     else if(mygrade == 'B')
    {
        return 2.8;
    }

     else if(mygrade == 'C+')
    {
        return 2.4;
    }

     else if(mygrade == 'C')
    {
        return 2.0;
    }

     else if(mygrade == 'D+')
    {
        return 1.6;
    }

    else
    {
        return 0;
    }
}

/* -------------------Grade Check-------------------*/
function checkgrade(mygrade)
{
    var error_msg = "NULL"
    if(mygrade == 'A+' || mygrade == 'A' || mygrade == 'B+' || mygrade == 'B' || mygrade == 'C+' || mygrade == 'C' || mygrade == 'D+')
    {
        return mygrade;
    }
    else
    {
        return error_msg;
    }
}


/* ---------------------converting GPA into Grade----------------*/
function tograde(mygrade)
{
    var error_msg = "NG";
    if(mygrade> 3.6 || mygrade == 4)
    {
        return 'A+';
    }

    else if(mygrade> 3.2 || mygrade == 3.6)
    {
        return 'A';
    }

     else if(mygrade> 2.8 || mygrade == 3.2)
    {
        return 'B+';
    }

     else if(mygrade> 2.4 || mygrade == 2.8)
    {
        return 'B'
    }

     else if(mygrade> 2.0 || mygrade == 2.4)
    {
        return 'C+';
    }

     else if(mygrade > 1.6 || mygrade == 2.0)
    {
        return 'C';
    }

     else if(mygrade <= 1.6)
    {
        return 'D+';
    }

    else
    {
        return error_msg;
    }
}

/* -------------------Grade Check-------------------*/
function checkgrade(mygrade)
{
    var error_msg = "NULL"
    if(mygrade == 'A+' || mygrade == 'A' || mygrade == 'B+' || mygrade == 'B' || mygrade == 'C+' || mygrade == 'C' || mygrade == 'D+')
    {
        return mygrade;
    }
    else
    {
        return error_msg;
    }
}

/* --------------------Final Grade-------------------------*/
function finalgrade(theorycredithour,theorygpa,praticalcredithour,praticalgpa)
{
    var gpacalculation = ((theorycredithour * theorygpa) + (praticalcredithour * praticalgpa))/(theorycredithour + praticalcredithour);
    var myfinalgrade = tograde(gpacalculation);    
    return myfinalgrade;                                                                                                         
}


/*----------------- Nepali Grade----------------------------------- */
    var mynepalithch = 2.25;
    var mynepaliprach = 0.75;
    var mynepalipragpa = 4.0
    var mynepalifinalgpa;
 function nepalical()
{
    var mynepaligrade = document.getElementById('nepalivalue').value;           //accepting grade 
    
    mynepaligrade = mynepaligrade.toUpperCase();                                //capatilizating grade 
    
    mynepaligrade = checkgrade(mynepaligrade);                                  //checking if given grade is correct
    var mynepaligpa = gradepoint(mynepaligrade);                                //converting grade to gpa 
    
    var mynepalifinalgrade = finalgrade(mynepalithch, mynepaligpa, mynepaliprach, mynepalipragpa);              //calculating my final grade 
         mynepalifinalgpa = gradepoint(mynepalifinalgrade);
    
    document.getElementById('nepaligpa').innerHTML = mynepaligpa;               //displying gpa 
    document.getElementById('nepaligrade').innerHTML = mynepaligrade;           //displying grade
    document.getElementById('nepalifinalgrade').innerHTML = mynepalifinalgrade;

}


/*----------------- English Grade----------------------------------- */
    var myenglishthch = 3.00;
    var myenglishprach = 1.00;
    var myenglishpragpa = 4.0
    var myenglishfinalgpa;

 function englishcal ()
{
    var myenglishgrade = document.getElementById('englishvalue').value;             //accepting grade
   
    myenglishgrade = myenglishgrade.toUpperCase();                                  //capatilizating grade 
    
    myenglishgrade = checkgrade(myenglishgrade);                                    //checking if given grade is correct
    var myenglishgpa = gradepoint(myenglishgrade);                                  //converting grade to gpa 
    
    var myenglishfinalgrade = finalgrade(myenglishthch, myenglishgpa, myenglishprach, myenglishpragpa); 
         myenglishfinalgpa = gradepoint(myenglishfinalgrade);

    
    document.getElementById('englishgpa').innerHTML = myenglishgpa;                 //displying gpa 
    document.getElementById('englishgrade').innerHTML = myenglishgrade;             //displying grade
    document.getElementById('englishfinalgrade').innerHTML = myenglishfinalgrade;

}


/*----------------- Maths Grade----------------------------------- */
    var mymaththch = 3.75;
    var mymathprach = 1.25;
    var mymathpragpa = 4.0
    var mymathfinalgpa;

 function mathcal ()
{
    var mymathgrade = document.getElementById('mathvalue').value;             //accepting grade
   
    mymathgrade = mymathgrade.toUpperCase();                                  //capatilizating grade 
    
    mymathgrade = checkgrade(mymathgrade);                                    //checking if given grade is correct
    var mymathgpa = gradepoint(mymathgrade);                                  //converting grade to gpa 
   
    var mymathfinalgrade = finalgrade(mymaththch, mymathgpa, mymathprach, mymathpragpa); 
         mymathfinalgpa = gradepoint(mymathfinalgrade);
    
    document.getElementById('mathgpa').innerHTML = mymathgpa;               //displying gpa 
    document.getElementById('mathgrade').innerHTML = mymathgrade;           //displying grade
    document.getElementById('mathfinalgrade').innerHTML = mymathfinalgrade;

}


/*----------------- Physics Grade----------------------------------- */
    var myphysicsthch = 3.75;
    var myphysicsprach = 1.25;
    var myphysicspragpa = 4.0
    var myphysicsfinalgpa;
function physicscal ()
{
    var mymathgrade = document.getElementById('physicsvalue').value;             //accepting grade
   
    mymathgrade = mymathgrade.toUpperCase();                                  //capatilizating grade 
    
    mymathgrade = checkgrade(mymathgrade);                                    //checking if given grade is correct
    var myphysicsgpa = gradepoint(mymathgrade);                                  //converting grade to gpa 
   
    var myphysicsfinalgrade = finalgrade(myphysicsthch, myphysicsgpa, myphysicsprach, myphysicspragpa); 
         myphysicsfinalgpa = gradepoint(myphysicsfinalgrade);

    document.getElementById('physicsgpa').innerHTML = myphysicsgpa;               //displying gpa 
    document.getElementById('physicsgrade').innerHTML = mymathgrade;           //displying grade
    document.getElementById('physicsfinalgrade').innerHTML = myphysicsfinalgrade;

}

/*----------------- Chemistry Grade----------------------------------- */
    var mychemistrythch = 3.75;
    var mychemistryprach = 1.25;
    var mychemistrypragpa = 4.0
    var mychemistryfinalgpa;
function chemistrycal ()
{
    var mychemistrygrde = document.getElementById('chemistryvalue').value;             //accepting grade
   
    mychemistrygrde = mychemistrygrde.toUpperCase();                                  //capatilizating grade 
    
    mychemistrygrde = checkgrade(mychemistrygrde);                                    //checking if given grade is correct
    var mychemistrygpa = gradepoint(mychemistrygrde);                                  //converting grade to gpa 
    
    var mychemistryfinalgrade = finalgrade(mychemistrythch, mychemistrygpa, mychemistryprach, mychemistrypragpa);
        mychemistryfinalgpa = gradepoint(mychemistryfinalgrade);

    
    document.getElementById('chemistrygpa').innerHTML = mychemistrygpa;               //displying gpa 
    document.getElementById('chemistrygrade').innerHTML = mychemistrygrde;           //displying grade
    document.getElementById('chemistryfinalgrade').innerHTML = mychemistryfinalgrade;

}

/*----------------- Computer Grade----------------------------------- */
    var mycomputerthch = 2.50;
    var mycomputerprach = 2.50;
    var mycomputerpragpa = 4.0
    var mycomputerfinalgpa;

function computercal()
{

    var mycomputergrade = document.getElementById('computervalue').value;             //accepting grade
   
    mycomputergrade = mycomputergrade.toUpperCase();                                  //capatilizating grade 
    
    mycomputergrade = checkgrade(mycomputergrade);                                    //checking if given grade is correct
    var mycomputergpa = gradepoint(mycomputergrade);                                  //converting grade to gpa 
  
    var mycomputerfinalgrade = finalgrade(mycomputerthch, mycomputergpa, mycomputerprach, mycomputerpragpa);
    mycomputerfinalgpa = gradepoint(mycomputerfinalgrade);
    
    document.getElementById('computergpa').innerHTML = mycomputergpa;               //displying gpa 
    document.getElementById('computergrade').innerHTML = mycomputergrade;           //displying grade
    document.getElementById('computerfinalgrade').innerHTML = mycomputerfinalgrade;

}


// final GPA
document.getElementById('calculatetotalgpa').onclick = function ()
{
    var total = gpacalculation();

    document.getElementById('finalgpa').innerHTML = total;
    document.getElementById('calculatetotalgpa').remove();
}

// Calculating final GPA calculation
function gpacalculation()
{
    var neplaitotalch = mynepalithch + mynepaliprach;
    var englishtotalch = myenglishthch + myenglishprach;
    var mathtotalch = mymaththch + mymathprach;
    var physicstotalch = myphysicsthch + myphysicsprach;
    var chemistrytotalch = mychemistrythch + mychemistryprach;
    var computertotalch = mycomputerthch + mycomputerprach;

    var totalgpa = (mynepalifinalgpa * neplaitotalch) + (myenglishfinalgpa * englishtotalch) + (mymathfinalgpa * mathtotalch) + (myphysicsfinalgpa * physicstotalch) + (mychemistryfinalgpa * chemistrytotalch) + (mycomputerfinalgpa * computertotalch);

    finalgpa = totalgpa/27;
    finalgpa = finalgpa.toFixed(2);

    return finalgpa;
    
}