class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  };
};

class Route {
  constructor(startLocation, endLocation){
    this.startLocation = startLocation;
    this.endLocation = endLocation;
  };
  blocksTravelled(){

  };
};
