import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62fe5e4441165d66bfbea041.mockapi.io/contacts', }),
  tagTypes: ['contact'],
  endpoints: builder => ({
   
      getContacts: builder.query({
      query: () => `/contacts/`,
      providesTags: ['Contact'],
      }),
      
        getContactById: builder.query({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'GET',
      }),
      providesTags: ['Contact'],
    }),
      
      createContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts/`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
      }),
    
      deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
      }), 

       editContact: builder.mutation({
      query: data => ({
        url: `/contacts/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
      
    }),
})

export const { useGetContactsQuery,
    useGetContactByIdQuery,
    useCreateContactMutation,
    useDeleteContactMutation,
useEditContactMutation} = contactApi;
