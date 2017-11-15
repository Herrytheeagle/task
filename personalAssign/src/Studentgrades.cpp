#include <iostream>
#include <string>
#include "../include/Studentgrades.h";
using namespace std;



Studentgrades::Studentgrades(){}

  void Studentgrades::calculatinggrades(){
cout<<"ENTER THE TOTAL NUMBER OF STUDENT NOW."<<endl;
      Studentgrades::getNoOfStudents();
    for(int i=0;i<noOfStudent;i++){
      cout<<"ENTER THE SCORE FOR THE TOTAL NUMBER OF STUDENT ENTERED"<<endl;
      cin>>score;
      if(score >100)
        cout <<"Sorry Abnormal Score Input. Are you trying to cheat?"<<endl;
    else if(score >=(best-10))
        cout<<"Grade is A"<<endl;
     else if(score >=(best-20))
        cout <<"Grade is B"<<endl;
     else if(score >=(best-30))
        cout <<"Grade is C"<<endl;
     else if(score >=(best-40))
        cout <<"Grade is D"<<endl;
     else
        cout <<"grade is F"<<endl;
}
}
