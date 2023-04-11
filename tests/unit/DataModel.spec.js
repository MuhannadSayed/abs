import { refactorAnAbs } from "../../src/models/DataModel";
import { MOCK_DATA_FOR_TEST } from "../../src/constants/index";

describe("refactorAnAbs", () => {
  test("should format a single-day absence with full day", () => {
    const result = refactorAnAbs(MOCK_DATA_FOR_TEST.ONE_DAY_CASE);

    expect(result.absName).toBe("Emma Testson");
    expect(result.fullFormated).toBe("Måndag 1 februari");
    expect(result.shortFormated).toBe("Måndag 1 februari");
    expect(result.reason).toBe("Sjuk");
    expect(result.absType).toBe("oneDay");
  });
  test("should format a multiple-days absence without full times", () => {
    const result = refactorAnAbs(
      MOCK_DATA_FOR_TEST.PART_TIMES_IN_SEVERAL_DAYS_CASE
    );

    expect(result.absName).toBe("Maria Testson");
    expect(result.fullFormated).toBe(
      "Måndag 1 november 09:00 - Onsdag 10 november 14:55"
    );
    expect(result.shortFormated).toBe("Mån 1 nov 09:00 - Ons 10 nov 14:55");
    expect(result.reason).toBe("");
    expect(result.absType).toBe("partTimesInSeveralDays");
  });
});
