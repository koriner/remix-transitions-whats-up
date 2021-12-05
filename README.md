# Example repo for understanding Remix useTransition

## Why?

I'm trying to use `useTransition` to properly detect and show loading states etc. It's not working for me and I don't know what I've done wrong, or if I should have spent more time reading docs before whining.

## To test

Just run the app and go to the example `demo` route. Submitting the form waits for a random time before returning, but I do not see the transition state changes happening or being logged from the `useEffect`
