let userCategory = "Non-Subscriber";

switch (userCategory) {
    case "Non-Subscriber":
        console.log("You need to enroll or subscribe first to avail this facility");
        break;
    case "Subscriber":
        console.log("You have partial access to Dietary Services");
        break;
    case "Enrolled Member":
        console.log("You have one-on-one interaction with a dietician");
    case "Employee":
        console.log("You have full access to Dietary Services");
}