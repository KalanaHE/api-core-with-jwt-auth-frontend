import { constantCase } from "change-case";
import { useSelector } from "react-redux";
import {
  selectBusinessType,
  selectCountriesList,
  selectCompanyList,
  selectCountry,
  selectCity,
  selectState,
  selectPortcityDistrict,
} from "../redux/selectors/commonSelector";
import { PendingIcon, SignedIcon } from "../assets/index";

export const transformMainBusinessDetailsPayload = (data) => {
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
    passport_number: data?.passportNumber,
    passport_issued_date: data?.passportIssuenceDate,
    passport_expiry_date: data?.passportExpiryDate,
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
      return null;
  }
};

export const getGenderObject = (gender) => {
  switch (gender) {
    case "MALE":
      return { id: 1, name: "Male" };
    case "FEMALE":
      return { id: 2, name: "Female" };
    default:
      return null;
  }
};

export const setCompanyType = (data) => {
  switch (data.id) {
    case 0:
      return "LOCAL_EXISTING";
    case 1:
      return "FORIEGN_EXISTING";
    default:
      return null;
  }
};

export const setObjectToString = (data) => {
  return data.name ? data.name : data;
};

export const setObjectToId = (data) => {
  return data.id ? data.id : data;
};

export const setCountryId = (data) => {
  return data.id ? data.id : data;
};

export const setPortalAccessValue = (data) => {
  if (data) {
    return "YES";
  } else {
    return "NO";
  }
};

export const setPortalAccessValueToBool = (data) => {
  // switch (data) {
  //   case "Yes":
  //     return true
  //   case "NO":
  //     return false
  //   default:
  //     return null
  // }
  if (data === "YES") {
    return true;
  } else if (data === "NO") {
    return false;
  } else {
    return null;
  }
};

export const setYesOrNoValue = (data) => {
  if (data === "0") {
    return "YES";
  } else if (data === "1") {
    return "NO";
  }
};

export const setStakeHolderType = (data) => {
  switch (data) {
    case "0":
      return "INDIVIDUAL";
    case "1":
      return "FIRM";
    default:
      return null;
  }
};

export const setStakeHolderTypeToId = (data) => {
  switch (data) {
    case "INDIVIDUAL":
      return "0";
    case "FIRM":
      return "1";
    default:
      return null;
  }
};

export const setStepToId = (data) => {
  switch (data) {
    case "APPLICANT_TYPE":
      return 0;
    case "SELECT_COMPANY":
      return 1;
    case "COMPANY_DETAIL":
      return 2;
    case "ADDING_STAKEHOLDERS":
      return 3;
    case "PREVIEW_AND_SUBMIT":
      return 4;
    default:
      return null;
  }
};

export const setStringValueToObject = (data, dataSet) => {
  let valueObject = null;
  dataSet?.map((value, index) => {
    if (data === value?.name) {
      valueObject = value;
    }
  });
  return valueObject;
};

export const setStringValueToObjectById = (data, dataSet) => {
  let valueObject = null;
  dataSet?.map((value, index) => {
    if (data === value?.id) {
      valueObject = value;
    }
  });
  return valueObject;
};

export const setCountryIdToObject = (data, dataSet) => {
  let valueObject = null;
  dataSet?.map((value, index) => {
    if (data === value?.id) {
      valueObject = value;
    }
  });
  return valueObject;
};

export const setCompanyTypeToObject = (data) => {
  switch (data) {
    case "LOCAL_EXISTING":
      return { id: 0, name: "Existing Local Company" };
    case "FORIEGN_EXISTING":
      return { id: 1, name: "Existing Foreign Company" };
    default:
      return null;
  }
};

export const setExistingStatusToId = (data) => {
  switch (data) {
    case "NO":
      return "1";
    case "YES":
      return "0";
    default:
      return null;
  }
};

export const setTitleObjectById = (data) => {
  switch (data) {
    case 1:
      return { id: 1, name: "Mr" };
    case 2:
      return { id: 2, name: "Mrs" };
    case 3:
      return { id: 3, name: "Miss" };
    default:
      return null;
  }
};

export const setStakeholderArray = (data) => {
  let dataArray = [];
  data?.map((data) => {
    const stakeholder = {
      id: data?.data?.id,
      firstName: data?.data?.first_name,
      lastName: data?.data?.surname,
      email: data?.data?.email,
      country: data?.data?.country_id?.country_name,
      sharePrecentage: data?.data?.shareholder_precentage,
      status: <PendingIcon />,
    };
    dataArray.push(stakeholder);
  });
  return dataArray;
};

