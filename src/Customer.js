class Customer {
  constructor(age, weight, height, activityLevel, goal) {
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.activityLevel = activityLevel;
    this.goal = goal;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    if (age < 0 || age > 150) {
      throw new Error('Age must be between 0 and 150');
    }
    this.age = age;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    if (weight <= 0 || weight > 1000) {
      throw new Error('Weight must be between 0 and 1000 kg');
    }
    this.weight = weight;
  }

  getHeight() {
    return this.height;
  }

  setHeight(height) {
    if (height <= 0 || height > 300) {
      throw new Error('Height must be between 0 and 300 cm');
    }
    this.height = height;
  }

  getActivityLevel() {
    return this.activityLevel;
  }

  setActivityLevel(activityLevel) {
    const validLevels = ['sedentary', 'lightly active', 'moderately active', 'very active', 'extremely active'];
    if (!validLevels.includes(activityLevel.toLowerCase())) {
      throw new Error('Activity level must be one of: ' + validLevels.join(', '));
    }
    this.activityLevel = activityLevel.toLowerCase();
  }

  getGoal() {
    return this.goal;
  }

  setGoal(goal) {
    this.goal = goal;
  }

  calculateBMI() {
    const heightInMeters = this.height / 100;
    return this.weight / (heightInMeters * heightInMeters);
  }

  getBMICategory() {
    const bmi = this.calculateBMI();
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }

  getActivityMultiplier() {
    const multipliers = {
      'sedentary': 1.2,
      'lightly active': 1.375,
      'moderately active': 1.55,
      'very active': 1.725,
      'extremely active': 1.9
    };
    return multipliers[this.activityLevel] || 1.2;
  }

  calculateDailyCalories() {
    const isMale = true;
    const baseCalories = isMale 
      ? (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5
      : (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161;
    
    return Math.round(baseCalories * this.getActivityMultiplier());
  }

  getInfo() {
    return {
      age: this.age,
      weight: this.weight,
      height: this.height,
      activityLevel: this.activityLevel,
      goal: this.goal,
      bmi: this.calculateBMI(),
      bmiCategory: this.getBMICategory(),
      estimatedDailyCalories: this.calculateDailyCalories()
    };
  }

  updateInfo(updates) {
    if (updates.age !== undefined) this.setAge(updates.age);
    if (updates.weight !== undefined) this.setWeight(updates.weight);
    if (updates.height !== undefined) this.setHeight(updates.height);
    if (updates.activityLevel !== undefined) this.setActivityLevel(updates.activityLevel);
    if (updates.goal !== undefined) this.setGoal(updates.goal);
  }
}

export default Customer;
