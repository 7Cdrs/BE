import express from 'express';
import NotificationController from '../controllers/notificationController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rute untuk Notifikasi
router.post('/notifications',authMiddleware, NotificationController.createNotification); // Membuat notifikasi baru
router.get('/notifications/:id',authMiddleware, NotificationController.getNotificationById); // Mendapatkan notifikasi berdasarkan ID
router.get('/users/:user_id/notifications',authMiddleware, NotificationController.getUserNotifications); // Mendapatkan semua notifikasi pengguna
router.delete('/notifications/:id', authMiddleware, NotificationController.deleteNotification); // Menghapus notifikasi

export default router;