export const getCreatedStakeholderData = (createdStakeholderList, updatingStakeholderId) => {
  const filteredData = createdStakeholderList?.find((value) => value?.data?.id === updatingStakeholderId);
  // return { ...filteredData?.data, ...filteredData?.local_address, ...filteredData?.overseas_address }
  return filteredData;
};

export const tranformPayloadForSetExistingBusinessData = (data) => {
  return {
    id: data?.email,
    company_name: data?.company_name,
    email: data?.email,
    fax_number: data?.fax_number,
    business_registration_number: data?.business_registration_number,
    status: data?.status,
    applicant_status: data?.applicant_status,
    existing_name_status: null,
    company_type: null,
    business_type: data?.business_type,
    created_at: data?.created_at,
    created_by: data?.created_by,
    last_modified_at: data?.last_modified_at,
    last_modified_by: data?.last_modified_by,
  };
};

export const tranformPayloadForMainBusinessDetails = (data) => {
  return {
    ...(data?.id && { id: data?.id }),
    ...(data?.company_name && { company_name: setObjectToString(data?.company_name) }),
    ...(data?.email && { email: data?.email }),
    ...(data?.fax_number && { fax_number: data?.fax_number }),
    ...(data?.business_registration_number && { business_registration_number: data?.business_registration_number }),
    ...(data?.status && { status: data?.status }),
    ...(data?.applicant_status && { applicant_status: data?.applicant_status }),
    ...(data?.existing_name_status && { existing_name_status: setYesOrNoValue(data?.existing_name_status) }),
    ...(data?.company_type && { company_type: setCompanyType(data?.company_type) }),
    ...(data?.business_type && { business_type: data?.business_type }),
    ...(data?.created_at && { created_at: data?.created_at }),
    ...(data?.created_by && { created_by: data?.created_by }),
    ...(data?.last_modified_at && { last_modified_at: data?.last_modified_at }),
    ...(data?.last_modified_by && { last_modified_by: data?.last_modified_by }),
  };
};

export const tranformPayloadForMainLocalAddressDetails = (data) => {
  return {
    ...(data?.id && { id: data?.id }),
    ...(data?.company_id && { company_id: data?.company_id }),
    ...(data?.country_id && { country_id: setCountryId(data?.country_id) }),
    ...(data?.local_address_line_1 && { address_line_1: data?.local_address_line_1 }),
    ...(data?.local_address_line_2 && { address_line_2: data?.local_address_line_2 }),
    ...(data?.portcity_district && { portcity_district: setObjectToString(data?.portcity_district) }),
    ...(data?.status && { status: data?.status }),
    ...(data?.address_status && { address_status: data?.address_status }),
    ...(data?.created_at && { created_at: data?.created_at }),
    ...(data?.created_by && { created_by: data?.created_by }),
    ...(data?.last_modified_at && { last_modified_at: data?.last_modified_at }),
    ...(data?.last_modified_by && { last_modified_by: data?.last_modified_by }),
  };
};

export const tranformPayloadForMainOverseasAddressDetails = (data) => {
  return {
    ...(data?.id && { id: data?.id }),
    ...(data?.overseas_address_line_1 && { address_line_1: data?.overseas_address_line_1 }),
    ...(data?.overseas_address_line_2 && { address_line_2: data?.overseas_address_line_2 }),
    ...(data?.city && { city: setObjectToString(data?.city) }),
    ...(data?.zip_code && { zip_code: data?.zip_code }),
    ...(data?.state && { state: setObjectToString(data?.state) }),
    ...(data?.status && { status: data?.status }),
    ...(data?.address_status && { address_status: data?.address_status }),
    ...(data?.company_id && { company_id: data?.company_id }),
    ...(data?.country_id && { country_id: setCountryId(data?.country_id) }),
    ...(data?.created_at && { created_at: data?.created_at }),
    ...(data?.created_by && { created_by: data?.created_by }),
    ...(data?.last_modified_at && { last_modified_at: data?.last_modified_at }),
    ...(data?.last_modified_by && { last_modified_by: data?.last_modified_by }),
  };
};

