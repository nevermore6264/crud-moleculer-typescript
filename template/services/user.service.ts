'use strict'
import { ServiceSchema } from 'moleculer'

const UserService: ServiceSchema = {
  name: 'user',

  /**
   * Service settings
   */
  settings: {},

  /**
   * Service dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    /**
     * Say a 'Hello'
     *
     * @returns
     */
    hello() {
      return 'Hello Moleculer'
    },

    /**
     * Welcome a username
     *
     * @param {String} name - User name
     */
    welcome: {
      params: {
        name: 'string'
      },
      handler(ctx) {
        return `Welcome, ${ctx.params.name}`
      }
    }
  },

  /**
   * Events
   */
  events: {},

  /**
   * Methods
   */
  methods: {},

  /**
   * Service created lifecycle event handler
   */
  // tslint:disable-next-line:no-empty
  created() {}

  /**
   * Service started lifecycle event handler
   */
  // started() {

  // },

  /**
   * Service stopped lifecycle event handler
   */
  // stopped() {

  // },
}

export = UserService
