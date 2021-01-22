function constructionCrew(object) {
    if(object.dizziness) {
        object.levelOfHydrated += (object.weight * 0.1 * object.experience);
        object.dizziness = false;
    }
    return object;
}

constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  )