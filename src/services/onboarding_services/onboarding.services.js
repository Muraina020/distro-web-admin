import HTTPClient from "../http_instance/wrappedInstance";

export default class OnboardingServices {
  static async signIn(data) {
    const response = await HTTPClient.post("/auth/login", data);
    return response.data;
  }
  static async signUp(data) {
    const response = await HTTPClient.post("/auth/register", data);
    return response.data;
  }

  static async passwordReset(data) {
    const response = await HTTPClient.post(
      // `/auth/reset/password/${token}`,
      `/auth/reset/password`,
      data
    );
    return response.data;
  }

  static async getAllCountries() {
    const response = await HTTPClient.get(`/countries/getAllCountries`);
    return response.data;
  }
  static async getUserbyId(id) {
    const response = await HTTPClient.get(`/user/${id}`);
    return response.data;
  }

  static async getWorldCountries() {
    const response = await HTTPClient.get(`/countries/getWorldCountries`);
    return response.data;
  }

  static async getStatesName(countryCode) {
    const response = await HTTPClient.get(
      `/countries/getAllStatesByCountryCode/${countryCode}`
    );
    return response.data;
  }

  static async getJobs() {
    const response = await HTTPClient.get(`/countries/getjobs
    `);
    return response.data;
  }

  static async profileUpdate(userId, data) {
    const response = await HTTPClient.put(`/user/update/${userId}`, data);
    return response.data;
  }
  static async uploadImage(data) {
    const response = await HTTPClient.formDataPost(
      `/user/createUser-Image`,
      data
    );
    return response.data;
  }

  static async forgotPassword(data) {
    const response = await HTTPClient.post(`/auth/forgot/password`, data);
    return response.data;
  }

  static async getUserProfileDetail() {
    const response = await HTTPClient.get(`/user/prrofile/user`);
    return response.data;
  }

  static async createUserProfileImage(data) {
    const response = await HTTPClient.post(`/user/createUser-Image`, data);
    return response.data;
  }

  static async createAdmin(data) {
    const response = await HTTPClient.post(`/user/create-admin-user`, data);
    return response.data;
  }

  static async getUserByRoleId(roleId) {
    const response = await HTTPClient.get(`/user/users_by_role/${roleId}`);
    return response.data;
  }

  static async getAllRoles() {
    const response = await HTTPClient.get(`/user/role/allroles`);
    return response.data;
  }

  static async getAllRoles(page, limit) {
    const response = await HTTPClient.get(
      `/user/users/all_users?page=${page}&limit=${limit}`
    );
    return response.data;
  }

  static async getAllUsers(page, limit) {
    const response = await HTTPClient.get(
      `/user/users/all_users?page=${page}&limit=${limit}`
    );
    return response.data;
  }
}
