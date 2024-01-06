import HTTPClient from "../http_instance/wrappedInstance";

export default class EventServices {
  static async getSingleEvent(eventId) {
    const response = await HTTPClient.get(`/event/single/${eventId}`);
    return response.data;
  }

  static async assignHomepageEvent(eventId) {
    const response = await HTTPClient.put(
      `/event/assign-homepage-event/${eventId}`,
      undefined
    );
    return response.data;
  }

  static async getHomeEvent() {
    const response = await HTTPClient.get(`/event/get-homepage-event`);
    return response.data;
  }
  static async getAllStateEvents(state) {
    const response = await HTTPClient.get(`/event/all/${state}`);
    return response.data;
  }
  static async getUpcomingEvents() {
    const response = await HTTPClient.get(`/event/upcoming`);
    return response.data;
  }
  static async getPastEvents() {
    const response = await HTTPClient.get(`/event/past`);
    return response.data;
  }
  static async getCurrentEvents() {
    const response = await HTTPClient.get(`/event/current`);
    return response.data;
  }
  static async CheckUserRegisteration(eventId, userId) {
    const response = await HTTPClient.get(
      `/event-register/check-user-registration?event_id=${eventId}&user_id=${userId}`
    );
    return response.data;
  }
  static async getAllUserRegisteredEvents(userID) {
    const response = await HTTPClient.get(
      `/event-register/get-all-registered-events-by-user/${userID}`
    );
    return response.data;
  }
  static async getAllUserPastEvents(userID) {
    const response = await HTTPClient.get(
      `/event-register/get-all-past-registered-events-by-user/${userID}`
    );
    return response.data;
  }
  static async getAllUserUpcomingvents(userID) {
    const response = await HTTPClient.get(
      `/event-register/get-all-upcoming-registered-events-by-user/${userID}`
    );
    return response.data;
  }
  static async getAllEventParticipantsbyEventId(eventId) {
    const response = await HTTPClient.get(
      `/event-register/get-all-event-participant/${eventId}`
    );
    return response.data;
  }

  static async getSessionByEventId(eventId) {
    const response = await HTTPClient.get(`/event/session-by-event/${eventId}`);
    return response.data;
  }

  static async getBreakoutRoomParticipantsByBRId(brkRoomId) {
    const response = await HTTPClient.get(
      `/event-register/get-all-event-register/${brkRoomId}`
    );
    return response.data;
  }

  static async getAllEventParticipants(eventId) {
    const response = await HTTPClient.get(
      `/event-register/get-all-event-participant/${eventId}`
    );
    return response.data;
  }

  static async getAllEventParticipantsByGender(gender) {
    const response = await HTTPClient.get(
      `/event-register/get-all-event-participant-by-gender?gender=${gender}`
    );
    return response.data;
  }

  static async getAllParticipantsById(evendId) {
    const response = await HTTPClient.get(
      `/event-register/get-all-event-participant/${evendId}`
    );
    return response.data;
  }

  static async getAllSpeakers() {
    const response = await HTTPClient.get(`/event/speakers/all`);
    return response.data;
  }
  static async getUserSurveyStatus(registeredEventId) {
    const response = await HTTPClient.get(
      `/survey/get-survey-status-by-eventregister-id/${registeredEventId}`
    );
    return response.data;
  }
  static async createUserSurvey(data) {
    const response = await HTTPClient.post(`/survey`, data);
    return response.data;
  }
  static async registerforEvent(data) {
    const response = await HTTPClient.post(`/event-register`, data);
    return response.data;
  }
  static async adminCreateEvent(data) {
    const response = await HTTPClient.post(`/event`, data);
    return response.data;
  }

  static async createEventThumbnail(data) {
    const response = await HTTPClient.formDataPost(
      `/event/createEvent-Image`,
      data
    );
    return response.data;
  }