export const tranformPayloadForStakeholderBusinessDetails = (data) => {
  return {
    ...(data?.id && { id: data?.id }),
    ...(data?.company_id && { company_id: data?.company_id }),
    ...(data?.individual_stakeholder_type && {
      individual_stakeholder_type: setStakeHolderType(data?.individual_stakeholder_type),
    }),
    // ...(data?.individual_stakeholder_type && { individual_stakeholder_type: data?.individual_stakeholder_type }),
    ...(data?.has_portal_access && { has_portal_access: setPortalAccessValue(data?.has_portal_access) }),
    ...(data?.nic_number && { nic_number: data?.nic_number }),
    ...(data?.passport_number && { passport_number: data?.passport_number }),
    ...(data?.passport_issued_country_id && {
      passport_issued_country_id: setCountryId(data?.passport_issued_country_id),
    }),
    ...(data?.country_id && { country_id: setCountryId(data?.country_id) }),
    ...(data?.title_id && { title_id: setObjectToId(data?.title_id) }),
    ...(data?.first_name && { first_name: data?.first_name }),
    ...(data?.last_name && { last_name: data?.last_name }),
    ...(data?.surname && { surname: data?.surname }),
    ...(data?.address_id && { address_id: data?.address_id }),
    ...(data?.date_of_birth && { date_of_birth: data?.date_of_birth }),
    ...(data?.email && { email: data?.email }),
    ...(data?.residential_phone_number && { residential_phone_number: data?.residential_phone_number }),
    ...(data?.phone_number && { phone_number: data?.phone_number }),
    ...(data?.date_of_appointment && { date_of_appointment: data?.date_of_appointment }),
    ...(data?.occupation && { occupation: data?.occupation }),
    ...(data?.is_attorney_holder && { is_attorney_holder: data?.is_attorney_holder }),
    ...(data?.status && { status: data?.status }),
    ...(data?.created_at && { created_at: data?.created_at }),
    ...(data?.created_by && { created_by: data?.created_by }),
    ...(data?.last_modified_at && { last_modified_at: data?.last_modified_at }),
    ...(data?.last_modified_by && { last_modified_by: data?.last_modified_by }),
    ...(data?.stakeholder_type_shareholder && { stakeholder_type_shareholder: data?.stakeholder_type_shareholder }),
    ...(data?.stakeholder_type_director && { stakeholder_type_director: data?.stakeholder_type_director }),
    ...(data?.stakeholder_type_secratary && { stakeholder_type_secratary: data?.stakeholder_type_secratary }),
    ...(data?.shareholder_type && { shareholder_type: data?.shareholder_type }),
    ...(data?.shareholder_precentage && { shareholder_precentage: data?.shareholder_precentage }),
    ...(data?.legal_entity_company_name && { legal_entity_company_name: data?.legal_entity_company_name }),
    ...(data?.secretary_registration_number && { secretary_registration_number: data?.secretary_registration_number }),

    //remove
    ...(data?.address_id && { address_id: data?.address_id }),
  };
};

export const tranformPayloadForStakeholderLocalAddressDetails = (data) => {
  return {
    ...(data?.id && { id: data?.id }),
    ...(data?.company_id && { company_id: data?.company_id }),
    ...(data?.country_id && { country_id: setCountryId(data?.country_id) }),
    ...(data?.local_address_line_1 && { address_line_1: data?.local_address_line_1 }),
    ...(data?.local_address_line_2 && { address_line_2: data?.local_address_line_2 }),
    ...(data?.portcity_district && { portcity_district: data?.portcity_district }),
    ...(data?.zip_code && { zip_code: data?.zip_code }),
    ...(data?.status && { status: data?.status }),
    ...(data?.address_status && { address_status: data?.address_status }),
    ...(data?.created_at && { created_at: data?.created_at }),
    ...(data?.created_by && { created_by: data?.created_by }),
    ...(data?.last_modified_at && { last_modified_at: data?.last_modified_at }),
    ...(data?.last_modified_by && { last_modified_by: data?.last_modified_by }),
  };
};

