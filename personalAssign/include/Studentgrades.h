#include <iostream>
#include <string>

using namespace std;



class Studentgrades{
    private:
       int noOfStudent;
    int best=80;
    int score=0;
    public:
    Studentgrades();
     int getNoOfStudents(){
     cin>>noOfStudent;
     return noOfStudent;
     }
    void  calculatinggrades();

};


