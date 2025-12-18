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
    const prefix = faker.helpers.arrayElement(['98', '97']);
    const remaining = faker.string.numeric(8); // Generate 8 digits
    return prefix + remaining;
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