export const tranformPayloadForStakeholderOverseasAddressDetails = (data) => {
  return {
    ...(data?.id && { id: data?.id }),
    ...(data?.overseas_address_line_1 && { address_line_1: data?.overseas_address_line_1 }),
    ...(data?.overseas_address_line_2 && { address_line_2: data?.overseas_address_line_2 }),
    ...(data?.company_id && { company_id: data?.company_id }),
    ...(data?.country_id && { country_id: setCountryId(data?.country_id) }),
    ...(data?.city && { city: data?.city }),
    ...(data?.zip_code && { zip_code: data?.zip_code }),
    ...(data?.state && { state: data?.state }),
    ...(data?.status && { status: data?.status }),
    ...(data?.address_status && { address_status: data?.address_status }),
    ...(data?.created_at && { created_at: data?.created_at }),
    ...(data?.created_by && { created_by: data?.created_by }),
    ...(data?.last_modified_at && { last_modified_at: data?.last_modified_at }),
    ...(data?.last_modified_by && { last_modified_by: data?.last_modified_by }),
  };
};

export const transformDataToApiObject = (data, localAddress, overseasAddress) => {
  return {
    data: data ? data : {},
    ...(localAddress && { local_address: localAddress }),
    // ...(localAddress && { portcity_address: localAddress }),
    ...(overseasAddress && { overseas_address: overseasAddress }),
  };
};

export const setStakeholderData = (stakeholderData, dataList) => {
  const dataArray = [];
  stakeholderData?.map((data) => {
    const dataSet = {
      data: {
        address_id: data?.data?.address_id,
        company_id: data?.data?.company_id,
        country_id: setCountryIdToObject(data?.data?.country_id, dataList?.countryList),
        created_at: data?.data?.created_at,
        created_by: data?.data?.created_by,
        date_of_appointment: data?.data?.date_of_appointment,
        date_of_birth: data?.data?.date_of_birth,
        email: data?.data?.email,
        first_name: data?.data?.first_name,
        has_portal_access: setPortalAccessValueToBool(data?.data?.has_portal_access),
        id: data?.data?.id,
        // individual_stakeholder_type: data?.data?.individual_stakeholder_type,
        is_attorney_holder: data?.data?.is_attorney_holder,
        last_modified_at: data?.data?.last_modified_at,
        last_modified_by: data?.data?.last_modified_by,
        last_name: data?.data?.last_name,
        nic_number: data?.data?.nic_number,
        occupation: data?.data?.occupation,
        passport_issued_country_id: setCountryIdToObject(data?.data?.passport_issued_country_id, dataList?.countryList),
        passport_number: data?.data?.passport_number,
        phone_number: data?.data?.phone_number,
        residential_phone_number: data?.data?.residential_phone_number,
        individual_stakeholder_type: setStakeHolderTypeToId(data?.data?.individual_stakeholder_type),
        status: data?.data?.status,
        surname: data?.data?.surname,
        title_id: setTitleObjectById(data?.data?.title_id),
        stakeholder_type_shareholder: data?.data?.stakeholder_type_shareholder,
        stakeholder_type_director: data?.data?.stakeholder_type_director,
        stakeholder_type_secratary: data?.data?.stakeholder_type_secratary,
        shareholder_type: data?.data?.shareholder_type,
        shareholder_precentage: data?.data?.shareholder_precentage,
        legal_entity_company_name: data?.data?.legal_entity_company_name,
        secretary_registration_number: data?.data?.secretary_registration_number,
        isShareholderCategorie: data?.data?.stakeholder_type_director === "YES" ? "1" : "0",
      },
      local_address: {
        id: data?.local_address?.id,
        country_id: setCountryIdToObject(data?.local_address?.country_id, dataList?.countryList),
        company_id: data?.local_address?.company_id,
        stakeholder_id: data?.local_address?.stakeholder_id,
        local_address_line_1: data?.local_address?.address_line_1,
        local_address_line_2: data?.local_address?.address_line_2,
        street_no: data?.local_address?.street_no,
        city: data?.local_address?.city,
        state: data?.local_address?.state,
        district: data?.local_address?.district,
        portcity_district: data?.local_address?.portcity_district,
        localDivisionalSecretarialDivision: data?.local_address?.divisional_secreterist_division,
        province: data?.local_address?.province,
        local_zip_code: data?.local_address?.zip_code,
        status: data?.local_address?.status,
        address_status: data?.local_address?.address_status,
        created_at: data?.local_address?.created_at,
        created_by: data?.local_address?.created_by,
        last_modified_at: data?.local_address?.last_modified_at,
        last_modified_by: data?.local_address?.last_modified_by,
      },
      overseas_address: {
        id: data?.overseas_address?.id,
        country_id: setCountryIdToObject(data?.overseas_address?.country_id, dataList?.countryList),
        company_id: data?.overseas_address?.company_id,
        stakeholder_id: data?.overseas_address?.stakeholder_id,
        overseas_address_line_1: data?.overseas_address?.address_line_1,
        overseas_address_line_2: data?.overseas_address?.address_line_2,
        street_no: data?.overseas_address?.street_no,
        city: data?.overseas_address?.city,
        state: data?.overseas_address?.state,
        divisional_secreterist_division: data?.overseas_address?.divisional_secreterist_division,
        overseas_zip_code: data?.overseas_address?.zip_code,
        status: data?.overseas_address?.status,
        address_status: data?.overseas_address?.address_status,
        created_at: data?.overseas_address?.created_at,
        created_by: data?.overseas_address?.created_by,
        last_modified_at: data?.overseas_address?.last_modified_at,
        last_modified_by: data?.overseas_address?.last_modified_by,
      },
    };
    dataArray.push(dataSet);
  });
  return dataArray;
};

