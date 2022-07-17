import { constantCase } from "change-case";

export const transformMainResidentDetailsPayload = (data) => {
  return {
    country_id: data?.country?.id,
    nationality_id: data?.nationality?.id,
    title: constantCase(data?.title?.name),
    first_name: data?.firstName,
    middle_name: data?.lastName,
    last_name: data?.middleName,
    other_names: data?.otherNames,
    civil_status: constantCase(data?.civilStatus?.name),
    gender: constantCase(data?.gender?.name),
    date_of_birth: data?.dateOfBirth,
    telephone_code: data?.telephoneCode,
    mobile_number: data?.telephoneNumber,
    email: data?.email,
    nic_number: data?.nicNumber,
    passport_number: data?.passportNumber,
    passport_issued_date: data?.passportIssuenceDate,
    passport_expiry_date: data?.passportExpiryDate,
  };
};

export const transformMainResidentFamilyMemberDetailsPayload = (data) => {
  return {
    relationship_id: data.relationship.id,
    country_id: data.country.id,
    nationality_id: data.nationality.id,
    title: constantCase(data.title.name),
    first_name: data.firstName,
    middle_name: data.middleName,
    last_name: data.lastName,
    other_names: data.otherNames,
    civil_status: constantCase(data.civilStatus.name),
    gender: constantCase(data.gender.name),
    date_of_birth: data.dateOfBirth,
    telephone_code: data.telephoneCode,
    mobile_number: data.telephoneNumber,
    email: data.email,
    nic_number: data?.nicNumber,
    passport_number: data.passportNumber,
    passport_issued_date: data.passportIssuenceDate,
    passport_expiry_date: data.passportExpiryDate,
  };
};

export const getTitleObject = (title) => {
  switch (title) {
    case "MR":
      return { id: 1, name: "Mr" };
    case "MRS":
      return { id: 2, name: "Mrs" };
    case "MS":
      return { id: 3, name: "Miss" };
    default:
      return { id: 1, name: "Mr" };
  }
};

export const getCivilStatusObject = (civilStatus) => {
  switch (civilStatus) {
    case "SINGLE":
      return { id: 1, name: "Single" };
    case "MARRIED":
      return { id: 2, name: "Married" };
    default:
      return { id: 1, name: "Single" };
  }
};

export const getGenderObject = (gender) => {
  switch (gender) {
    case "MALE":
      return { id: 1, name: "Male" };
    case "FEMALE":
      return { id: 2, name: "Female" };
    default:
      return { id: 1, name: "Male" };
  }
};

export const tranformPayloadForSetExistingResidentData = (data) => {
  return {
    country: data.Country,
    nationality: data.Nationality,
    title: getTitleObject(data.title),
    firstName: data?.first_name,
    middleName: data?.middle_name,
    lastName: data?.last_name,
    otherNames: data?.other_names,
    civilStatus: getCivilStatusObject(data?.civil_status),
    gender: getGenderObject(data?.gender),
    dateOfBirth: data?.date_of_birth,
    telephoneCode: data?.telephone_code,
    telephoneNumber: data?.mobile_number,
    email: data?.email,
    nicNumber: data?.nic_number,
    passportNumber: data?.passport_number,
    passportIssuenceDate: data?.passport_issued_date,
    passportExpiryDate: data?.passport_expiry_date,
  };
};
