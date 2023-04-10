import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "moment/locale/sv";
import { ABSENCE_TYPE } from "../constants/index";

export const controlAnAbsence = (absence) => {
  const fromDate = moment(absence.dateTimeFrom);
  const toDate = moment(absence.dateTimeTo);
  const isFromDateStartOfDay = fromDate.isSame(fromDate.clone().startOf("day"));
  const isToDateEndOfDay = toDate.isSame(
    toDate.clone().set("hour", 23).set("minute", 59).set("second", 59)
  );
  const isFullDay = isFromDateStartOfDay && isToDateEndOfDay;
  const isUntilFurther = !toDate.isValid();
  const isSeveralDays = fromDate.isSame(toDate, "day") ? false : true;
  let absType = "";
  if (isUntilFurther) {
    if (isFromDateStartOfDay) {
      absType = ABSENCE_TYPE.UNTIL_FURTHER;
    } // TODO what if not ?
  } else if (isSeveralDays) {
    if (isFromDateStartOfDay && isToDateEndOfDay) {
      absType = ABSENCE_TYPE.SEVERAL_FULL_DAYS;
    } else {
      absType = ABSENCE_TYPE.PART_TIMES_IN_SEVERAL_DAYS;
    }
  } else if (isFullDay) {
    absType = ABSENCE_TYPE.ONE_DAY;
  } else {
    absType = ABSENCE_TYPE.PART_TIME;
  }
  const abs = {
    id: uuidv4(),
    firstName: absence.firstName,
    lastName: absence.lastName,
    fromDate: fromDate,
    toDate: toDate,
    reasonGuid: absence.reasonGuid,
    absenceType: absType,
  };
  return abs;
};