export const TransformGetBussinessDataApiObjectToData = (createdBusinessData, dataList) => {
  return {
    data: {
      id: createdBusinessData?.data?.id,
      company_name: setStringValueToObject(createdBusinessData?.data?.company_name, dataList?.companyList),
      email: createdBusinessData?.data?.email,
      fax_number: createdBusinessData?.data?.fax_number,
      business_registration_number: createdBusinessData?.data?.business_registration_number,
      status: createdBusinessData?.data?.status,
      existing_name_status: setExistingStatusToId(createdBusinessData?.data?.existing_name_status),
      applicant_status: createdBusinessData?.data?.applicant_status,
      company_type: setCompanyTypeToObject(createdBusinessData?.data?.company_type),
      business_type: createdBusinessData?.data?.business_type,
      created_at: createdBusinessData?.data?.created_at,
      created_by: createdBusinessData?.data?.created_by,
      last_modified_at: createdBusinessData?.data?.last_modified_at,
      last_modified_by: createdBusinessData?.data?.last_modified_by,
    },
    local_address: {
      id: createdBusinessData?.local_address?.id,
      country_id: setStringValueToObjectById(createdBusinessData?.local_address?.country_id, dataList?.countryList),
      company_id: createdBusinessData?.local_address?.company_id,
      stakeholder_id: createdBusinessData?.local_address?.stakeholder_id,
      local_address_line_1: createdBusinessData?.local_address?.address_line_1,
      local_address_line_2: createdBusinessData?.local_address?.address_line_2,
      street_no: createdBusinessData?.local_address?.street_no,
      city: setStringValueToObject(createdBusinessData?.local_address?.city, dataList?.cityList),
      state: createdBusinessData?.local_address?.state,
      district: setStringValueToObject(createdBusinessData?.local_address?.district, dataList?.cityList),
      portcity_district: setStringValueToObject(
        createdBusinessData?.local_address?.portcity_district,
        dataList?.portcityDistrictList
      ),
      divisional_secreterist_division: createdBusinessData?.local_address?.divisional_secreterist_division,
      province: createdBusinessData?.local_address?.province,
      zip_code: createdBusinessData?.local_address?.zip_code,
      status: createdBusinessData?.local_address?.status,
      address_status: createdBusinessData?.local_address?.address_status,
      created_at: createdBusinessData?.local_address?.created_at,
      created_by: createdBusinessData?.local_address?.created_by,
      last_modified_at: createdBusinessData?.local_address?.last_modified_at,
      last_modified_by: createdBusinessData?.local_address?.last_modified_by,
    },
    overseas_address: {
      id: createdBusinessData?.overseas_address?.id,
      country_id: setStringValueToObjectById(createdBusinessData?.overseas_address?.country_id, dataList?.companyList),
      company_id: createdBusinessData?.overseas_address?.company_id,
      stakeholder_id: createdBusinessData?.overseas_address?.stakeholder_id,
      overseas_address_line_1: createdBusinessData?.overseas_address?.address_line_1,
      overseas_address_line_2: createdBusinessData?.overseas_address?.address_line_2,
      street_no: createdBusinessData?.overseas_address?.street_no,
      city: setStringValueToObject(createdBusinessData?.overseas_address?.city, dataList?.cityList),
      state: setStringValueToObject(createdBusinessData?.overseas_address?.state, dataList?.stateList),
      district: createdBusinessData?.overseas_address?.district,
      portcity_district: createdBusinessData?.overseas_address?.portcity_district,
      divisional_secreterist_division: createdBusinessData?.overseas_address?.divisional_secreterist_division,
      province: createdBusinessData?.overseas_address?.province,
      zip_code: createdBusinessData?.overseas_address?.zip_code,
      status: createdBusinessData?.overseas_address?.status,
      address_status: createdBusinessData?.overseas_address?.address_status,
      created_at: createdBusinessData?.overseas_address?.created_at,
      created_by: createdBusinessData?.overseas_address?.created_by,
      last_modified_at: createdBusinessData?.overseas_address?.last_modified_at,
      last_modified_by: createdBusinessData?.overseas_address?.last_modified_by,
    },
    step: {
      ad_id: createdBusinessData?.step?.ad_id,
      created_at: createdBusinessData?.step?.created_at,
      id: createdBusinessData?.step?.id,
      last_modified_at: createdBusinessData?.step?.last_modified_at,
      step: setStepToId(createdBusinessData?.step?.step),
    },
    shareholders: setStakeholderData(createdBusinessData?.shareholders?.data, dataList),
    directors: setStakeholderData(createdBusinessData?.directors?.data, dataList),
    secretaries: setStakeholderData(createdBusinessData?.secratories?.data, dataList),
  };
};

