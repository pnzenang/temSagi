import Member from './Member';
import PageBtnContainer from './PageBtnContainer';
import { useAnnouncementContext } from '../pages/Announcement';
import { AnnouncementComplexPagination } from '../components';
import AnnouncementMember from './AnnouncementMember';

const AnnouncementMembersContainer = () => {
  const { data } = useAnnouncementContext();
  const {
    members,
    membersForAnnouncement,
    numOfPages2,
    currentPage,
    totalMembers2,
  } = data;

  if (members.length === 0)
    return (
      <>
        <h1 className='text-3xl'>
          Hey delegate, the members need to be confirmed and vested to receive
          benefits
        </h1>
      </>
    );
  return (
    <>
      <h5 className='pb-2 text-2xl'>
        {membersForAnnouncement.length <= 1 && `there's `}
        {totalMembers2} confirmed and vested member
        {membersForAnnouncement.length > 1 && 's'} found
      </h5>
      <ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 pb-4 '>
        {membersForAnnouncement.map((member) => {
          return <AnnouncementMember key={member._id} {...member} />;
        })}
      </ul>
      {numOfPages2 > 1 && <AnnouncementComplexPagination />}
      {}
    </>
  );
};
export default AnnouncementMembersContainer;
