import mongoose from 'mongoose';
// import { MEMBER_STATUS, DELEGATE_RECOMMENDATIONS } from '../utils/constants.js';

const AnnouncementSchema = new mongoose.Schema(
  {
    deceasedAssociationName: String,
    deceasedAssociationCode: String,
    deceasedFirstName: String,
    deceasedLastAndMiddleNames: String,
    deceasedDateOfBirth: Date,
    deceasedCountryOfBirth: String,
    deceasedMemberStatus: String,
    deceasedDelegateRecommendation: String,
    comment: String,
    placeOFDeath: String,
    deceasedMemberMatriculation: String,
    dateOfDeath: Date,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Announcement', AnnouncementSchema);
