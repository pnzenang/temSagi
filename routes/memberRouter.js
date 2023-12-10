import { Router } from 'express';
const router = Router();

import {
  getAllMembers,
  getMember,
  createMember,
  updateMember,
  showStats,
  createDeathAnnouncement,
} from '../controllers/memberController.js';
import {
  validateMemberInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';

router
  .route('/')
  .get(getAllMembers)
  .post(validateMemberInput, createMember)
  .post(createDeathAnnouncement);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getMember)
  .patch(validateMemberInput, validateIdParam, updateMember);
// .delete(validateIdParam, deleteMember);

export default router;
