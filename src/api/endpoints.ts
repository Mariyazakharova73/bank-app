const API_ENDPOINTS = {
  ADMIN: {
    AUDIT_BY_ID: (auditId: string) => `/admin/audit/${auditId}`,
    AUDIT_ALL: "/admin/audit/all",
    APP: "/admin/application",
    APP_BY_ID: (appId: string) => `/admin/application/${appId}`,
  },
  DOC: {
    DOC_BY_ID: (appId: string) => `/document/${appId}`,
    DOC_BY_ID_SIGN: (appId: string) => `/document/${appId}/sign`,
    DOC_BY_ID_SIGN_CODE: (appId: string) => `/document/${appId}/sign/code`,
  },
  APP: {
    REGISTER_BY_ID: (appId: string) => `/application/registration/${appId}`,
    POST_APP: "/application",
    APP_BY_ID_DENY: (appId: string) => `/application/${appId}/deny`,
    APP_APPLY: "/application/apply",
  },
  EMAIL: {
    POST_EMAIL: "/email",
  },
};

export default API_ENDPOINTS;
