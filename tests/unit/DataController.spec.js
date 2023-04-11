import { MOCK_DATA_FOR_TEST } from "../../src/constants/index";
import { controlAnAbsence } from "../../src/controllers/DataCotroller";

describe("controlAnAbsence", () => {
  test("should return a multiple-days absence without full times", () => {
    const result = controlAnAbsence(
      MOCK_DATA_FOR_TEST.PART_TIMES_IN_SEVERAL_DAYS_CASE
    );

    expect(result.absenceType).toBe("partTimesInSeveralDays");
  });
  test("should return a part time absence ", () => {
    const result = controlAnAbsence(MOCK_DATA_FOR_TEST.PART_TIME_CASE);

    expect(result.absenceType).toBe("partTime");
  });
  test("should have the 'id' property in the absence object", () => {
    const result = controlAnAbsence(MOCK_DATA_FOR_TEST.ONE_DAY_CASE);

    expect(result).toHaveProperty("id");
  });
  test("should throw an error when called with invalid data", () => {
    const invalidData = {
      firstName: "Sam",
      toDate: "2025-04-13",
      reasonGuid: "123456",
    };

    expect(() => controlAnAbsence(invalidData)).toThrow();
  });
});