export const transformGetBussinessDataApiObjectToData = (data) => {
  return {
    data: {
      id: data?.data?.id,
      company_name: data?.data?.company_name,
      email: data?.data?.email,
      fax_number: data?.data?.fax_number,
      business_registration_number: data?.data?.business_registration_number,
      status: data?.data?.status,
      existing_name_status: data?.data?.existing_name_status,
      applicant_status: data?.data?.applicant_status,
      company_type: data?.data?.company_type,
      business_type: data?.data?.business_type,
      created_at: data?.data?.created_at,
      created_by: data?.data?.created_by,
      last_modified_at: data?.data?.last_modified_at,
      last_modified_by: data?.data?.last_modified_by,
    },
    local_address: {
      id: data?.local_address?.id,
      country_id: data?.local_address?.country_id,
      company_id: data?.local_address?.company_id,
      stakeholder_id: data?.local_address?.stakeholder_id,
      address_line_1: data?.local_address?.address_line_1,
      address_line_2: data?.local_address?.address_line_2,
      street_no: data?.local_address?.street_no,
      city: data?.local_address?.city,
      state: data?.local_address?.state,
      district: data?.local_address?.district,
      portcity_district: data?.local_address?.portcity_district,
      divisional_secreterist_division: data?.local_address?.divisional_secreterist_division,
      province: data?.local_address?.province,
      zip_code: data?.local_address?.zip_code,
      status: data?.local_address?.status,
      address_status: data?.local_address?.address_status,
      created_at: data?.local_address?.created_at,
      created_by: data?.local_address?.created_by,
      last_modified_at: data?.local_address?.last_modified_at,
      last_modified_by: data?.local_address?.last_modified_by,
    },
    overseas_address: {
      id: data?.overseas_address?.id,
      country_id: data?.overseas_address?.country_id,
      company_id: data?.overseas_address?.company_id,
      stakeholder_id: data?.overseas_address?.stakeholder_id,
      address_line_1: data?.overseas_address?.address_line_1,
      address_line_2: data?.overseas_address?.address_line_2,
      street_no: data?.overseas_address?.street_no,
      city: data?.overseas_address?.city,
      state: data?.overseas_address?.state,
      district: data?.overseas_address?.district,
      portcity_district: data?.overseas_address?.portcity_district,
      divisional_secreterist_division: data?.overseas_address?.divisional_secreterist_division,
      province: data?.overseas_address?.province,
      zip_code: data?.overseas_address?.zip_code,
      status: data?.overseas_address?.status,
      address_status: data?.overseas_address?.address_status,
      created_at: data?.overseas_address?.created_at,
      created_by: data?.overseas_address?.created_by,
      last_modified_at: data?.overseas_address?.last_modified_at,
      last_modified_by: data?.overseas_address?.last_modified_by,
    },
  };
};
