'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('notifications', [
      {
        task_id: 1,
        user_id: 1,
        message: 'Tugas "Research New Tech" memiliki pembaruan.',
        type: 'Email',
        sent_at: new Date(),
        is_read: false,
      },
      {
        task_id: 2,
        user_id: 2,
        message: 'Tugas "Client Proposal" telah dikomentari.',
        type: 'WhatsApp',
        sent_at: new Date(),
        is_read: false,
      },
      {
        task_id: 3,
        user_id: 3,
        message: 'Tugas "Design Marketing Strategy" mendekati deadline.',
        type: 'Email',
        sent_at: new Date(),
        is_read: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('notifications', null, {});
  },
};
