import { ABSENCE_TYPE, ABS_REASON } from "../constants";
import { EventBus } from "../utils/event-bus";
import { controlAnAbsence } from "../controllers/DataCotroller";
import moment from "moment";
import "moment/locale/sv";

const capitalizeFirstLetter = (day) => {
  return day.charAt(0).toUpperCase() + day.slice(1);
};

export const refactorAnAbs = (absence) => {
  const controlledAbsence = controlAnAbsence(absence);
  const fromDate = moment(absence.dateTimeFrom);
  const toDate = moment(absence.dateTimeTo);
  let shortDate = "";
  let fullDate = "";

  if (controlledAbsence.absenceType == ABSENCE_TYPE.ONE_DAY) {
    shortDate = fullDate = capitalizeFirstLetter(
      fromDate.format("dddd D MMMM")
    );
  }
  if (controlledAbsence.absenceType == ABSENCE_TYPE.PART_TIME) {
    shortDate = fullDate = `${capitalizeFirstLetter(
      fromDate.format("dddd D MMMM HH:mm")
    )} - ${capitalizeFirstLetter(toDate.format("HH:mm"))}`;
  }
  if (
    controlledAbsence.absenceType == ABSENCE_TYPE.PART_TIMES_IN_SEVERAL_DAYS
  ) {
    shortDate = `${capitalizeFirstLetter(
      fromDate.format("ddd D MMM HH:mm")
    )} - ${capitalizeFirstLetter(toDate.format("ddd D MMM HH:mm"))}`;
    fullDate = `${capitalizeFirstLetter(
      fromDate.format("dddd D MMMM HH:mm")
    )} - ${capitalizeFirstLetter(toDate.format("dddd D MMMM HH:mm"))}`;
  }
  if (controlledAbsence.absenceType == ABSENCE_TYPE.SEVERAL_FULL_DAYS) {
    fullDate = `${capitalizeFirstLetter(
      fromDate.format("dddd D MMMM")
    )} - ${capitalizeFirstLetter(toDate.format("dddd D MMMM"))}`;
    shortDate = `${capitalizeFirstLetter(
      fromDate.format("ddd D MMM")
    )} - ${capitalizeFirstLetter(toDate.format("ddd D MMM"))}`;
  }
  if (controlledAbsence.absenceType == ABSENCE_TYPE.UNTIL_FURTHER) {
    shortDate = fullDate = `${capitalizeFirstLetter(
      fromDate.format("dddd D MMMM")
    )} - Tillsvidare`;
  }

  const abs = {
    id: controlledAbsence.id,
    absName: `${absence.firstName} ${absence.lastName}`,
    shortFormated: shortDate,
    fullFormated: fullDate,
    reason: ABS_REASON(absence.reasonGuid),
    absType: controlledAbsence.absenceType,
  };
  return abs;
};

export const detectScreenWidth = () => {
  const isWideScreen = window.innerWidth > 998;
  EventBus.$emit("screen-width-change", isWideScreen);
};
window.addEventListener("resize", detectScreenWidth);
