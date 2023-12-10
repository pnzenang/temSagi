// import { FormInput, SubmitBtn, FormDate, FormSelect } from '../components';
// import { styled } from 'styled-components';
// import day from 'dayjs';
// import advancedFormat from 'dayjs/plugin/advancedFormat';

// import {
//   Form,
//   useNavigation,
//   redirect,
//   useOutletContext,
//   useLoaderData,
// } from 'react-router-dom';
// import {
//   MEMBER_STATUS,
//   DELEGATE_RECOMMENDATIONS,
// } from '../../../utils/constants';
// import { toast } from 'react-toastify';
// import customFetch from '../utils/customFetch';

// export const loader = async ({ params }) => {
//   try {
//     const { data } = await customFetch.get(`/members/${params.id}`);
//     return data;
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return redirect('/dashboard');
//   }
// };

// export const action = async ({ request, params }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   try {
//     await customFetch.post(`/members`, data);
//     toast.success('death announced successfully');
//     return redirect('/dashboard');
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

// const DeathAnnouncement = () => {
//   const { member } = useLoaderData();
//   const { user } = useOutletContext();

//   return (
//     <section className='h-full grid  place-items-center mt-20 '>
//       <Form
//         method='POST'
//         className='card w-96 lg:w-full px-8 pb-20 pt-10 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary '
//       >
//         <h4 className='text-start text-3xl font-bold my-8 capitalize'>
//           death announcement
//         </h4>
//         <div className='grid  lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
//           {user.role === 'user' ? (
//             <FormInput
//               type='text'
//               label='deceased member first name'
//               name='deceasedFirstName'
//               value={member.firstName}
//               onChange={() => null}
//             />
//           ) : (
//             <FormInput
//               type='text'
//               label='deceased member first name'
//               name='deceasedFirstName'
//               defaultValue={member.firstName}
//               onChange={() => null}
//             />
//           )}
//           {user.role === 'user' ? (
//             <FormInput
//               type='text'
//               label='deceased member last and middle names'
//               name='deceasedLastAndMiddleNames'
//               value={member.lastAndMiddleNames}
//               onChange={() => null}
//             />
//           ) : (
//             <FormInput
//               type='text'
//               label='deceased member last and middle names'
//               name='deceasedLastAndMiddleNames'
//               defaultValue={member.lastAndMiddleNames}
//               onChange={() => null}
//             />
//           )}
//           {user.role === 'user' ? (
//             <FormInput
//               type='text'
//               label='deceased member date of birth'
//               name='deceasedDateOfBirth'
//               value={member.dateOfBirth}
//               onChange={() => null}
//             />
//           ) : (
//             <FormInput
//               type='text'
//               label='deceased member date of birth'
//               name='deceasedDateOfBirth'
//               defaultValue={member.dateOfBirth}
//               onChange={() => null}
//             />
//           )}
//           {user.role === 'user' ? (
//             <FormInput
//               type='text'
//               label='deceased member country of birth'
//               name='deceasedCountryOfBirth'
//               value={member.countryOfBirth}
//               onChange={() => null}
//             />
//           ) : (
//             <FormInput
//               type='text'
//               label='deceased member country of birth'
//               name='deceasedCountryOfBirth'
//               defaultValue={member.countryOfBirth}
//               onChange={() => null}
//             />
//           )}
//           {user.role === 'user' ? (
//             <FormInput
//               type='text'
//               label='association name'
//               name='deceasedAssociationName'
//               value={member.associationName}
//               onChange={() => null}
//             />
//           ) : (
//             <FormInput
//               type='text'
//               label='association name'
//               name='deceasedAssociationName'
//               defaultValue={member.associationName}
//               onChange={() => null}
//             />
//           )}
//           {user.role === 'user' ? (
//             <FormInput
//               type='text'
//               label='association code'
//               name='deceasedAssociationCode'
//               value={member.associationCode}
//               onChange={() => null}
//             />
//           ) : (
//             <FormInput
//               type='text'
//               label='association code'
//               name='deceasedAssociationCode'
//               defaultValue={member.associationCode}
//               onChange={() => null}
//             />
//           )}

//           {user.role === 'user' ? (
//             <FormInput
//               label='delegate recommendation'
//               name='deceasedDelegateRecommendation'
//               value={member.delegateRecommendation}
//               onChange={() => null}
//             />
//           ) : (
//             <FormSelect
//               label='delegate recommendation'
//               name='deceasedDelegateRecommendation'
//               defaultValue={member.delegateRecommendation}
//               list={Object.values(DELEGATE_RECOMMENDATIONS)}
//               onChange={() => null}
//             />
//           )}
//           {user.role === 'user' ? (
//             <FormInput
//               label='member status'
//               name='deceasedMemberStatus'
//               value={member.memberStatus}
//               onChange={() => null}
//             />
//           ) : (
//             <FormSelect
//               label='member status'
//               name='deceasedMemberStatus'
//               defaultValue={member.memberStatus}
//               list={Object.values(MEMBER_STATUS)}
//             />
//           )}
//           {user.role === 'user' ? (
//             <FormInput type='text' label='place of death' name='placeOfDeath' />
//           ) : (
//             <FormInput type='text' label='place of death' name='placeOfDeath' />
//           )}
//           <FormDate label='date of death' name='dateOfDeath' />
//           <div>
//             <label className='block text-sm font-medium leading-6 capitalize'>
//               add a brief comment
//             </label>
//             <div className='mt-2'>
//               <textarea
//                 rows={4}
//                 name='comment'
//                 // id='comment'
//                 className='block w-full bg-base-200 textarea textarea-bordered textarea-xs text-sm md:text-lg w-full '
//                 defaultValue={''}
//                 required
//               />
//             </div>
//           </div>
//           <FormInput
//             label='member matriculation '
//             name='deceasedMemberMatriculation'
//             value={member.memberMatriculation}
//             onChange={() => null}
//           />
//           <div className='mt-8'>
//             <SubmitBtn text='submit' />
//           </div>
//         </div>
//       </Form>
//     </section>
//   );
// };
// export default DeathAnnouncement;

import React from 'react';

const DeathAnnouncement = () => {
  return <h1 className='text-3xl'>Death Announcement</h1>;
};

export default DeathAnnouncement;
