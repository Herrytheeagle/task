! A fortran95 program for G95
! By WQY
     program SIMULT
     implicit none
     !coded by EMMY O
     real a,b,c,d,e,f,x,y
     write(*,*)"NAME:OSIN EMMANUEL.O"
     write(*,*)"DEPT:PHYSICS ELECTRONICS"
     write(*,*)"MATRIC NUMBER:F140305002"
     write(*,*)"LEVEL:200 Level"
     write(*,*)".........PROGRAM SIMULTANEOUS EQUATION  STARTS NOW........."
         print*,"Enter the value for a"
      read*, a
        print*,"Enter the value for b"
       read*, b
     print*,"Enter the value for c"
      read*, c
     print*,"Enter the value for d"
     read*, d
    print*,"Enter the value for e"
     read*, e
     print*,"Enter the value for f"
     read*, f

  y=(c*d)+(a*f)/(b*d)+(a*e)
  x=(c*e)+(b*f)/(b*d)+(a*e)

     print*,"The value for x is ", x
   print*,"The value for y is ", y
   print*,"......THAT IS ALL OOOO........"
end PROGRAM SIMULT
