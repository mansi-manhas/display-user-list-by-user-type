## Requirement
Implement this [design](https://user-images.githubusercontent.com/18692751/224435857-080ea85b-87f6-43c7-bc60-b93d4140b4aa.png) and build a react app in TypeScript. The data will be fetcehd with the GraphQL API. 


## Demo Screenshots

### Desktop
![image](https://user-images.githubusercontent.com/18692751/224436049-b2b642cd-87a6-40a6-8535-390d9ce9f98a.png)

### Responsive on Desktop
![image](https://user-images.githubusercontent.com/18692751/224436102-f952f614-c9b9-4ef6-86e6-56f26f5c3860.png)

### Mobile Friendly
![image](https://user-images.githubusercontent.com/18692751/224436145-f107fb55-09c4-431c-bf33-0c3c5c5ca7df.png)

## Overview of folder structure and coding approach

- `api`: contains `queries.ts` and `aws-exports.js`

- `components`: contains common reusable components being used in the UI, like `AvatarCard`, `RadioGroup`, `Text`, `Title`

- `ui`: contains the custom ui components as per the design
     - `UserTypes.tsx`: first part of the UI
     - `UserListByType.tsx`: second part of the UI
     - `UserView.tsx`: `UserTypes.tsx` + `UserListByType.tsx`
     
- Each folder has below files:
     - `styles.styled.ts`: contains `styled-components` 
     - `types.ts`: contains typescript types and prop types
     - `__tests__`: folder contains unit tests for each component

- If the requirement was more complex, then we would be creating multiple sub-folders for each component, and each sub-folder would have above files

- `UserView` component is a wrapper component around `UserType` and `UserListByType`

### Performance Optimization

- Using `useMemo` hook that helps avoiding re-execution of same expensive function in any component. This memoize the values between renders.
- Using `useCallback` hook that returns a memoized instance of the method that changes with the change of dependencies (i.e., instead of re-creating the instance of the function in every render, the same instance will be used)

## Unit Tests coverage 

All files            |   89.55 |    81.25 |    82.6 |    90.9 |
