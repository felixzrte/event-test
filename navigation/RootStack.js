import React from 'react';

import {
  EventDetails,
  Merch,
  Product,
  Suggestion,
  UpdateProfile,
  Club,
  AddMerch,
  UpdateEvents,
  UpdateClubs,
  UpdateProduct,
  UpdateAnnouncement,
  Announcement,
} from '../screens';
import Tabs from './Tabs';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Bookmark" component={Tabs} />
      <Stack.Screen name="Maps" component={Tabs} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="Profile" component={Tabs} />
      <Stack.Screen name="Club" component={Club} />
      <Stack.Screen name="Merch" component={Merch} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="Suggestion" component={Suggestion} />
      <Stack.Screen name="AddMerch" component={AddMerch} />
      <Stack.Screen name="UpdateEvents" component={UpdateEvents} />
      <Stack.Screen name="UpdateClubs" component={UpdateClubs} />
      <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
      <Stack.Screen name="Announcement" component={Announcement} />
      <Stack.Screen name="UpdateAnnouncement" component={UpdateAnnouncement} />
    </>
  );
}
