import { getCivilStatusObject, getGenderObject, getTitleObject } from "./residentUtils";

export const transformMainResidentFamilyMemberDefaultValues = (data) => {
  return {
    nationality: data?.Nationality || null,
    title: getTitleObject(data?.title),
    civilStatus: getCivilStatusObject(data?.civil_status),
    gender: getGenderObject(data?.gender),
    relationship: data?.Relationship || null,
    firstName: data?.first_name || null,
    middleName: data?.middle_name || null,
    lastName: data?.last_name || null,
    otherNames: data?.other_names || null,
    dateOfBirth: data?.date_of_birth || null,
    country: data?.Country || null,
    telephoneCode: data?.telephone_code || null,
    telephoneNumber: data?.mobile_number || null,
    email: data?.email || null,
    nicNumber: data?.nic_number || null,
    passportNumber: data?.passport_number || null,
    passportIssuenceDate: data?.passport_issued_date || null,
    passportExpiryDate: data?.passport_expiry_date || null,
  };
};
