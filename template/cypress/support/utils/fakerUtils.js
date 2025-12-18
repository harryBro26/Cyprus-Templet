import { faker } from "@faker-js/faker"

// ====================================================================
// FAKER DATA GENERATION UTILITIES
// ====================================================================
export default class FakerUtils {

    // --- Name / Personal ---

    getFirstName() {
        return faker.person.firstName();
    }
    getMiddleName() {
        return faker.person.middleName();
    }

    getLastName() {
        return faker.person.lastName();
    }

    getFullName() {
        return faker.person.fullName();
    }

    getJobTitle() {
        return faker.person.jobTitle();
    }

    // --- Contact / Internet ---

    getEmail() {
        return faker.internet.email();
    }

    getUsername() {
        return faker.internet.userName();
    }

    getPassword() {
        return faker.internet.password();
    }

    getPhoneNumber() {
        // Updated to use current Faker method
        return faker.phone.number('###-###-####');
    }

    getWebsite() {
        return faker.internet.url();
    }

    // --- Address / Location ---

    getCity() {
        return faker.location.city();
    }

    getCountry() {
        return faker.location.country();
    }

    getFullAddress() {
        return faker.location.streetAddress() + ', ' + faker.location.city() + ', ' + faker.location.country();
    }

    // --- Business / Finance ---

    getCompanyName() {
        return faker.company.name();
    }

    // --- Numbers / Misc ---

    getRandomNumber(min = 0, max = 1000) {
        return faker.number.int({ min, max });
    }
}