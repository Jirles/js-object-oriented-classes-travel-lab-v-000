class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };
  yearsExperienceFromBeginningOf(endDate){
    return endDate.year - this.startDate.year
  };
};
