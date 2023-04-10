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
