import { absences } from "../data";
export const ABS_REASON = (guid) => {
  if (guid == "4d937b93-707a-4812-a2c5-227d23a5b3ac") return "Sjuk";
  if (guid == "1c4464f2-34e0-427b-bb29-399665819dad") return "Elevråd";
  if (guid == "4e57e8ab-c67a-4f6f-90f6-f72bfec8b808") return "Tandläkare";

  return "";
};

export const ABSENCE_TYPE = {
  PART_TIME: "partTime",
  SEVERAL_FULL_DAYS: "severalFullDays",
  ONE_DAY: "oneDay",
  UNTIL_FURTHER: "untilFurther",
  PART_TIMES_IN_SEVERAL_DAYS: "partTimesInSeveralDays",
};

export const MOCK_DATA_FOR_TEST = {
  PART_TIME_CASE: {
    firstName: "Isak",
    lastName: "Testson",
    reasonGuid: "4e57e8ab-c67a-4f6f-90f6-f72bfec8b808",
    dateTimeFrom: "2021-01-01 09:00",
    dateTimeTo: "2021-01-01 13:00",
  },
  SEVERAL_FULL_DAYS_CASE: {
    firstName: "Karl",
    lastName: "Testson",
    reasonGuid: "1c4464f2-34e0-427b-bb29-399665819dad",
    dateTimeFrom: "2021-03-02 00:00:00",
    dateTimeTo: "2021-03-05 23:59:59",
  },
  ONE_DAY_CASE: {
    firstName: "Emma",
    lastName: "Testson",
    reasonGuid: "4d937b93-707a-4812-a2c5-227d23a5b3ac",
    dateTimeFrom: "2021-02-01 00:00:00",
    dateTimeTo: "2021-02-01 23:59:59",
  },
  UNTIL_FURTHER_CASE: {
    firstName: "Lisa",
    lastName: "Testsen",
    reasonGuid: "1c4464f2-34e0-427b-bb29-399665819dad",
    dateTimeFrom: "2021-10-15 00:00:00",
    dateTimeTo: null,
  },
  PART_TIMES_IN_SEVERAL_DAYS_CASE: {
    firstName: "Maria",
    lastName: "Testson",
    reasonGuid: null,
    dateTimeFrom: "2021-11-01 09:00:00",
    dateTimeTo: "2021-11-10 14:55:00",
  },
};