  static async adminCreateSession(data) {
    const response = await HTTPClient.post(`/event/session`, data);
    return response.data;
  }
  static async adminCreateSubSession(data) {
    const response = await HTTPClient.post(
      `/event/session/breakout-room`,
      data
    );
    return response.data;
  }
  static async adminUpdateEvent(eventId) {
    const response = await HTTPClient.put(
      `/event/update-event-state/${eventId}`,
      undefined
    );
    return response.data;
  }
  static async createSpeaker(data) {
    const response = await HTTPClient.post(`/event/speaker`, data);
    return response.data;
  }

  static async createSpeakerImage(data) {
    const response = await HTTPClient.formDataPost(
      `/event/createSpeaker-Image`,
      data
    );
    return response.data;
  }

  static async createHeroSection(data) {
    const response = await HTTPClient.post(`/Hero/create_hero`, data);
    return response.data;
  }
  static async createHeroSectionImage(data) {
    const response = await HTTPClient.formDataPost(
      `/Hero/createHero-Image`,
      data
    );
    return response.data;
  }

  static async createAboutSection(data) {
    const response = await HTTPClient.formDataPost(
      `/Hero/createAboutSection/with_image`,
      data
    );
    return response.data;
  }

  static async updateAboutSection(data) {
    const response = await HTTPClient.patch(
      `/Hero/updateAboutSection/with_image`,
      data
    );
    return response.data;
  }

  static async createMediaPartnerSection(data) {
    const response = await HTTPClient.post(`/Hero/create_footer`, data);
    return response.data;
  }

  static async createMediaPartnerSectionImages(data) {
    const response = await HTTPClient.formDataPost(
      `/Hero/add-mediapartner/image`,
      data
    );
    return response.data;
  }

  static async getHeroSectionData() {
    const response = await HTTPClient.get(`/Hero/get_hero/findallheros`);
    return response.data;
  }

  static async getAboutSectionData() {
    const response = await HTTPClient.get(`/Hero/get_about_section/about`);
    return response.data;
  }

  static async getMediaSectionData() {
    const response = await HTTPClient.get(`/Hero/get_footer/allfooter`);
    return response.data;
  }

  static async getAllMessages(userId) {
    const response = await HTTPClient.get(`/help-desk/all-message/${userId}`);
    return response.data;
  }

  static async newTicket(data) {
    const response = await HTTPClient.post(`/help-desk/new-ticket`, data);
    return response.data;
  }

  static async createMessage(data) {
    const response = await HTTPClient.post(`/help-desk/new-message`, data);
    return response.data;
  }

  static async getAllTicketsWithMessage() {
    const response = await HTTPClient.get(`/help-desk/all-tickets_with_message
    `);
    return response.data;
  }

  static async getAllTicketByUserId() {
    const response = await HTTPClient.get(`/help-desk/tickets_by_userid`);
    return response.data;
  }
  static async getNewAllTicketByUserId(phone) {
    const response = await HTTPClient.get(
      `/help-desk/tickets_by_userid/turned-phone/${phone}`
    );
    return response.data;
  }

  static async getAllTicket() {
    const response = await HTTPClient.get(`/help-desk/all-tickets`);
    return response.data;
  }

  static async getAllTicketByTicketId(ticketId) {
    const response = await HTTPClient.get(
      `/help-desk/tickets_by_id/${ticketId}`
    );
    return response.data;
  }

  static async updateTicket(data) {
    const response = await HTTPClient.put(`/help-desk/update-ticket`, data);
    return response.data;
  }

  static async createSurvey(data) {
    const response = await HTTPClient.post(`/surveycreation`, data);
    return response.data;
  }

  static async getAllCreatedsurvey(data) {
    const response = await HTTPClient.get(`/surveycreation/get-all-survey`);
    return response.data;
  }

  static async UpdateAttendeeEventStatus(data) {
    const response = await HTTPClient.put(
      `/event-register/update-event-register`,
      data
    );
    return response.data;
  }
}
