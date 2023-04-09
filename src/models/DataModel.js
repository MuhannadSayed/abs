import moment from "moment";
import "moment/locale/sv";
import { ABS_REASON } from "../constants";

const isSmallViewPort = document.documentElement.clientWidth <= 1024;
const capitalizeFirstLetter = (day) => {
  return day.charAt(0).toUpperCase() + day.slice(1);
};

const formatDateTime = (
  isUntilFurther,
  isFromDateStartOfDay,
  fromDate,
  isSeveralDays,
  isToDateEndOfDay,
  toDate,
  isFullDay
) => {
  if (isUntilFurther) {
    if (isFromDateStartOfDay) {
      return `${capitalizeFirstLetter(
        fromDate.format("dddd D MMMM")
      )} - Tillsvidare`;
    } else {
      return capitalizeFirstLetter(fromDate.format("dddd D MMMM HH:mm"));
    }
  } else if (isSeveralDays) {
    if (isFromDateStartOfDay && isToDateEndOfDay) {
      return `${capitalizeFirstLetter(
        fromDate.format("ddd D MMMM")
      )} - ${capitalizeFirstLetter(toDate.format("dddd D MMMM"))}`;
    } else {
      return `${capitalizeFirstLetter(
        fromDate.format(
          isSmallViewPort ? "ddd D MMM HH:mm" : "dddd D MMMM HH:mm"
        )
      )} - ${capitalizeFirstLetter(
        toDate.format(isSmallViewPort ? "ddd D MMM HH:mm" : "dddd D MMMM HH:mm")
      )}`;
    }
  } else if (isFullDay) {
    return capitalizeFirstLetter(fromDate.format("dddd D MMMM"));
  }

  return `${capitalizeFirstLetter(
    fromDate.format("dddd D MMMM HH:mm")
  )} - ${capitalizeFirstLetter(toDate.format("HH:mm"))}`;
};
export const refactorAbs = (fetchedAbsences) => {
  const listOfAbs = [];
  fetchedAbsences.forEach((element) => {
    const fromDate = moment(element.dateTimeFrom);
    const toDate = moment(element.dateTimeTo);
    const isFromDateStartOfDay = fromDate.isSame(
      fromDate.clone().startOf("day")
    );
    const isToDateEndOfDay = toDate.isSame(
      toDate.clone().set("hour", 23).set("minute", 59).set("second", 59)
    );
    const isFullDay = isFromDateStartOfDay && isToDateEndOfDay;
    const isUntilFurther = !toDate.isValid();
    const isSeveralDays = fromDate.isSame(toDate, "day") ? false : true;

    const formatedDateTime = formatDateTime(
      isUntilFurther,
      isFromDateStartOfDay,
      fromDate,
      isSeveralDays,
      isToDateEndOfDay,
      toDate,
      isFullDay
    );
    /* console.log(
      "formatedDateTime",
      formatedDateTime,
      "isUntilFurther",
      isUntilFurther,
      "isFromDateStartOfDay",
      isFromDateStartOfDay,
      "fromDate",
      fromDate,
      "isSeveralDays",
      isSeveralDays,
      "isToDateEndOfDay",
      isToDateEndOfDay,
      "toDate",
      toDate,
      "isFullDay",
      isFullDay
    ); */

    const abs = {
      absName: `${element.firstName} ${element.lastName}`,
      absFormated: formatedDateTime,
      reason: ABS_REASON(element.reasonGuid),
    };
    listOfAbs.push(abs);
  });
  return listOfAbs;
};
