// import {createSelector} from 'reselect';
// import {getSelectedChildName} from '../../utils/selector.utils';
// import {
//   getChildMilestoneAge,
//   getChildMilestone,
//   getCategorizeMilestone,
// } from '../../utils/child.utils';
// import {CHILD_MILESTONE} from './milestone';

// export const childMilestoneAge = createSelector(
//   (state) => state.childReducer,
//   (childReducer) => getChildMilestoneAge(childReducer),
// );

// const childMilestoneImages = (state) =>
//   state?.childMilestoneReducer?.milestoneImages ?? [];

// const staticsMilestones = () => CHILD_MILESTONE;

// export const childMilestone = createSelector(
//   staticsMilestones,
//   childMilestoneAge,
//   childMilestoneImages,
//   getSelectedChildName,
//   (milestones, age, images, name) =>
//     getChildMilestone(milestones, age, images, name),
// );

// export const selectedMilestone = (state) =>
//   state?.childMilestoneReducer?.selectedMilestone ?? null;

// export const categorizeMilestone = createSelector(
//   (state) => state.childMilestoneReducer,
//   (childMilestoneReducer) => getCategorizeMilestone(childMilestoneReducer),
// );

// export const getChildBelongsParent = (state) => {
//   return {
//     id: state.childReducer?.childDetails?.Person?.id ?? null,
//     country: state.childReducer?.childDetails?.Person?.country ?? null,
//   };
// };
