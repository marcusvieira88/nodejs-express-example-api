class Config {
  /**
   * Represent the database configuration
   */
  static getDatabaseConfig() {
    return {
      LOCAL: 'local',
      DEVELOPMENT: 'development',
      STAGING: 'staging',
      PRODUCTION: 'production',
      environment: {
        'local': {config: 'mongodb://localhost:27017/tutorial-local'},
        'development': {config: 'mongodb://localhost:27017/tutorial-develop'},
        'staging': {config: 'mongodb://localhost:27017/tutorial-staging'},
        'production': {config: 'mongodb://localhost:27017/tutorial-production'}
      }
    };
  }
}

module.exports = Config;

