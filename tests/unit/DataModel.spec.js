import { refactorAbs } from "../../src/models/DataModel";

describe("refactorAbs", () => {
  test("should format a single-day absence with full day", () => {
    const fetchedAbsences = [
      {
        firstName: "Kalle",
        lastName: "Testson",
        dateTimeFrom: "2021-01-01 00:00:00",
        dateTimeTo: "2021-01-01 23:59:59",
        reasonGuid: "4d937b93-707a-4812-a2c5-227d23a5b3ac",
      },
    ];

    const result = refactorAbs(fetchedAbsences);

    expect(result).toHaveLength(1);
    expect(result[0].absName).toBe("Kalle Testson");
    expect(result[0].absFormated).toBe("Fredag 1 januari");
    expect(result[0].reason).toBe("Sjuk");
  });

  test("should format a multi-day absence without full days", () => {
    const fetchedAbsences = [
      {
        firstName: "Lisa",
        lastName: "Testson",
        dateTimeFrom: "2022-02-01T12:00:00Z",
        dateTimeTo: "2022-02-03T15:30:00Z",
        reasonGuid: "1c4464f2-34e0-427b-bb29-399665819dad",
      },
    ];

    const result = refactorAbs(fetchedAbsences);

    expect(result).toHaveLength(1);
    expect(result[0].absName).toBe("Lisa Testson");
    expect(result[0].absFormated).toBe("Tis 1 feb 13:00 - Tor 3 feb 16:30");
    expect(result[0].reason).toBe("Elevråd");
  });

  test("should format an until-further-notice absence", () => {
    const fetchedAbsences = [
      {
        firstName: "Johan",
        lastName: "Testson",
        dateTimeFrom: "2021-09-15 00:00:00",
        dateTimeTo: null,
        reasonGuid: "4e57e8ab-c67a-4f6f-90f6-f72bfec8b808",
      },
    ];

    const result = refactorAbs(fetchedAbsences);

    expect(result).toHaveLength(1);
    expect(result[0].absName).toBe("Johan Testson");
    expect(result[0].absFormated).toBe("Onsdag 15 september - Tillsvidare");
    expect(result[0].reason).toBe("Tandläkare");
  });

  test("should format an absence that spans multiple full days", () => {
    const fetchedAbsences = [
      {
        firstName: "Emma",
        lastName: "Testson",
        dateTimeFrom: "2021-03-01 00:00:00",
        dateTimeTo: "2021-03-02 23:59:59",
        reasonGuid: "blabla",
      },
    ];

    const result = refactorAbs(fetchedAbsences);

    expect(result).toHaveLength(1);
    expect(result[0].absName).toBe("Emma Testson");
    expect(result[0].absFormated).toBe("Mån 1 mars - Tisdag 2 mars");
    expect(result[0].reason).toBe("");
  });
});
